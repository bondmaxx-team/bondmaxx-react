import { useState } from "react";
import { Link } from "react-router-dom";
import { useShop } from "../context/ShopContext";
import { useTranslation } from "react-i18next";

const ProductCard = ({ product }) => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === "rtl";

  const { toggleFavorite, isFavorite, addToCart } = useShop();

  const favorite = isFavorite(product.id);

  const handleFavoriteClick = (e) => {
    console.log(product);
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(product);
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  // ✅ ترجم اسم المنتج - جرب الاسم كمفتاح أولاً، وإذا ما لقى ترجمة استخدم الاسم الأصلي
  const translatedName =
    product.name[i18n.language] || product.name["en"] || product.nameKey;

  // Create query string from product object
  const productQuery = new URLSearchParams({
    id: product.id,
    name: product.nameKey,
    price: product.price,
    image: product.image || "",
    color: product.color || "",
    description: product.description || "",
    category: product.category || "",
  }).toString();

  return (
    <Link
      to={`/product-details?${productQuery}`}
      className="block w-full bg-gray-100 rounded-lg shadow-md p-6 text-center relative group hover:shadow-lg transition-shadow"
    >
      {/* <div className="absolute top-3 left-2 z-10 flex gap-2"> */}
      <div
        className={`absolute top-3 ${
          isRTL ? "left-2" : "right-2"
        } z-10 flex gap-2`}
      >
        <button
          onClick={handleFavoriteClick}
          className="p-1 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
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
          className="p-1 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
          aria-label={t("add_to_cart")}
          title={t("add_to_cart")}
        >
          <i className="fas fa-shopping-cart text-gray-500 hover:text-emerald-600 transition-colors"></i>
        </button>
      </div>

      <h3
        className="font-semibold mb-2 w-full text-gray-800 text-base truncate"
        title={translatedName}
      >
        {translatedName}
      </h3>

      {product.image ? (
        <img
          src={product.image}
          alt={translatedName}
          className="w-full h-28 object-contain rounded"
        />
      ) : (
        <div
          className="w-full h-32 rounded"
          style={{ backgroundColor: product.color }}
        ></div>
      )}
    </Link>
  );
};

export default ProductCard;
