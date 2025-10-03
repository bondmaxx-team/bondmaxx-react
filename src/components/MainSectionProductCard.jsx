import { useState } from "react";
import { Link } from "react-router-dom";
import { useShop } from "../context/ShopContext";

const ProductCard = ({ product }) => {
  const { toggleFavorite, isFavorite, addToCart } = useShop();

  const favorite = isFavorite(product.id);

  const handleFavoriteClick = (e) => {
    console.log(product);
    e.preventDefault(); // Prevent navigation when clicking favorite
    e.stopPropagation();
    toggleFavorite(product);
  };

  const handleCartClick = (e) => {
    e.preventDefault(); // Prevent navigation when clicking cart
    e.stopPropagation();
    addToCart(product);
  };

  // Create query string from product object
  const productQuery = new URLSearchParams({
    id: product.id,
    name: product.name,
    price: product.price,
    image: product.image || "",
    color: product.color || "",
    description: product.description || "",
    category: product.category || "",
  }).toString();

  return (
    <Link
      to={`?${productQuery}`}
      className="block bg-gray-100 rounded-lg shadow-md p-6 text-center relative group hover:shadow-lg transition-shadow"
    >
      <div className="absolute top-3 left-2 z-10 flex gap-2">
        <button
          onClick={handleFavoriteClick}
          className="p-1 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
          aria-label="إضافة إلى المفضلة"
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
          aria-label="أضف إلى السلة"
          title="أضف إلى السلة"
        >
          <i className="fas fa-shopping-cart text-gray-500 hover:text-emerald-600 transition-colors"></i>
        </button>
      </div>

      <h3 className="font-semibold mb-2">{product.name}</h3>

      {product.image ? (
        <img
          src={product.image}
          alt={product.name}
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
