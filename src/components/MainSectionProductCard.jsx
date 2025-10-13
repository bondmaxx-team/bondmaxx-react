import { Link } from "react-router-dom";
import { useShop } from "../context/ShopContext";
import { useTranslation } from "react-i18next";

const ProductCard = ({ product, productType }) => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === "rtl";

  const { addToCart, inCart } = useShop();
  const isInCart = inCart(product.id);

  const handleCartClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  const translatedName =
    product.name[i18n.language] || product.name["en"] || product.nameKey;

  return (
    <Link
      to={`/product-details?id=${product.id}&type=${productType}`}
      className="block w-full bg-gray-100 rounded-lg shadow-md p-6 text-center relative group hover:shadow-lg transition-shadow"
    >
      <div
        className={`absolute top-3 ${
          isRTL ? "left-2" : "right-2"
        } z-10 flex gap-2`}
      >
        <button
          onClick={handleCartClick}
          className="p-1 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
          aria-label={isInCart ? t("remove_from_cart") : t("add_to_cart")}
          title={isInCart ? t("remove_from_cart") : t("add_to_cart")}
          style={{
            color: isInCart ? "#203F84" : "#6B7280",
          }}
          onMouseEnter={(e) =>
            !isInCart && (e.currentTarget.style.color = "#203F84")
          }
          onMouseLeave={(e) =>
            !isInCart && (e.currentTarget.style.color = "#6B7280")
          }
        >
          <i className="fas fa-shopping-cart transition-colors"></i>
        </button>
      </div>

      {product.image ? (
        <img
          src={product.image}
          alt={translatedName}
          className="w-full h-28 object-contain rounded mb-3"
        />
      ) : (
        <div
          className="w-full h-32 rounded mb-3"
          style={{ backgroundColor: product.color }}
        ></div>
      )}

      <h3
        className="font-semibold w-full text-gray-800 text-base truncate"
        title={translatedName}
      >
        {translatedName}
      </h3>
    </Link>
  );
};

// Component الزر منفصل
export const DiscoverColorsButton = ({ onClick }) => {
  const { t } = useTranslation();

  return (
    <div className="flex justify-center pt-8">
      <button
        onClick={onClick}
        className="group relative flex items-center gap-3 px-12 py-5 font-bold text-lg rounded-full border-2 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden backdrop-blur-md"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          borderColor: "#203F84",
          color: "#203F84",
        }}
      >
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out shimmer"></span>

        <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <span className="bubble bubble-1"></span>
          <span className="bubble bubble-2"></span>
          <span className="bubble bubble-3"></span>
          <span className="bubble bubble-4"></span>
        </span>

        <span className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-150 transition-all duration-700 ease-out"></span>

        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/30 via-cyan-300/30 to-blue-400/30 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 animate-pulse-slow"></span>

        <i className="fas fa-palette before:text-shadow-[0_0_4px_white] text-lg relative z-10 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300" />
        <span className="relative z-10 font-extrabold text-shadow-[0_0_2px_white]">
          {t("cta_button")}
        </span>
      </button>
    </div>
  );
};

export default ProductCard;
