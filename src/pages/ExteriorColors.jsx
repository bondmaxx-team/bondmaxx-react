import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import testImage from "../assets/color-1.png";
import facade from "../assets/2.jpeg";
import exterior from "../assets/1.jpeg";

const ExteriorColorsPage = ({
  title = "منتجات خارجية",
  subtitle = "احمِ واجهة منزلك بأفضل دهانات خارجية من BondMax. تشكيلة متنوعة من الدهانات المقاومة للعوامل الجوية، مع ألوان تدوم طويلاً وتمنح واجهتك مظهراً عصرياً مميزاً.",
  categories = [
    {
      id: 1,
      name: "دهانات الواجهات",
      image: facade,
      link: "#",
    },
    {
      id: 2,
      name: "دهانات الجدران الخارجية",
      image: exterior,
      link: "#",
    },
  ],
  products = [
    {
      id: 1,
      name: "دهان Bondmax خارجي فائق التحمل",
      category: "دهانات خارجية",
      image: testImage,
      description: "حماية قصوى ضد العوامل الجوية القاسية.",
      features: [
        "مقاوم للأشعة فوق البنفسجية",
        "حماية من الرطوبة والأمطار",
        "عمر افتراضي يصل إلى 10 سنوات",
      ],
      link: "product-details",
    },
    {
      id: 2,
      name: "دهان Bondmax للواجهات الحديثة",
      category: "دهانات خارجية",
      image: testImage,
      description: "لمسة عصرية لواجهة منزلك.",
      features: [
        "ألوان ثابتة لا تتأثر بالشمس",
        "سهل التنظيف والصيانة",
        "مقاوم للتشقق والتقشر",
      ],
      link: "#product-2",
    },
    {
      id: 3,
      name: "دهان Bondmax مضاد للعفن",
      category: "دهانات خارجية",
      image: testImage,
      description: "حماية من العفن والفطريات.",
      features: [
        "تقنية مضادة للبكتيريا",
        "مثالي للمناطق الرطبة",
        "يحافظ على نظافة الجدران",
      ],
      link: "#product-3",
    },
    {
      id: 4,
      name: "دهان Bondmax العازل الحراري",
      category: "دهانات خارجية",
      image: testImage,
      description: "يقلل من حرارة الجدران الخارجية.",
      features: ["عزل حراري فعّال", "يقلل استهلاك الطاقة", "يعكس أشعة الشمس"],
      link: "#product-4",
    },
    {
      id: 5,
      name: "دهان Bondmax الاقتصادي",
      category: "دهانات خارجية",
      image: testImage,
      description: "جودة عالية بسعر مناسب.",
      features: ["تغطية ممتازة", "سهل التطبيق", "مناسب للميزانيات المحدودة"],
      link: "#product-5",
    },
    {
      id: 6,
      name: "دهان Bondmax الفاخر للفلل",
      category: "دهانات خارجية",
      image: testImage,
      description: "فخامة وأناقة لا مثيل لها.",
      features: [
        "لمسة نهائية راقية",
        "ألوان حصرية",
        "مقاومة استثنائية للظروف القاسية",
      ],
      link: "#product-6",
    },
  ],
  onCategoryClick,
  onSearch,
}) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [showFilter, setShowFilter] = useState(false);

  const handleProductClick = (product) => {
    navigate("/exterior-colors/product-details");
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
    if (!value.trim()) setFilteredProducts(products);
    else handleSearch();
  };

  const handleKeyPress = (e) => e.key === "Enter" && handleSearch();

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
              <div className="relative flex-1">
                <input
                  type="search"
                  placeholder="ابحث عن المنتج"
                  value={searchQuery}
                  onChange={handleSearchInput}
                  onKeyPress={handleKeyPress}
                  className="peer w-full rounded-t-xl sm:rounded-s-xl sm:rounded-e-none border border-gray-300 bg-white/60 ps-12 pe-4 py-3 md:py-4 text-base focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
                />
                <svg
                  className="pointer-events-none absolute inset-y-0 start-4 my-auto h-5 w-5 text-gray-400 peer-focus:text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m21 21-4.35-4.35M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"
                  />
                </svg>
              </div>
              <button
                type="button"
                onClick={handleSearch}
                className="shrink-0 rounded-b-xl sm:rounded-e-xl sm:rounded-s-none bg-gradient-to-br from-blue-500 to-blue-700 px-5 md:px-8 py-3 md:py-4 text-white font-semibold hover:from-blue-600 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors"
              >
                ابحث عن المنتج
              </button>
            </div>
          </div>

          {/* Categories Grid */}
          <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-16 grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 place-items-center max-w-md mx-auto">
            {categories.map((category) => (
              <a
                key={category.id}
                href={category.link}
                onClick={(e) => {
                  onCategoryClick &&
                    e.preventDefault() &&
                    onCategoryClick(category);
                }}
                className="group text-center"
              >
                <div className="h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-32 lg:w-32 mx-auto rounded-full overflow-hidden ring-1 ring-blue-300 shadow-md group-hover:shadow-lg transition">
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
              </a>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 6h18M6 12h12M10 18h4"
              />
            </svg>
            فلتر
          </button>
        </div>

        {showFilter && (
          <div className="mb-6 p-4 bg-blue-50 rounded-xl border border-blue-200 text-sm text-gray-600">
            خيارات الفلترة ستظهر هنا
          </div>
        )}

        {/* Products Grid */}
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
            <svg
              className="mx-auto h-12 w-12 text-blue-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
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
      className={`group relative bg-white rounded-2xl overflow-hidden ring-1 ring-blue-300 shadow-md hover:shadow-2xl hover:ring-2 hover:ring-blue-500 transition-all duration-500 cursor-pointer max-w-sm mx-auto w-full transform hover:-translate-y-2`}
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

        {/* Favorite Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsFavorite(!isFavorite);
          }}
          className={`absolute top-3 left-3 grid h-9 w-9 place-items-center rounded-full bg-white shadow-lg ring-2 transition-all duration-300 z-30 transform hover:scale-110 active:scale-95 ${
            isFavorite
              ? "ring-blue-400 text-blue-500"
              : "ring-gray-200 text-gray-600 hover:ring-blue-300 hover:text-blue-400"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 transition-all duration-300 ${
              isFavorite ? "scale-110" : ""
            }`}
            viewBox="0 0 24 24"
            fill={isFavorite ? "currentColor" : "none"}
            stroke={isFavorite ? "none" : "currentColor"}
            strokeWidth={isFavorite ? 0 : 2}
          >
            <path d="M11.645 20.91l-.007-.003-.022-.012a20.55 20.55 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 3 13.173 3 10.75 3 8.264 4.988 6.5 7.313 6.5c1.357 0 2.61.546 3.487 1.43a4.94 4.94 0 013.487-1.43C16.612 6.5 18.6 8.264 18.6 10.75c0 2.423-1.688 4.61-3.989 6.757a25.177 25.177 0 01-4.244 3.17 21.21 21.21 0 01-.383.218l-.022.012-.007.003-.003.002-.003-.002z" />
          </svg>
        </button>

        {/* Badge */}
        <div
          className={`absolute top-3 right-3 px-3 py-1 bg-gradient-to-br from-blue-500 to-blue-700 text-white text-xs font-semibold rounded-full shadow-lg transform transition-all duration-500 ${
            isHovered ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
          }`}
        >
          مقاوم للعوامل الجوية
        </div>

        {/* Hover Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-opacity duration-500 z-20 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
              isHovered ? "scale-100 opacity-100" : "scale-0 opacity-0"
            }`}
          >
            <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-xl">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
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

        {/* Features */}
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

export default ExteriorColorsPage;
