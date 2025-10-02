import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import testImage from "../assets/color-1.png";
import roof from "../assets/2.jpeg";
import wall from "../assets/1.jpeg";

const categories = [
  { id: 1, name: "العزل الحراري", image: roof, link: "#" },
  { id: 2, name: "العزل الصوتي", image: wall, link: "#" },
];

const products = [
  {
    id: 1,
    name: "عازل حراري BondMax فائق الجودة",
    category: "العزل الحراري",
    image: testImage,
    description: "يحافظ على درجة الحرارة المثالية داخل المبنى.",
    features: ["يقلل استهلاك الطاقة", "مقاوم للرطوبة", "سهل التركيب"],
    link: "#product-1",
  },
  {
    id: 2,
    name: "عازل صوتي BondMax ممتاز",
    category: "العزل الصوتي",
    image: testImage,
    description: "يحميك من الضوضاء الخارجية.",
    features: ["امتصاص ممتاز للصوت", "خفيف الوزن", "متين وطويل الأمد"],
    link: "#product-2",
  },
  {
    id: 3,
    name: "عازل حراري BondMax للفلل",
    category: "العزل الحراري",
    image: testImage,
    description: "يحافظ على البرودة في الصيف والدفء في الشتاء.",
    features: ["عزل متقدم", "تحسين كفاءة الطاقة", "مقاوم للحريق"],
    link: "#product-3",
  },
  {
    id: 4,
    name: "عازل صوتي للغرف الداخلية",
    category: "العزل الصوتي",
    image: testImage,
    description: "يعزل الغرف الداخلية بشكل فعال.",
    features: ["امتصاص الضوضاء", "خفيف وسهل التركيب", "لا يعيق التهوية"],
    link: "#product-4",
  },
];

const InsulationPage = ({
  title = "منتجات العوازل",
  subtitle = "احمِ منزلك أو مكتبك بأفضل حلول العزل من BondMax. تشكيلة متنوعة من العوازل الحرارية والصوتية لضمان راحة وكفاءة عالية.",
  onCategoryClick,
  onSearch,
}) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [showFilter, setShowFilter] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  const handleProductClick = (product) => {
    navigate("/insulation/product-details");
  };

  const handleSearch = () => {
    const query = searchQuery.toLowerCase();
    const filtered = products.filter(
      (product) =>
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query)
    );
    setFilteredProducts(filtered);
    onSearch && onSearch(searchQuery, filtered);
  };

  const handleSearchInput = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    if (!value.trim()) {
      if (activeCategory) {
        setFilteredProducts(
          products.filter((p) => p.category === activeCategory)
        );
      } else {
        setFilteredProducts(products);
      }
    } else handleSearch();
  };

  const handleKeyPress = (e) => e.key === "Enter" && handleSearch();

  const handleCategoryClick = (category) => {
    setActiveCategory(category.name);
    setFilteredProducts(products.filter((p) => p.category === category.name));
    onCategoryClick && onCategoryClick(category);
  };

  return (
    <div
      className="bg-gradient-to-b from-blue-50 to-blue-100 min-h-screen"
      dir="rtl"
    >
      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-start lg:items-center justify-center py-24">
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
                onClick={handleSearch}
                className="shrink-0 rounded-b-xl sm:rounded-e-xl sm:rounded-s-none bg-gradient-to-br from-blue-500 to-blue-700 px-5 md:px-8 py-3 md:py-4 text-white font-semibold hover:from-blue-600 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors"
              >
                ابحث عن المنتج
              </button>
            </div>
          </div>

          {/* Categories */}
          <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-16 grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 place-items-center max-w-md mx-auto">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category)}
                className="group text-center p-1 rounded-xl transition-all"
              >
                <div className="h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-32 lg:w-32 mx-auto rounded-full overflow-hidden transition">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base font-semibold text-gray-800">
                  {category.name}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="px-4 lg:px-10 py-8 md:py-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
          <div className="text-sm text-gray-600">
            <span className="font-semibold">{filteredProducts.length}</span> من{" "}
            <span className="font-semibold">{products.length}</span> منتج
          </div>
          <button
            onClick={() => setShowFilter(!showFilter)}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-2 shadow-sm ring-1 ring-blue-300 hover:shadow-md transition-shadow"
          >
            فلتر
          </button>
        </div>

        {showFilter && (
          <div className="mb-6 p-4 bg-blue-50 rounded-xl border border-blue-200 text-sm text-gray-600">
            خيارات الفلترة ستظهر هنا
          </div>
        )}

        <div className="grid gap-5 sm:gap-6 grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => handleProductClick(product)}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12 text-gray-700">
            <h3 className="mt-4 text-lg font-medium">لا توجد نتائج</h3>
            <p className="mt-2 text-sm">حاول البحث بكلمات مختلفة</p>
          </div>
        )}
      </section>
    </div>
  );
};

const ProductCard = ({ product, onClick }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const features = product.features || [];

  return (
    <article
      className="group relative bg-white rounded-2xl overflow-hidden ring-1 ring-blue-300 shadow-md hover:shadow-2xl hover:ring-2 hover:ring-blue-500 transition-all duration-500 cursor-pointer max-w-sm mx-auto w-full transform hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100">
        <img
          src={product.image}
          alt={product.name}
          className="absolute inset-0 h-full w-full object-contain group-hover:scale-110 group-hover:rotate-2 transition-all duration-700 ease-out"
          loading="lazy"
        />
      </div>

      <div className="px-4 md:px-6 py-4 md:py-5 relative z-10 flex flex-col">
        <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full mb-2">
          {product.category}
        </span>
        <h3 className="font-bold text-base md:text-lg mb-2 line-clamp-2 text-gray-900 group-hover:text-blue-700 transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {product.description}
        </p>
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
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
          className="mt-auto w-full bg-gradient-to-br from-blue-500 to-blue-700 text-white font-bold py-3 rounded-xl shadow-lg hover:from-blue-600 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 active:scale-95"
        >
          اقرأ المزيد
        </button>
      </div>
    </article>
  );
};

export default InsulationPage;
