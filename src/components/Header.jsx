import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useShop } from "../context/ShopContext";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "ar", name: "العربية", flag: "https://flagcdn.com/w20/sa.png" },
  { code: "tr", name: "Türkçe", flag: "https://flagcdn.com/w20/tr.png" },
  { code: "en", name: "English", flag: "https://flagcdn.com/w20/us.png" },
  { code: "de", name: "Deutsch", flag: "https://flagcdn.com/w20/de.png" },
];

function CartItem({ item, index, onRemove, setQty }) {
  const { t } = useTranslation();
  const fallbackImage = "https://via.placeholder.com/48x48.png?text=No+Image";

  const handleIncrease = () => {
    setQty(item.id, item.qty + 1);
  };

  const handleDecrease = () => {
    if (item.qty > 1) {
      setQty(item.id, item.qty - 1);
    }
  };

  return (
    <div className="flex items-center justify-between gap-3 p-2 border rounded bg-white">
      <div className="flex items-center gap-3">
        <img
          alt={item.name || t("product")}
          src={item.image ? item.image : fallbackImage}
          onError={(e) => {
            e.target.src = fallbackImage;
          }}
          className="w-12 h-12 object-cover rounded-md border"
        />

        <div>
          <div className="font-medium">{item.name || t("product")}</div>

          {item.price && (
            <div className="text-sm text-gray-500">{item.price} ₺</div>
          )}

          <div className="flex items-center gap-2 mt-1">
            <button
              onClick={handleDecrease}
              disabled={item.qty === 1}
              className={`w-6 h-6 flex items-center justify-center rounded-full text-xs transition 
                ${
                  item.qty === 1
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-gray-200 hover:bg-gray-300 text-gray-700"
                }`}
              title={t("decrease_qty")}
            >
              <i className="fas fa-minus"></i>
            </button>

            <span className="text-sm text-gray-800 font-medium">
              {item.qty}
            </span>

            <button
              onClick={handleIncrease}
              className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 text-xs"
              title={t("increase_qty")}
            >
              <i className="fas fa-plus"></i>
            </button>
          </div>
        </div>
      </div>

      <button
        title={t("remove_item")}
        type="button"
        className="text-red-600 hover:text-red-700"
        onClick={() => onRemove(item.id)}
      >
        <i className="fas fa-trash-alt"></i>
      </button>
    </div>
  );
}

function FavItem({ item, index, onRemove }) {
  const { t } = useTranslation();
  const fallbackImage = "https://via.placeholder.com/48x48.png?text=No+Image";

  return (
    <div className="flex items-center justify-between gap-3 p-2 border rounded bg-white">
      <div className="flex items-center gap-3">
        <img
          alt={item.name || t("product")}
          src={item.image ? item.image : fallbackImage}
          onError={(e) => {
            e.target.src = fallbackImage;
          }}
          className="w-12 h-12 object-cover rounded-md border"
        />
        <div>
          <div className="font-medium">{item.name || t("product")}</div>
          {item.price && (
            <div className="text-sm text-gray-500">{item.price} ₺</div>
          )}
        </div>
      </div>
      <button
        title={t("remove_item")}
        type="button"
        className="text-red-600 hover:text-red-700"
        onClick={() => onRemove(item)}
      >
        <i className="fas fa-trash-alt"></i>
      </button>
    </div>
  );
}

