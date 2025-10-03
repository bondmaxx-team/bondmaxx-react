import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import testImage from "../assets/color-1.png";
import roof from "../assets/2.jpeg";
import wall from "../assets/1.jpeg";
import { useShop } from "../context/ShopContext";

const InteriorColorsPage = ({
  title = "منتجات داخلية",
  subtitle = "تسوّق منتجات BondMax اكتشف تشكيلتنا المتنوعة من الدهانات عالية الجودة واختر الألوان التي تضيف لجدرانك الحماية والجمال في آن واحد.",
  categories = [
    { id: 1, name: "الأسقف", image: roof },
    { id: 2, name: "الحوائط", image: wall },
  ],
  products = [
    {
      id: 1,
      name: "دهان Bondmax مطفي",
      category: "دهانات",
      image: testImage,
      description: "جدران جميلة كل يوم.",
      features: ["لمسات حريرية فاخرة", "تحمل عالٍ للغسل", "ألوان دقيقة دافئة"],
    },
    {
      id: 2,
      name: "دهان Bondmax مطفي",
      category: "دهانات",
      image: testImage,
      description: "جدران جميلة كل يوم.",
      features: ["لمسات حريرية فاخرة", "تحمل عالٍ للغسل", "ألوان دقيقة دافئة"],
    },
    {
      id: 3,
      name: "دهان Bondmax مطفي",
      category: "دهانات",
      image: testImage,
      description: "جدران جميلة كل يوم.",
      features: ["لمسات حريرية فاخرة", "تحمل عالٍ للغسل", "ألوان دقيقة دافئة"],
    },
  ],
}) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [activeCategory, setActiveCategory] = useState(null);

  const { toggleFavorite, addToCart, isFavorite, inCart } = useShop();

  const handleProductClick = (product) => {
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

    navigate(`/product-details?${productQuery}`); // رابط صفحة التفاصيل
  };
  const handleSearchInput = (e) => {
    const value = e.target.value;
    setSearchQuery(value);

    if (!value.trim()) {
      setFilteredProducts(products);
    } else {
      const query = value.toLowerCase();
      const filtered = products.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query) ||
          (p.description || "").toLowerCase().includes(query) ||
          (p.features || []).some((f) => f.toLowerCase().includes(query))
      );
      setFilteredProducts(filtered);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter")
      handleSearchInput({ target: { value: searchQuery } });
  };

  const handleCategoryClick = (cat) => {
    setActiveCategory(cat.name);
    // في حال بدك تصفي المنتجات حسب الفئة:
    // const filtered = products.filter(p => p.category === cat.name);
    // setFilteredProducts(filtered);
  };

  return (
    <div
      className="bg-gradient-to-b from-blue-50 to-blue-100 min-h-screen"
      dir="rtl"
    >
      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-start lg:items-center justify-center py-24 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="w-full max-w-6xl px-4 text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 tracking-tight text-gray-900">
            {title}
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto mb-6 md:mb-10 leading-relaxed text-sm md:text-base">
            {subtitle}
          </p>

          {/* Search */}
          <div className="mx-auto max-w-3xl">
            <div className="relative flex flex-col sm:flex-row">
              <input
                type="search"
                placeholder="ابحث عن المنتج"
                value={searchQuery}
                onChange={handleSearchInput}
                onKeyPress={handleKeyPress}
                className="peer w-full rounded-t-xl sm:rounded-s-xl sm:rounded-e-none border border-gray-300 bg-white/60 ps-12 pe-4 py-3 md:py-4 text-base focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
              />
              <button
                type="button"
                onClick={() => handleKeyPress({ key: "Enter" })}
                className="shrink-0 rounded-b-xl sm:rounded-e-xl sm:rounded-s-none bg-gradient-to-br from-blue-500 to-blue-700 px-5 md:px-8 py-3 md:py-4 text-white font-semibold hover:from-blue-600 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors"
              >
                ابحث عن المنتج
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}

      <section className="px-4 lg:px-10 py-8">
        <div className="flex flex-wrap justify-center gap-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryClick(cat)}
              className={`group text-center p-2 rounded-xl transition-all
          ${
            activeCategory === cat.name
              ? "bg-blue-100 shadow-md scale-105" // تأثير عند الضغط / focus
              : "hover:bg-blue-50 hover:scale-105"
          }`}
            >
              <div className="h-28 w-28 mx-auto rounded-full overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-2 font-semibold text-gray-800">{cat.name}</div>
            </button>
          ))}
        </div>
      </section>

      {/* Products Grid */}
      <section className="px-4 lg:px-10 py-8 md:py-10">
        <div className="grid gap-5 sm:gap-6 grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => handleProductClick(product)}
              toggleFavorite={() => toggleFavorite(product)}
              addToCart={() => addToCart(product, 1)}
              isFav={isFavorite(product.id)}
              isInCart={inCart(product.id)}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

const ProductCard = ({
  product,
  onClick,
  toggleFavorite,
  addToCart,
  isFav,
  isInCart,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const features = product.features || [];

  return (
    <article
      className="group relative bg-white rounded-2xl overflow-hidden ring-1 ring-blue-300 shadow-md hover:shadow-2xl hover:ring-2 hover:ring-blue-500 transition-all duration-500 cursor-pointer max-w-sm mx-auto w-full transform hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100">
        <img
          src={product.image || testImage}
          alt={product.name}
          className="absolute inset-0 h-full w-full object-contain group-hover:scale-110 group-hover:rotate-2 transition-all duration-700 ease-out"
          loading="lazy"
        />

        {/* Favorite + Cart Buttons */}
        <div className="absolute top-3 left-3 flex gap-2">
          {/* ❤️ Favorite Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleFavorite();
            }}
            className={`grid h-7 w-7 place-items-center rounded-full bg-white shadow-lg ring-2 transition ${
              isFav
                ? "ring-blue-400 text-blue-500"
                : "ring-gray-200 text-gray-600 hover:ring-blue-300 hover:text-blue-400"
            }`}
          >
            <i className={`fa${isFav ? "s" : "r"} fa-heart text-[16px]`}></i>
          </button>

          {/* 🛒 Add to Cart Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              addToCart();
            }}
            className={`grid h-7 w-7 place-items-center rounded-full bg-white shadow-lg ring-2 transition ${
              isInCart
                ? "ring-green-400 text-green-600"
                : "ring-gray-200 text-gray-600 hover:ring-blue-300 hover:text-blue-500"
            }`}
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
                    : "translate-x-4 opacity-70"
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
        <button
          onClick={onClick}
          className={`mt-auto w-full font-bold py-3 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95 ${
            isInCart
              ? "bg-blue-600 text-white hover:bg-blue-600"
              : "bg-gradient-to-br from-blue-500 to-blue-700 text-white hover:from-blue-600 hover:to-blue-800"
          }`}
        >
          عرض المنتج
        </button>
      </div>
    </article>
  );
};

export default InteriorColorsPage;
