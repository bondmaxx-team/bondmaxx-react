import { useNavigate } from "react-router-dom";
import { useShop } from "../context/ShopContext";
import { useTranslation } from "react-i18next";

const ProductCard = ({ product, onClick, productType = "interior" }) => {
  const { t, i18n } = useTranslation();
  const { toggleFavorite, isFavorite, addToCart } = useShop();
  const navigate = useNavigate();
  const lang = i18n.language;
  const favorite = isFavorite(product.id);

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(product);
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
  const productName = product.name || "";

  // Get translated description
  const productDescription = product.description || "";

  return (
    <div
      onClick={handleCardClick}
      className="block bg-gray-100 rounded-lg shadow-md overflow-hidden relative group hover:shadow-lg transition-shadow cursor-pointer"
    >
      <div className="absolute top-3 left-3 z-10 flex gap-2">
        <button
          onClick={handleFavoriteClick}
          className="p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-all duration-200"
          aria-label={t("add_to_favorites_aria") || "Add to favorites"}
        >
          <i
            className={`fa-heart transition-colors ${
              favorite
                ? "fas text-red-500"
                : "far text-gray-400 hover:text-red-500"
            }`}
          ></i>
        </button>
        <button
          onClick={handleCartClick}
          className="p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-all duration-200"
          aria-label={t("add_to_cart") || "Add to cart"}
          title={t("add_to_cart") || "Add to cart"}
        >
          <i className="fas fa-shopping-cart text-gray-500 hover:text-emerald-600 transition-colors"></i>
        </button>
      </div>

      {product.image && (
        <div className="w-full h-48 bg-white p-4">
          <img
            src={product.image}
            alt={productName}
            className="w-full h-full object-contain"
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
