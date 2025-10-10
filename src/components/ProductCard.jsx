import { useNavigate } from "react-router-dom";
import { useShop } from "../context/ShopContext";
import { useTranslation } from "react-i18next";

const ProductCard = ({ product, onClick, productType = "interior" }) => {
  const { t, i18n } = useTranslation();
  const { toggleFavorite, isFavorite, addToCart } = useShop();
  const navigate = useNavigate();
  const lang = i18n.language;
  const favorite = isFavorite(product.id, productType);

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite({
      ...product,
      productType,
    });
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  const handleCardClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (onClick) {
      // إذا كان هناك onClick مخصص، استخدمه
      onClick(product);
    } else {
      // وإلا، انتقل لصفحة التفاصيل مع type parameter
      navigate(`/product-details?id=${product.id}&type=${productType}`);
    }
  };

  // Get translated name
  const productName = product.name[lang] || "";

  // Get translated description
  const productDescription = product.description[lang] || "";

  return (
    <div
      onClick={handleCardClick}
      className="block bg-gray-100 rounded-lg shadow-md overflow-hidden relative group transition-all duration-300 cursor-pointer"
      style={{
        boxShadow:
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow =
          "0 10px 15px -3px rgba(32, 63, 132, 0.2), 0 4px 6px -2px rgba(32, 63, 132, 0.1)";
        e.currentTarget.style.transform = "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow =
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <div className="absolute top-3 left-3 z-10 flex gap-2">
        <button
          onClick={handleFavoriteClick}
          className="p-2 bg-white rounded-full shadow-sm transition-all duration-200"
          style={{
            boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow =
              "0 4px 6px -1px rgba(32, 63, 132, 0.3)";
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "0 1px 3px 0 rgba(0, 0, 0, 0.1)";
            e.currentTarget.style.transform = "scale(1)";
          }}
          aria-label={t("add_to_favorites_aria") || "Add to favorites"}
        >
          <i
            className={`fa-heart transition-colors ${
              favorite ? "fas text-red-500" : "far text-gray-400"
            }`}
            style={!favorite ? { color: "#203F84" } : {}}
            onMouseEnter={(e) => {
              if (!favorite) {
                e.target.style.color = "#1a3366";
              }
            }}
            onMouseLeave={(e) => {
              if (!favorite) {
                e.target.style.color = "#203F84";
              }
            }}
          ></i>
        </button>
        <button
          onClick={handleCartClick}
          className="p-2 bg-white rounded-full shadow-sm transition-all duration-200"
          style={{
            boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow =
              "0 4px 6px -1px rgba(32, 63, 132, 0.3)";
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "0 1px 3px 0 rgba(0, 0, 0, 0.1)";
            e.currentTarget.style.transform = "scale(1)";
          }}
          aria-label={t("add_to_cart") || "Add to cart"}
          title={t("add_to_cart") || "Add to cart"}
        >
          <i
            className="fas fa-shopping-cart text-gray-500 transition-colors"
            style={{ color: "#203F84" }}
            onMouseEnter={(e) => {
              e.target.style.color = "#1a3366";
            }}
            onMouseLeave={(e) => {
              e.target.style.color = "#203F84";
            }}
          ></i>
        </button>
      </div>

      {product.image && (
        <div className="w-full h-48 bg-white p-4">
          <img
            src={product.image}
            alt={productName}
            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}

      <div className="p-4 bg-white">
        <h3 className="font-semibold text-gray-900 text-base mb-2">
          {productName}
        </h3>
        {productDescription && (
          <p className="text-sm text-gray-600 line-clamp-2">
            {productDescription}
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
