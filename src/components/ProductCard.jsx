import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useShop } from "../context/ShopContext";

const ProductCard = ({ product, onClick }) => {
  const { toggleFavorite, addToCart, isFavorite, isInCart } = useShop();
  const [isHovered, setIsHovered] = useState(false);
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === "rtl";
  const features = product.features || [];

  // تحديد إذا المنتج في المفضلة
  const isFav = isFavorite(product.id);

  // تحديد إذا المنتج في السلة
  const isProductInCart = isInCart(product.id);

  return (
    <article
      className="group relative bg-white rounded-2xl overflow-hidden ring-1 ring-blue-300 shadow-md hover:shadow-2xl hover:ring-2 hover:ring-blue-500 transition-all duration-500 cursor-pointer max-w-sm mx-auto w-full transform hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100">
        <img
          src={product.image}
          alt={product.name}
          className="absolute inset-0 h-full w-full object-contain group-hover:scale-110 group-hover:rotate-2 transition-all duration-700 ease-out"
          loading="lazy"
        />

        <div
          className={`absolute top-3 ${
            isRTL ? "left-3" : "right-3"
          } flex gap-2`}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleFavorite({
                id: product.id,
                image: product.image,
                name: product.name,
                price: product.price,
              });
            }}
            className={`grid h-7 w-7 place-items-center rounded-full bg-white shadow-lg ring-2 transition ${
              isFav
                ? "ring-blue-400 text-blue-500"
                : "ring-gray-200 text-gray-600 hover:ring-blue-300 hover:text-blue-400"
            }`}
            aria-label={t("add_to_favorites")}
          >
            <i className={`fa${isFav ? "s" : "r"} fa-heart text-[16px]`}></i>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              addToCart(
                {
                  id: product.id,
                  image: product.image,
                  name: product.name,
                  price: product.price,
                },
                1
              );
            }}
            className={`grid h-7 w-7 place-items-center rounded-full bg-white shadow-lg ring-2 transition ${
              isProductInCart
                ? "ring-green-400 text-green-600"
                : "ring-gray-200 text-gray-600 hover:ring-blue-300 hover:text-blue-500"
            }`}
            aria-label={t("add_to_cart")}
          >
            <i className={`fa-solid fa-cart-shopping text-[15px]`}></i>
          </button>
        </div>
      </div>

      <div className="px-4 md:px-6 py-4 md:py-5 relative z-10 flex flex-col">
        <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full mb-2">
          {product.category}
        </span>
        <h3 className="font-bold text-base md:text-lg mb-2 line-clamp-2 text-gray-900 group-hover:text-blue-700 transition-colors">
          {product.name}
        </h3>
        {product.description && (
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
            {product.description}
          </p>
        )}
        {features.length > 0 && (
          <ul className="text-sm leading-6 text-gray-700 space-y-1 mb-3">
            {features.slice(0, 3).map((feature, index) => (
              <li
                key={index}
                className={`flex items-start gap-2 transition-all duration-500 ${
                  isHovered
                    ? "translate-x-0 opacity-100"
                    : `${isRTL ? "translate-x-4" : "-translate-x-4"} opacity-70`
                }`}
              >
                <svg
                  className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  />
                </svg>
                <span className="line-clamp-1">{feature}</span>
              </li>
            ))}
          </ul>
        )}
        {product.price && (
          <p className="text-lg font-bold text-emerald-600 mb-3">
            {product.price} {t("currency_sar")}
          </p>
        )}
        <button
          onClick={onClick}
          className={`mt-auto w-full font-bold py-3 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95 ${
            isProductInCart
              ? "bg-blue-600 text-white hover:bg-blue-600"
              : "bg-gradient-to-br from-blue-500 to-blue-700 text-white hover:from-blue-600 hover:to-blue-800"
          }`}
        >
          {t("view_product")}
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
