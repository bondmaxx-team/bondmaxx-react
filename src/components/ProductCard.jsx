import { useState } from "react";
import { Link } from "react-router-dom";
import { useShop } from "../context/ShopContext";
import { useTranslation } from "react-i18next";

const ProductCard = ({ product }) => {
  const { t } = useTranslation();
  const { toggleFavorite, isFavorite, addToCart } = useShop();

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

  // ✅ ترجم باستخدام nameKey أو name (أيهما موجود)
  const nameToTranslate =
    product.nameKey || product.name || "default_product_name";
  const translatedName = t(nameToTranslate);

  // Create query string from product object
  const productQuery = new URLSearchParams({
    id: product.id,
    name: translatedName,
    price: product.price || 0,
    image: product.image || "",
    color: product.color || "",
    description: product.description || "",
    category: product.category || "",
  }).toString();

  return (
    <Link
      to={`/product-details?${productQuery}`}
      className="block bg-gray-100 rounded-lg shadow-md overflow-hidden relative group hover:shadow-lg transition-shadow"
    >
      <div className="absolute top-3 left-3 z-10 flex gap-2">
        <button
          onClick={handleFavoriteClick}
          className="p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-all duration-200"
          aria-label={t("add_to_favorites_aria")}
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
          aria-label={t("add_to_cart")}
          title={t("add_to_cart")}
        >
          <i className="fas fa-shopping-cart text-gray-500 hover:text-emerald-600 transition-colors"></i>
        </button>
      </div>

      {product.image ? (
        <div className="w-full h-48 bg-white p-4">
          <img
            src={product.image}
            alt={translatedName}
            className="w-full h-full object-contain"
          />
        </div>
      ) : (
        <div
          className="w-full h-48"
          style={{ backgroundColor: product.color }}
        ></div>
      )}

      <div className="p-4 bg-white text-center">
        <h3 className="font-semibold text-gray-900 text-base">
          {translatedName}
        </h3>
      </div>
    </Link>
  );
};

export default ProductCard;
