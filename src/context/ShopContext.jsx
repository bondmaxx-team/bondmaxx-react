import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from "react";

const LS_KEYS = {
  cart: "bondmaxx-cart",
  favorites: "bondmaxx-favorites",
};

// --- Reducer ---
const initialState = {
  cart: [], // [{ qty, ...product }]
  favorites: [], // [{ id, name, image, price, ... }]
  isHydrated: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "HYDRATE": {
      const { cart, favorites } = action.payload;
      return {
        cart: Array.isArray(cart) ? cart : [],
        favorites: Array.isArray(favorites) ? favorites : [],
        isHydrated: true,
      };
    }

    case "ADD_TO_CART": {
      const { product } = action.payload;
      const exists = state.cart.find((c) => c.id === product.id);
      // Toggle: if exists, remove it; otherwise add it with qty=1
      const cart = exists
        ? state.cart.filter((c) => c.id !== product.id)
        : [...state.cart, { ...product, qty: 1 }];
      return { ...state, cart };
    }

    case "INCREMENT_QTY": {
      const productId = action.payload;
      const cart = state.cart.map((c) =>
        c.id === productId ? { ...c, qty: c.qty + 1 } : c
      );
      return { ...state, cart };
    }

    case "DECREMENT_QTY": {
      const productId = action.payload;
      const cart = state.cart
        .map((c) =>
          c.id === productId ? { ...c, qty: Math.max(0, c.qty - 1) } : c
        )
        .filter((c) => c.qty > 0); // Remove if qty reaches 0
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

    case "TOGGLE_FAVORITE": {
      const item = action.payload;
      const exists = state.favorites.find((f) => f.id === item.id);
      const favorites = exists
        ? state.favorites.filter((f) => f.id !== item.id)
        : [...state.favorites, item];
      return { ...state, favorites };
    }

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
        const cart = JSON.parse(sessionStorage.getItem(LS_KEYS.cart) || "[]");
        const favorites = JSON.parse(
          localStorage.getItem(LS_KEYS.favorites) || "[]"
        );
        return {
          cart: Array.isArray(cart) ? cart : [],
          favorites: Array.isArray(favorites) ? favorites : [],
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
      const cart = JSON.parse(sessionStorage.getItem(LS_KEYS.cart) || "[]");
      const favorites = JSON.parse(
        localStorage.getItem(LS_KEYS.favorites) || "[]"
      );
      dispatch({ type: "HYDRATE", payload: { cart, favorites } });
    } catch {
      dispatch({ type: "HYDRATE", payload: initialState });
    }
  }, []);

  // Persist cart (only after hydration)
  useEffect(() => {
    if (state.isHydrated) {
      sessionStorage.setItem(LS_KEYS.cart, JSON.stringify(state.cart));
    }
  }, [state.cart, state.isHydrated]);

  // Persist favorites (only after hydration)
  useEffect(() => {
    if (state.isHydrated) {
      localStorage.setItem(LS_KEYS.favorites, JSON.stringify(state.favorites));
    }
  }, [state.favorites, state.isHydrated]);

  // Actions
  const addToCart = (product) =>
    dispatch({ type: "ADD_TO_CART", payload: { product } });

  const incrementQty = (productId) =>
    dispatch({ type: "INCREMENT_QTY", payload: productId });

  const decrementQty = (productId) =>
    dispatch({ type: "DECREMENT_QTY", payload: productId });

  const setQty = (productId, qty) =>
    dispatch({ type: "SET_QTY", payload: { productId, qty } });

  const removeFromCart = (productId) =>
    dispatch({ type: "REMOVE_FROM_CART", payload: productId });

  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  const toggleFavorite = (item) =>
    dispatch({ type: "TOGGLE_FAVORITE", payload: item });

  // Selectors / helpers
  const inCart = (id) => state.cart.some((c) => c.id === id);

  const isFavorite = (id) => state.favorites.some((f) => f.id === id);

  // Total number of items (sum of all quantities)
  const cartCount = useMemo(
    () => state.cart.reduce((sum, item) => sum + (item.qty || 1), 0),
    [state.cart]
  );

  // Number of unique products in cart
  const cartTotal = useMemo(() => state.cart.length, [state.cart]);

  const value = useMemo(
    () => ({
      cart: state.cart,
      favorites: state.favorites,
      // actions
      addToCart,
      incrementQty,
      decrementQty,
      setQty,
      removeFromCart,
      clearCart,
      toggleFavorite,
      // helpers
      inCart,
      isFavorite,
      cartCount, // مجموع الكميات (5 قطع مثلاً)
      cartTotal, // عدد المنتجات المختلفة (2 منتج مثلاً)
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