export default function Header() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState({
    code: "ar",
    name: "العربية",
    flag: "https://flagcdn.com/w20/sa.png",
  });
  const {
    cart,
    setQty,
    removeFromCart,
    clearCart,
    cartCount,
    cartTotal,
    favorites,
    toggleFavorite,
    addToCart,
    inCart,
    isFavorite,
  } = useShop();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
    setIsLanguageMenuOpen(false);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
    setIsLanguageMenuOpen(false);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const toggleFavorites = () => {
    setIsFavoritesOpen(!isFavoritesOpen);
    setIsLanguageMenuOpen(false);
  };

  const closeFavorites = () => {
    setIsFavoritesOpen(false);
    setIsLanguageMenuOpen(false);
  };

  const toggleLanguageMenu = () => {
    setIsLanguageMenuOpen(!isLanguageMenuOpen);
  };

  const selectLanguage = (code, name, flag) => {
    setCurrentLanguage({ code, name, flag });
    changeLanguage(code);
    setIsLanguageMenuOpen(false);
  };

  const submitCartToWhatsApp = () => {
    console.log("Submit cart to WhatsApp");
  };

  const menuItems = [
    { href: "/", label: t("home"), icon: "fas fa-home" },
    {
      href: "/interior-colors",
      label: t("interior_paints"),
      icon: "fas fa-home",
    },
    {
      href: "/exterior-colors",
      label: t("exterior_paints"),
      icon: "fas fa-building",
    },
    { href: "/insulation", label: t("insulation"), icon: "fas fa-shield-alt" },
    {
      href: "/color-collection",
      label: t("color_collection"),
      icon: "fas fa-palette",
    },
    {
      href: "/painting-services",
      label: t("painting_services"),
      icon: "fas fa-paint-roller",
    },
    {
      href: "/search-dealer",
      label: t("search_dealer"),
      icon: "fas fa-search",
    },
    { href: "/about", label: t("about"), icon: "fas fa-info-circle" },
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
                className="relative flex items-center gap-1.5 sm:px-2.5 py-1.5 rounded-lg bg-white hover:bg-blue-50 hover:text-blue-600 active:scale-95 active:bg-blue-100 transition-all duration-150 text-sm"
                onClick={toggleCart}
              >
                <i className="fas fa-shopping-cart text-base"></i>
                <span className="hidden sm:inline">{t("cart_title")}</span>

                {/* badge */}
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 text-xs min-w-[18px] h-[18px] flex items-center justify-center rounded-full bg-blue-500 text-white font-medium">
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
                <span className="hidden sm:inline">{t("favorite_title")}</span>
              </button>

              {/* Language */}
              <div className="relative">
                <button
                  title="button"
                  type="button"
                  className="flex items-center gap-1.5 sm:px-2.5 py-1.5 rounded-lg bg-white hover:bg-gray-50 active:scale-95 active:bg-gray-100 transition-all duration-150 text-sm"
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
            <div className="flex-1 flex justify-center ml-10 sm:ml-0">
              <Link to="/" className="inline-block">
                <img
                  alt="BONDMAXX Painting"
                  src={logo}
                  className="h-14 sm:h-22 cursor-pointer hover:opacity-90 transition-opacity"
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

      {/* Language Overlay */}
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
        className={`fixed top-0 ${
          isRTL ? "right-0" : "left-0"
        } h-full w-80 bg-gradient-to-br from-white to-gray-100 z-50 shadow-xl transform transition-transform ${
          isSidebarOpen
            ? "translate-x-0"
            : isRTL
            ? "translate-x-full"
            : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-6 bg-white border-b border-gray-200">
          <img alt="BONDMAXX" src={logo} className="h-14 sm:h-20" />
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
      {/* Favorites Sidebar (dir-aware) */}
      <div
        className={`fixed top-0 ${
          isRTL ? "right-0" : "left-0"
        } h-full w-70 sm:w-96 bg-gradient-to-br from-white to-blue-50 z-50 shadow-xl overflow-y-auto transform transition-transform duration-300 ${
          isFavoritesOpen
            ? "translate-x-0"
            : isRTL
            ? "translate-x-full" // hide off-screen to the right (RTL)
            : "-translate-x-full" // hide off-screen to the left (LTR)
        }`}
      >
        <div className="relative bg-gradient-to-r from-red-500 to-red-600 text-white p-6 border-b-2 border-red-200">
          <div className="flex items-center justify-center gap-3 text-xl font-semibold">
            <span>{t("favorites_title")}</span>
          </div>

          {/* Close button aligns to the edge based on dir */}
          <button
            title="button"
            type="button"
            className={`absolute top-6 ${
              isRTL ? "right-6" : "left-6"
            } p-2 rounded-md bg-white/20 hover:bg-white/30 transition text-white`}
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
                  {t("favorites_empty_title")}
                </h3>
                <p>{t("favorites_empty_message")}</p>
              </div>
            ) : (
              <div className="space-y-3 px-4">
                {favorites.map((item, idx) => (
                  <FavItem
                    key={idx}
                    item={item}
                    index={idx}
                    onRemove={toggleFavorite}
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
        className={`fixed top-0 ${
          isRTL ? "right-0" : "left-0"
        } h-full w-70 sm:w-96 bg-gradient-to-br from-white to-blue-50 z-50 shadow-xl overflow-y-auto transform transition-transform duration-300 ${
          isCartOpen
            ? "translate-x-0"
            : isRTL
            ? "translate-x-full" // hidden off-screen to the right (RTL)
            : "-translate-x-full" // hidden off-screen to the left (LTR)
        }`}
      >
        <div className="relative bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 border-b-2 border-blue-200">
          <div className="flex items-center justify-center gap-3 text-xl font-semibold">
            <span>{t("cart_page_title")}</span>
          </div>

          {/* Close button aligns to edge based on dir */}
          <button
            title="button"
            type="button"
            className={`absolute top-6 ${
              isRTL ? "right-6" : "left-6"
            } p-2 rounded-md bg-white/20 hover:bg-white/30 transition text-white`}
            onClick={closeCart}
          >
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className="py-6">
          <div className="space-y-3 px-4">
            {cart.length === 0 ? (
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
                    color: "#60a5fa",
                    marginBottom: "10px",
                  }}
                ></i>
                <h3 style={{ color: "#374151", marginBottom: "6px" }}>
                  {t("cart_empty_title")}
                </h3>
                <p>{t("cart_empty_message")}</p>
              </div>
            ) : (
              <div className="space-y-2">
                {cart.map((item, idx) => (
                  <CartItem
                    key={idx}
                    item={item}
                    index={idx}
                    onRemove={removeFromCart}
                    setQty={setQty}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="border-t mt-4 p-4 bg-white">
            <div className="flex items-center justify-between text-gray-800 mb-3">
              <span>{t("total")}</span>
              <span className="font-semibold">{cartTotal}</span>
            </div>
            <button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition font-medium"
              type="button"
              onClick={submitCartToWhatsApp}
            >
              {t("checkout_button")}
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
