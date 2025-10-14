import { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useShop } from "../context/ShopContext";
import { useTranslation } from "react-i18next";
import useWhatsApp from "@/hooks/useWhatsApp";
import useLanguageSelect from "@/hooks/useLanguageSelect";
import { toast } from "sonner";
import NavigationBreadcrumb from "./NavigationBreadcrumb";

export default function Header() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
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

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => {
    setIsSidebarOpen(false);
    setIsProductsOpen(false);
    closeLanguageMenu();
  };

  const toggleProducts = () => setIsProductsOpen(!isProductsOpen);

  const toggleCart = () => {
    if (!isCartOpen && (!cart || cart.length === 0)) {
      toast.info(t("cart_empty_message"));
      return;
    }
    setIsCartOpen(!isCartOpen);
    closeLanguageMenu();
  };

  const closeCart = () => setIsCartOpen(false);

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

  const productItems = [
    { href: "/OilPaintsPage", label: t("oil_paints"), icon: "fas fa-oil-can" },
    { href: "/WaterPaintsPage", label: t("water_paints"), icon: "fas fa-tint" },
    {
      href: "/PrimerPaintsPage",
      label: t("primer_paints"),
      icon: "fas fa-layer-group",
    },
    {
      href: "/InsulationPage",
      label: t("insulation"),
      icon: "fas fa-shield-alt",
    },
    { href: "/EpoxyPage", label: t("epoxy"), icon: "fas fa-fill-drip" },
    { href: "/PuttyPage", label: t("putty"), icon: "fas fa-tools" },
  ];

  const menuItems = [
    { href: "/", label: t("home"), icon: "fas fa-home" },
    {
      href: "/AccessoriesPage",
      label: t("accessories"),
      icon: "fas fa-toolbox",
    },
    {
      href: "/color-collection",
      label: t("color_collection"),
      icon: "fas fa-palette",
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
            {/* Left */}
            <div className="flex items-center gap-3 flex-1">
              {/* Cart */}
              <button
                type="button"
                className="relative flex items-center gap-1.5 sm:px-2.5 py-1.5 rounded-lg bg-white text-[#203F84] hover:bg-[#203F84]/10 active:scale-95 hover:scale-105 transition-all duration-150 text-sm"
                onClick={toggleCart}
              >
                <i className="fas fa-shopping-cart text-base"></i>
                <span className="hidden sm:inline">{t("cart_title")}</span>
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 text-xs min-w-[18px] h-[18px] flex items-center justify-center rounded-full text-white font-medium bg-[#203F84]">
                    {cart.length}
                  </span>
                )}
              </button>

              {/* Language */}
              <div className="relative">
                <button
                  type="button"
                  className="flex items-center gap-1.5 sm:px-2.5 py-1.5 rounded-lg bg-white text-[#203F84] hover:bg-[#203F84]/10 active:scale-95 hover:scale-105 transition-all duration-150 text-sm"
                  onClick={toggleLanguageMenu}
                >
                  <img
                    alt={currentLanguage.name}
                    src={currentLanguage.flag}
                    className="w-5 h-3.5 rounded shadow-sm object-cover"
                  />
                  <span className="hidden sm:inline">
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
                      className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-[#203F84]/10 text-[#203F84] transition-all duration-150"
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

            {/* Logo */}
            <div className="flex-1 flex justify-center ml-10 sm:ml-0">
              <Link to="/" className="inline-block">
                <img
                  alt="BONDMAXX Painting"
                  src={logo}
                  className="h-14 sm:h-22 cursor-pointer hover:opacity-90 hover:scale-105 transition-all duration-150"
                />
              </Link>
            </div>

            {/* Right */}
            <div className="flex items-center flex-1 justify-end">
              <button
                type="button"
                className="p-2 text-[#203F84] bg-white hover:bg-[#203F84]/10 active:scale-95 hover:scale-105 rounded-lg transition-all duration-150"
                onClick={toggleSidebar}
              >
                <i className="fas fa-bars text-lg"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Breadcrumb - مباشرة تحت الـ Header */}
        <NavigationBreadcrumb currentLang={i18n.language} />
      </header>

      {/* Sidebar */}
      <div
        className={`fixed top-0 ${
          isRTL ? "right-0" : "left-0"
        } h-full w-80 bg-white z-50 shadow-xl transform transition-transform duration-300 ${
          isSidebarOpen
            ? "translate-x-0"
            : isRTL
            ? "translate-x-full"
            : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-6 border-b border-gray-200 shadow-sm">
          <img alt="BONDMAXX" src={logo} className="h-14 sm:h-20" />
          <button
            type="button"
            className="p-2 rounded-md bg-[#203F84] hover:bg-[#1a3270] text-white active:scale-95 hover:scale-105 transition"
            onClick={closeSidebar}
          >
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className="flex flex-col py-8 overflow-y-auto h-[calc(100vh-120px)] text-[#203F84]">
          {/* Home */}
          <Link
            to="/"
            onClick={closeSidebar}
            className="px-7 py-4 flex items-center gap-3 hover:bg-[#203F84] hover:text-white transition-all duration-200 active:scale-95 hover:scale-105"
          >
            <i className="fas fa-home"></i>
            <span>{t("home")}</span>
          </Link>

          {/* Products Dropdown */}
          <div>
            <button
              onClick={toggleProducts}
              className="w-full px-7 py-4 flex items-center justify-between text-[#203F84] hover:bg-[#203F84] hover:text-white transition-all duration-200 active:scale-95 hover:scale-105"
            >
              <div className="flex items-center gap-3">
                <i className="fas fa-box-open"></i>
                <span>{t("products")}</span>
              </div>
              <i
                className={`fas fa-chevron-${
                  isProductsOpen ? "up" : "down"
                } text-sm transition-all duration-300 ${
                  isProductsOpen ? "rotate-180" : ""
                }`}
              ></i>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 bg-[#203F84]/5 ${
                isProductsOpen ? "max-h-96" : "max-h-0"
              }`}
            >
              {productItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.href}
                  onClick={closeSidebar}
                  className="px-12 py-3 flex items-center gap-3 text-sm text-[#203F84] hover:bg-[#203F84] hover:text-white transition-all duration-200 active:scale-95 hover:scale-105"
                >
                  <i className={item.icon}></i>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {menuItems.slice(1).map((item, index) => (
            <Link
              key={index}
              to={item.href}
              onClick={closeSidebar}
              className="px-7 py-4 flex items-center gap-3 text-[#203F84] hover:bg-[#203F84] hover:text-white transition-all duration-200 active:scale-95 hover:scale-105"
            >
              <i className={item.icon}></i>
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* 🛒 Cart Sidebar */}
      <div
        className={`fixed top-0 ${
          isRTL ? "right-0" : "left-0"
        } h-full w-70 sm:w-96 bg-white z-50 shadow-xl overflow-y-auto transform transition-transform duration-300 ${
          isCartOpen
            ? "translate-x-0"
            : isRTL
            ? "translate-x-full"
            : "-translate-x-full"
        }`}
      >
        <div className="relative text-white p-6 bg-[#203F84] border-b-2">
          <div className="flex items-center justify-center gap-3 text-xl font-semibold">
            <span>{t("cart_page_title")}</span>
          </div>
          <button
            type="button"
            className={`absolute top-6 ${
              isRTL ? "right-6" : "left-6"
            } p-2 rounded-md bg-[#203F84] hover:bg-[#1a3270] text-white active:scale-95 hover:scale-105 transition`}
            onClick={closeCart}
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
      </div>
    </>
  );
}
