import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from "react";

const LS_KEYS = {
  favorites: "bondmaxx-favorites",
  cart: "bondmaxx-cart",
};

// --- Reducer ---
const initialState = {
  favorites: [], // [{ id, ...product }]
  cart: [], // [{ qty, ...product }]
  isHydrated: false, // Add this flag
};

function reducer(state, action) {
  switch (action.type) {
    case "HYDRATE": {
      const { favorites, cart } = action.payload;
      return {
        favorites: Array.isArray(favorites) ? favorites : [],
        cart: Array.isArray(cart) ? cart : [],
        isHydrated: true, // Mark as hydrated
      };
    }

    case "TOGGLE_FAVORITE": {
      const product = action.payload;
      const exists = state.favorites.some((f) => f.id === product.id);
      const favorites = exists
        ? state.favorites.filter((f) => f.id !== product.id)
        : [...state.favorites, product];
      return { ...state, favorites };
    }

    case "ADD_TO_CART": {
      const { product, qty = 1 } = action.payload;
      const exists = state.cart.find((c) => c.id === product.id);
      const cart = exists
        ? state.cart.map((c) =>
            c.id === product.id ? { ...c, qty: c.qty + qty } : c
          )
        : [...state.cart, { ...product, qty }];
      return { ...state, cart };
    }

    case "SET_QTY": {
      const { productId, qty } = action.payload;
      const cart = state.cart
        .map((c) => (c.id === productId ? { ...c, qty: Math.max(1, qty) } : c))
        .filter((c) => c.qty > 0);
      return { ...state, cart };
    }

    case "REMOVE_FROM_CART": {
      const productId = action.payload;
      const cart = state.cart.filter((c) => c.id !== productId);
      return { ...state, cart };
    }

    case "CLEAR_CART":
      return { ...state, cart: [] };

    default:
      return state;
  }
}

// --- Context ---
const ShopContext = createContext(null);

export function ShopProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState, (initial) => {
    // Hydrate during initialization instead of useEffect
    if (typeof window !== "undefined") {
      try {
        const favorites = JSON.parse(
          localStorage.getItem(LS_KEYS.favorites) || "[]"
        );
        const cart = JSON.parse(localStorage.getItem(LS_KEYS.cart) || "[]");
        return {
          favorites: Array.isArray(favorites) ? favorites : [],
          cart: Array.isArray(cart) ? cart : [],
          isHydrated: true,
        };
      } catch {
        return initial;
      }
    }
    return initial;
  });

  // Hydrate from localStorage once
  useEffect(() => {
    try {
      const favorites = JSON.parse(
        localStorage.getItem(LS_KEYS.favorites) || "[]"
      );
      const cart = JSON.parse(localStorage.getItem(LS_KEYS.cart) || "[]");
      dispatch({ type: "HYDRATE", payload: { favorites, cart } });
    } catch {
      dispatch({ type: "HYDRATE", payload: initialState });
    }
  }, []);

  // Persist favorites & cart (only after hydration)
  useEffect(() => {
    if (state.isHydrated) {
      localStorage.setItem(LS_KEYS.favorites, JSON.stringify(state.favorites));
    }
  }, [state.favorites, state.isHydrated]);

  useEffect(() => {
    if (state.isHydrated) {
      localStorage.setItem(LS_KEYS.cart, JSON.stringify(state.cart));
    }
  }, [state.cart, state.isHydrated]);

  // Actions
  const toggleFavorite = (product) =>
    dispatch({ type: "TOGGLE_FAVORITE", payload: product });

  const addToCart = (product, qty = 1) =>
    dispatch({ type: "ADD_TO_CART", payload: { product, qty } });

  const setQty = (productId, qty) =>
    dispatch({ type: "SET_QTY", payload: { productId, qty } });

  const removeFromCart = (productId) =>
    dispatch({ type: "REMOVE_FROM_CART", payload: productId });

  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  // Selectors / helpers
  const isFavorite = (id) => state.favorites.some((f) => f.id === id);
  const inCart = (id) => state.cart.some((c) => c.id === id);

  const cartCount = useMemo(
    () => state.cart.reduce((sum, item) => sum + (item.qty || 1), 0),
    [state.cart]
  );

  // If you have prices later, compute a total:
  const cartTotal = useMemo(
    () =>
      state.cart.reduce((sum, item) => {
        const price = Number(item.price || 0);
        return sum + price * (item.qty || 1);
      }, 0),
    [state.cart]
  );

  const value = useMemo(
    () => ({
      favorites: state.favorites,
      cart: state.cart,
      // actions
      toggleFavorite,
      addToCart,
      setQty,
      removeFromCart,
      clearCart,
      // helpers
      isFavorite,
      inCart,
      cartCount,
      cartTotal,
    }),
    [state, cartCount, cartTotal]
  );

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

export function useShop() {
  const ctx = useContext(ShopContext);
  if (!ctx) throw new Error("useShop must be used within ShopProvider");
  return ctx;
}
