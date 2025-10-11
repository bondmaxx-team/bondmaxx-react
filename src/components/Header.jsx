import { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useShop } from "../context/ShopContext";
import { useTranslation } from "react-i18next";
import useWhatsApp from "@/hooks/useWhatsApp";
import useLanguageSelect from "@/hooks/useLanguageSelect";
import { toast } from "sonner";

export default function Header() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const {
    languages,
    currentLanguage,
    isOpen: isLanguageMenuOpen,
    toggle: toggleLanguageMenu,
    close: closeLanguageMenu,
    selectLanguage,
  } = useLanguageSelect();
  const { sendMessage } = useWhatsApp();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const {
    cart,
    clearCart,
    cartCount,
    incrementQty,
    decrementQty,
    removeFromCart,
  } = useShop();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
    closeLanguageMenu();
  };

  const toggleCart = () => {
    // If opening the cart and it's empty, notify the user instead
    if (!isCartOpen && (!cart || cart.length === 0)) {
      toast.info(t("cart_empty_message"));
      return;
    }
    setIsCartOpen(!isCartOpen);
    closeLanguageMenu();
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const submitCartToWhatsApp = () => {
    if (!cart?.length) {
      toast.warning(t("cart_empty_message"));
      return;
    }

    const lines = [];
    lines.push("*مرحباً، أود الاستفسار عن المنتجات التالية:*");
    lines.push("");

    for (const item of cart) {
      lines.push(
        `• *${item.name[i18n.language]}* (ID: ${item.id})` +
          `\n  الكمية: ${item.qty ?? 1}` +
          (item.color ? `\n  اللون: ${item.color}` : "")
      );
      lines.push("");
    }

    lines.push("━━━━━━━━━━━━━━━━━━");
    lines.push(`أُرسلت من موقعكم: ${window.location.origin}`);

    const message = lines.join("\n");
    const ok = sendMessage(message);
    if (ok) {
      closeCart();
      clearCart();
    }
  };

  const menuItems = [
    { href: "/", label: t("home"), icon: "fas fa-home" },
    {
      href: "/interior-colors",
      label: t("interior_paints"),
      icon: "fas fa-door-open",
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
                className="relative flex items-center gap-1.5 sm:px-2.5 py-1.5 rounded-lg bg-white hover:bg-[var(--header-light-bg)] active:scale-95 transition-all duration-150 text-sm text-[var(--header-primary)]"
                onClick={toggleCart}
              >
                <i className="fas fa-shopping-cart text-base"></i>
                <span className="hidden sm:inline">{t("cart_title")}</span>

                {/* badge */}
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 text-xs min-w-[18px] h-[18px] flex items-center justify-center rounded-full text-white font-medium bg-[var(--header-primary)]">
                    {cart.length}
                  </span>
                )}
              </button>

              {/* Language */}
              <div className="relative">
                <button
                  title="button"
                  type="button"
                  className="flex items-center gap-1.5 sm:px-2.5 py-1.5 rounded-lg bg-white hover:bg-[var(--header-light-bg)] active:scale-95 transition-all duration-150 text-sm text-[var(--header-primary)]"
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
                  className={`absolute ${
                    isRTL ? "right-0" : "left-0"
                  } mt-2 w-52 bg-white border border-gray-200 rounded-xl shadow-lg z-50 ${
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
                className="p-2 text-[var(--header-primary)] bg-white hover:bg-[var(--header-light-bg)] active:scale-95 active:bg-gray-100 rounded-lg transition-all duration-150"
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
              className={`px-7 py-4 cursor-pointer transition text-gray-800 hover:bg-[var(--header-primary)] hover:text-white ${
                item.icon ? "flex items-center gap-2" : ""
              }`}
            >
              {item.icon && <i className={item.icon}></i>}
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Cart Sidebar */}
      <div
        className={`fixed top-0 ${
          isRTL ? "right-0" : "left-0"
        } h-full w-70 sm:w-96 bg-gradient-to-br from-white to-blue-50 z-50 shadow-xl overflow-y-auto transform transition-transform duration-300 ${
          isCartOpen
            ? "translate-x-0"
            : isRTL
            ? "translate-x-full"
            : "-translate-x-full"
        }`}
      >
        <div className="relative text-white p-6 border-b-2 cart-header-gradient">
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
              <div className="text-center text-gray-500 py-7 px-4">
                <i className="fas fa-shopping-basket text-4xl text-[var(--header-primary)] mb-2.5"></i>
                <h3 className="text-gray-700 mb-1.5">
                  {t("cart_empty_title")}
                </h3>
                <p>{t("cart_empty_message")}</p>
              </div>
            ) : (
              <div className="space-y-2">
                {cart.map((item, idx) => {
                  const productName =
                    typeof item.name === "object"
                      ? item.name?.[i18n.language] ||
                        item.name?.ar ||
                        item.name?.en ||
                        item.name?.tr ||
                        item.name?.de ||
                        ""
                      : item.name || "";

                  return (
                    <div
                      key={idx}
                      className="bg-white rounded-lg p-3 shadow-sm border border-gray-200 flex gap-3"
                      dir={isRTL ? "rtl" : "ltr"}
                    >
                      {/* Product Image */}
                      {item.image && (
                        <img
                          src={item.image}
                          alt={productName}
                          className="w-20 h-20 object-cover rounded-md bg-gray-50"
                        />
                      )}

                      {/* Product Info */}
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <h4 className="font-semibold text-gray-800 text-sm mb-1 line-clamp-2">
                            {productName}
                          </h4>
                          {item.color && (
                            <p className="text-xs text-gray-500">
                              {isRTL ? "اللون" : "Color"}: {item.color}
                            </p>
                          )}
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
                            <button
                              onClick={() => decrementQty(item.id)}
                              className="w-8 h-8 flex items-center justify-center rounded-md bg-white hover:bg-gray-200 transition text-gray-700 font-bold"
                              type="button"
                            >
                              <i className="fas fa-minus text-xs"></i>
                            </button>

                            <span className="min-w-[2rem] text-center font-semibold text-gray-800">
                              {item.qty || 1}
                            </span>

                            <button
                              onClick={() => incrementQty(item.id)}
                              className="w-8 h-8 flex items-center justify-center rounded-md bg-white hover:bg-gray-200 transition text-gray-700 font-bold"
                              type="button"
                            >
                              <i className="fas fa-plus text-xs"></i>
                            </button>
                          </div>

                          {/* Delete Button */}
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="p-2 text-red-500 hover:bg-red-50 rounded-md transition"
                            type="button"
                            title={isRTL ? "حذف" : "Delete"}
                          >
                            <i className="fas fa-trash text-sm"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <div className="border-t mt-4 p-4 bg-white">
            <div className="flex items-center justify-between text-gray-800 mb-3">
              <span>{t("total")}</span>
              <span className="font-semibold">{cartCount}</span>
            </div>
            <button
              className="w-full text-white py-3 rounded-lg transition font-medium bg-[var(--header-primary)] hover:bg-[var(--header-primary-hover)] hover:scale-[1.02]"
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
