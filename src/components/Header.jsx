import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function CartItem({ item, index, onRemove }) {
  return (
    <div className="flex items-center justify-between gap-3 p-2 border rounded bg-white">
      <div className="flex items-center gap-3">
        <img
          alt={item.name || "منتج"}
          src={item.image || ""}
          className="w-12 h-12 object-cover rounded-md border"
        />
        <div>
          <div className="font-medium">{item.name || "منتج"}</div>
          {item.price && (
            <div className="text-sm text-gray-500">{item.price} ₺</div>
          )}
        </div>
      </div>
      <button
        title="remove"
        type="button"
        className="text-red-600 hover:text-red-700"
        onClick={() => onRemove(index)}
      >
        <i className="fas fa-trash-alt"></i>
      </button>
    </div>
  );
}

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState({
    code: "ar",
    name: "العربية",
    flag: "https://flagcdn.com/w20/sa.png",
  });
  const [cartCount, setCartCount] = useState(0);
  const [favorites, setFavorites] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("bondmaxx-favorites");
    const storedCart = localStorage.getItem("bondmaxx-cart");

    if (storedFavorites) {
      try {
        setFavorites(JSON.parse(storedFavorites));
      } catch (err) {
        console.error("Failed to parse favorites:", err);
      }
    }

    if (storedCart) {
      try {
        const cart = JSON.parse(storedCart);
        console.log(cart);
        setCartItems(cart);
        setCartCount(cart.length);
        setCartTotal(cart.reduce((sum, item) => sum + (item.price || 0), 0));
      } catch (err) {
        console.error("Failed to parse cart:", err);
      }
    }
  }, []); // 👈 run only once on mount

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const toggleFavorites = () => {
    setIsFavoritesOpen(!isFavoritesOpen);
  };

  const closeFavorites = () => {
    setIsFavoritesOpen(false);
  };

  const toggleLanguageMenu = () => {
    setIsLanguageMenuOpen(!isLanguageMenuOpen);
  };

  const selectLanguage = (code, name, flag) => {
    setCurrentLanguage({ code, name, flag });
    setIsLanguageMenuOpen(false);
  };

  const submitCartToWhatsApp = () => {
    console.log("Submit cart to WhatsApp");
  };

  const removeFromCart = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);

    setCartItems(updatedCart);

    localStorage.setItem("bondmaxx-cart", JSON.stringify(updatedCart));

    const newTotal = updatedCart.reduce(
      (sum, item) => sum + Number(item.price || 0),
      0
    );
    setCartTotal(newTotal);
  };
  const removeFromFav = (index) => {
    // console.log(index);
    const updatedCart = favorites.filter((_, i) => i !== index);

    console.log(updatedCart);

    setFavorites(updatedCart);

    localStorage.setItem("bondmaxx-favorites", JSON.stringify(updatedCart));
  };

  const languages = [
    { code: "ar", name: "العربية", flag: "https://flagcdn.com/w20/sa.png" },
    { code: "tr", name: "Türkçe", flag: "https://flagcdn.com/w20/tr.png" },
    { code: "en", name: "English", flag: "https://flagcdn.com/w20/us.png" },
    { code: "de", name: "Deutsch", flag: "https://flagcdn.com/w20/de.png" },
  ];

  const menuItems = [
    { href: "/", label: "الرئيسية", icon: "fas fa-home" },
    { href: "/interior-colors", label: "الداخلية" },
    { href: "/exterior-colors", label: "الخارجية" },
    { href: "insulation", label: "العزل" },
    { href: "/color-collection", label: "مجموعة الألوان" },
    { href: "/painting-services", label: "أحجز خدمات الدهان" },
    { href: "/search-dealer", label: "البحث عن تاجر" },
    { href: "/about", label: "معلومات عنا" },
  ];

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16">
          <div className="flex justify-between items-center h-full">
            {/* Left - Favorites + Language */}
            <div className="flex items-center gap-3 flex-1">
              {/* Cart */}
              <button
                title="button"
                type="button"
                className="relative flex items-center gap-1.5 px-2 sm:px-2.5 py-1.5 rounded-lg bg-white hover:bg-emerald-50 hover:text-emerald-600 active:scale-95 active:bg-emerald-100 transition-all duration-150 text-sm"
                onClick={toggleCart}
              >
                <i className="fas fa-shopping-cart text-base"></i>
                <span className="hidden sm:inline">السلة</span>

                {/* badge */}
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 text-xs min-w-[18px] h-[18px] flex items-center justify-center rounded-full bg-red-500 text-white font-medium">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Favorites */}
              <button
                title="button"
                type="button"
                className="flex items-center gap-1.5 px-2 sm:px-2.5 py-1.5 rounded-lg bg-white hover:bg-red-50 hover:text-red-500 active:scale-95 active:bg-red-100 transition-all duration-150 text-sm"
                onClick={toggleFavorites}
              >
                <i className="fas fa-heart text-base"></i>
                <span className="hidden sm:inline">المفضلة</span>
              </button>

              {/* Language */}
              <div className="relative">
                <button
                  title="button"
                  type="button"
                  className="flex items-center gap-1.5 px-2 sm:px-2.5 py-1.5 rounded-lg bg-white hover:bg-gray-50 active:scale-95 active:bg-gray-100 transition-all duration-150 text-sm"
                  onClick={toggleLanguageMenu}
                >
                  <img
                    alt={currentLanguage.name}
                    src={currentLanguage.flag}
                    className="w-5 h-3.5 rounded shadow-sm object-cover"
                  />
                  <span className="hidden sm:inline text-sm">
                    {currentLanguage.name}
                  </span>
                  <i className="fas fa-chevron-down text-xs"></i>
                </button>
                <div
                  className={`absolute right-0 mt-2 w-52 bg-white border border-gray-200 rounded-xl shadow-lg z-50 ${
                    isLanguageMenuOpen ? "" : "hidden"
                  }`}
                >
                  {languages.map((lang) => (
                    <div
                      key={lang.code}
                      className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-gray-50"
                      onClick={() =>
                        selectLanguage(lang.code, lang.name, lang.flag)
                      }
                    >
                      <img
                        alt={lang.name}
                        src={lang.flag}
                        className="w-6 rounded"
                      />
                      <span>{lang.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Center - Logo */}
            <div className="flex-1 flex justify-center">
              <Link to="/" className="inline-block">
                <img
                  alt="BONDMAXX Painting"
                  src={logo}
                  className="h-10 sm:h-14 cursor-pointer hover:opacity-90 transition-opacity"
                />
              </Link>
            </div>

            {/* Right - Menu */}
            <div className="flex items-center flex-1 justify-end">
              <button
                title="button"
                type="button"
                className="p-2 text-gray-600 bg-white hover:text-blue-600 hover:bg-gray-50 active:scale-95 active:bg-gray-100 rounded-lg transition-all duration-150"
                onClick={toggleSidebar}
              >
                <i className="fas fa-bars text-lg"></i>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Language Overlay - Moved outside header */}
      <div
        className={`fixed inset-0 z-30 bg-black/50 ${
          isLanguageMenuOpen ? "" : "hidden"
        }`}
        onClick={toggleLanguageMenu}
      ></div>

      {/* Sidebar Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 ${
          isSidebarOpen ? "" : "hidden"
        }`}
        onClick={closeSidebar}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-gradient-to-br from-white to-gray-100 z-50 shadow-xl transform transition-transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-6 bg-white border-b border-gray-200">
          <img alt="BONDMAXX" src={logo} className="h-14" />
          <button
            title="button"
            type="button"
            className="p-2 rounded-md bg-gray-100 hover:bg-gray-200 transition text-gray-700"
            onClick={closeSidebar}
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="flex flex-col py-8">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              onClick={closeSidebar}
              className={`px-7 py-4 cursor-pointer hover:bg-blue-50 hover:text-blue-600 transition ${
                item.icon ? "flex items-center gap-2" : ""
              }`}
            >
              {item.icon && <i className={item.icon}></i>}
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Favorites Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-96 bg-gradient-to-br from-white to-red-50 z-50 shadow-xl overflow-y-auto transform transition-transform duration-300 ${
          isFavoritesOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-6 border-b-2 border-red-200">
          <div className="flex items-center gap-3 text-xl font-semibold">
            <i className="fas fa-heart"></i>
            <span>الألوان المفضلة</span>
          </div>
          <button
            title="button"
            type="button"
            className="absolute top-6 left-6 p-2 rounded-md bg-white/20 hover:bg-white/30 transition text-white"
            onClick={closeFavorites}
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="py-8">
          <div>
            {favorites.length === 0 ? (
              <div
                style={{
                  textAlign: "center",
                  color: "#6b7280",
                  padding: "48px 28px",
                }}
              >
                <i
                  className="fas fa-heart"
                  style={{
                    fontSize: "3rem",
                    color: "#fca5a5",
                    marginBottom: "16px",
                  }}
                ></i>
                <h3 style={{ color: "#374151", marginBottom: "8px" }}>
                  لا توجد ألوان مفضلة
                </h3>
                <p>ابدأ بإضافة الألوان التي تعجبك إلى قائمة المفضلة</p>
              </div>
            ) : (
              <div className="space-y-2">
                {favorites.map((item, idx) => (
                  <CartItem
                    key={idx}
                    item={item}
                    index={idx}
                    onRemove={removeFromFav}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Favorites Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 ${
          isFavoritesOpen ? "" : "hidden"
        }`}
        onClick={closeFavorites}
      ></div>

      {/* Cart Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-96 bg-gradient-to-br from-white to-emerald-50 z-50 shadow-xl overflow-y-auto transform transition-transform duration-300 ${
          isCartOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white p-6 border-b-2 border-emerald-200">
          <div className="flex items-center gap-3 text-xl font-semibold">
            <i className="fas fa-shopping-cart"></i>
            <span>سلة المشتريات</span>
          </div>
          <button
            title="button"
            type="button"
            className="absolute top-6 left-6 p-2 rounded-md bg-white/20 hover:bg-white/30 transition text-white"
            onClick={closeCart}
          >
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className="py-6">
          <div className="space-y-3 px-4">
            {cartItems.length === 0 ? (
              <div
                style={{
                  textAlign: "center",
                  color: "#6b7280",
                  padding: "28px 16px",
                }}
              >
                <i
                  className="fas fa-shopping-basket"
                  style={{
                    fontSize: "2.25rem",
                    color: "#86efac",
                    marginBottom: "10px",
                  }}
                ></i>
                <h3 style={{ color: "#374151", marginBottom: "6px" }}>
                  السلة فارغة
                </h3>
                <p>أضف المنتجات إلى السلة للمتابعة</p>
              </div>
            ) : (
              <div className="space-y-2">
                {cartItems.map((item, idx) => (
                  <CartItem
                    key={idx}
                    item={item}
                    index={idx}
                    onRemove={removeFromCart}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="border-t mt-4 p-4 bg-white">
            <div className="flex items-center justify-between text-gray-800 mb-3">
              <span>الإجمالي:</span>
              <span className="font-semibold">{cartTotal}</span>
            </div>
            <button
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg transition font-medium"
              type="button"
              onClick={submitCartToWhatsApp}
            >
              إتمام الشراء
            </button>
          </div>
        </div>
      </div>

      {/* Cart Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 ${
          isCartOpen ? "" : "hidden"
        }`}
        onClick={closeCart}
      ></div>
    </>
  );
}
