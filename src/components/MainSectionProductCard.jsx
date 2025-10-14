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

// مكون زر اكتشف الألوان
export const DiscoverColorsButton = ({ onClick }) => {
  const { t } = useTranslation();

  return (
    <div className="flex justify-center pt-8">
      <button
        onClick={onClick}
        className="group relative inline-flex items-center gap-3 px-10 py-4 font-bold text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #203F84 0%, #1a3366 100%)",
          color: "white",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background =
            "linear-gradient(135deg, #1a3366 0%, #142952 100%)";
          e.currentTarget.style.transform = "scale(1.05)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background =
            "linear-gradient(135deg, #203F84 0%, #1a3366 100%)";
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        {/* Shine Effect */}
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></span>

        {/* Content */}
        <i className="fas fa-palette text-xl relative z-10 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300"></i>
        <span className="relative z-10 font-extrabold">
          {t("discover_all_colors") || "اكتشف جميع الألوان"}
        </span>
        <i className="fas fa-arrow-left text-lg relative z-10 transform group-hover:translate-x-2 transition-transform duration-300"></i>
      </button>
    </div>
  );
};

export default ProductCard;
