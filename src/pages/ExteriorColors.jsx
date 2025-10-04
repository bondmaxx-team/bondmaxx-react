import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import testImage from "../assets/color-1.png";
import facade from "../assets/2.jpeg";
import exterior from "../assets/1.jpeg";
import { useShop } from "../context/ShopContext";

const ExteriorColorsPage = () => {
  const navigate = useNavigate();
  const { toggleFavorite, addToCart, isFavorite, inCart } = useShop();

  const categories = [
    { id: 1, name: "دهانات الواجهات", image: facade },
    { id: 2, name: "دهانات الجدران الخارجية", image: exterior },
  ];

  const products = [
    {
      id: 1,
      name: "دهان Bondmax خارجي فائق التحمل",
      category: "دهانات الواجهات",
      image: testImage,
      description: "حماية قصوى ضد العوامل الجوية القاسية.",
      features: [
        "مقاوم للأشعة فوق البنفسجية",
        "حماية من الرطوبة والأمطار",
        "عمر افتراضي يصل إلى 10 سنوات",
      ],
    },
    {
      id: 2,
      name: "دهان Bondmax للواجهات الحديثة",
      category: "دهانات الجدران الخارجية",
      image: testImage,
      description: "لمسة عصرية لواجهة منزلك.",
      features: [
        "ألوان ثابتة لا تتأثر بالشمس",
        "سهل التنظيف والصيانة",
        "مقاوم للتشقق والتقشر",
      ],
    },
    {
      id: 3,
      name: "دهان Bondmax مضاد للعفن",
      category: "دهانات الجدران الخارجية",
      image: testImage,
      description: "حماية من العفن والفطريات.",
      features: [
        "تقنية مضادة للبكتيريا",
        "مثالي للمناطق الرطبة",
        "يحافظ على نظافة الجدران",
      ],
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [activeCategory, setActiveCategory] = useState(null);

  // ----- Handlers -----
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

  const handleCategoryClick = (category) => {
    if (activeCategory === category.name) {
      // Category already active → deselect
      setActiveCategory(null);
      setFilteredProducts(products); // show all products
    } else {
      // New category selected → filter
      setActiveCategory(category.name);
      setFilteredProducts(products.filter((p) => p.category === category.name));
    }
  };

  const handleSearchInput = (e) => {
    const value = e.target.value;
    setSearchQuery(value);

    const query = value.toLowerCase().trim();
    if (!query) {
      // إعادة عرض المنتجات حسب الفئة أو جميعها
      setFilteredProducts(
        activeCategory
          ? products.filter((p) => p.category === activeCategory)
          : products
      );
      return;
    }

    const filtered = products.filter(
      (p) =>
        p.name.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query)
    );
    setFilteredProducts(filtered);
  };

  const handleKeyPress = (e) => e.key === "Enter" && handleSearchInput(e);

  return (
    <div
      className="bg-gradient-to-b from-blue-50 to-blue-100 min-h-screen"
      dir="rtl"
    >
      {/* Hero Section */}
      <section className="min-h-[50vh] flex flex-col items-center justify-center py-16 px-4 text-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-3 text-gray-900">
          منتجات خارجية
        </h1>
        <p className="text-gray-600 max-w-3xl mb-6 text-base">
          احمِ واجهة منزلك بأفضل دهانات خارجية من BondMax. تشكيلة متنوعة من
          الدهانات المقاومة للعوامل الجوية، مع ألوان تدوم طويلاً وتمنح واجهتك
          مظهراً عصرياً مميزاً.
        </p>

        {/* Search */}
        <div className="max-w-3xl w-full">
          <div className="relative flex flex-col sm:flex-row">
            <input
              type="search"
              placeholder="ابحث عن المنتج"
              value={searchQuery}
              onChange={handleSearchInput}
              onKeyPress={handleKeyPress}
              className="w-full rounded-t-xl sm:rounded-s-xl sm:rounded-e-none border border-gray-300 bg-white/60 ps-12 pe-4 py-3 md:py-4 text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              onClick={handleSearchInput}
              className="sm:rounded-e-xl sm:rounded-s-none rounded-b-xl bg-gradient-to-br from-blue-500 to-blue-700 px-5 md:px-8 py-3 md:py-4 text-white font-semibold hover:from-blue-600 hover:to-blue-800"
            >
              ابحث
            </button>
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
      <section className="px-4 lg:px-10 py-8">
        {filteredProducts.length === 0 && (
          <div className="text-center py-12 text-gray-700">
            <h3 className="text-lg font-medium">لا توجد نتائج</h3>
            <p className="mt-2 text-sm">حاول البحث بكلمات مختلفة</p>
          </div>
        )}

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

// ----- ProductCard -----
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
          className="absolute inset-0 h-full w-full object-contain group-hover:scale-110 transition-all duration-700 ease-out"
          loading="lazy"
        />

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

      <div className="px-4 md:px-6 py-4 md:py-5 flex flex-col">
        <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full mb-2">
          {product.category}
        </span>
        <h3 className="font-bold text-base md:text-lg mb-2 line-clamp-2 text-gray-900 group-hover:text-blue-700">
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
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
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

export default ExteriorColorsPage;
