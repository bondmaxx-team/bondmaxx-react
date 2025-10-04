import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import testImage from "../assets/color-1.png";
import roof from "../assets/2.jpeg";
import wall from "../assets/1.jpeg";
import { useShop } from "../context/ShopContext";

const categories = [
  { id: 1, name: "العزل الحراري", image: roof },
  { id: 2, name: "العزل الصوتي", image: wall },
];

const productsData = [
  {
    id: 1,
    name: "عازل حراري BondMax فائق الجودة",
    category: "العزل الحراري",
    image: testImage,
    description: "يحافظ على درجة الحرارة المثالية داخل المبنى.",
    features: ["يقلل استهلاك الطاقة", "مقاوم للرطوبة", "سهل التركيب"],
  },
  {
    id: 2,
    name: "عازل صوتي BondMax ممتاز",
    category: "العزل الصوتي",
    image: testImage,
    description: "يحميك من الضوضاء الخارجية.",
    features: ["امتصاص ممتاز للصوت", "خفيف الوزن", "متين وطويل الأمد"],
  },
  {
    id: 3,
    name: "عازل حراري BondMax للفلل",
    category: "العزل الحراري",
    image: testImage,
    description: "يحافظ على البرودة في الصيف والدفء في الشتاء.",
    features: ["عزل متقدم", "تحسين كفاءة الطاقة", "مقاوم للحريق"],
  },
  {
    id: 4,
    name: "عازل صوتي للغرف الداخلية",
    category: "العزل الصوتي",
    image: testImage,
    description: "يعزل الغرف الداخلية بشكل فعال.",
    features: ["امتصاص الضوضاء", "خفيف وسهل التركيب", "لا يعيق التهوية"],
  },
];

const InsulationPage = ({
  title = "منتجات العوازل",
  subtitle = "احمِ منزلك أو مكتبك بأفضل حلول العزل من BondMax. تشكيلة متنوعة من العوازل الحرارية والصوتية لضمان راحة وكفاءة عالية.",
}) => {
  const navigate = useNavigate();
  const { toggleFavorite, addToCart, isFavorite, inCart } = useShop();

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [showFilter, setShowFilter] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState(new Set()); // من لوحة الفلاتر
  const [selectedFeatures, setSelectedFeatures] = useState(new Set());

  // استنتاج الفئات (categories) من المنتجات نفسها
  const categories = useMemo(() => {
    const map = new Map();
    for (const p of productsData) {
      if (!map.has(p.category)) {
        map.set(p.category, {
          id: p.category,
          name: p.category,
          image: p.image,
        });
      }
    }
    return Array.from(map.values());
  }, []);

  // جمع كل المزايا المتاحة (features) بشكل فريد
  const allFeatures = useMemo(() => {
    const s = new Set();
    productsData.forEach((p) => (p.features || []).forEach((f) => s.add(f)));
    return Array.from(s);
  }, []);

  // عدّاد الفلاتر المفعّلة
  const activeFiltersCount = useMemo(() => {
    let c = 0;
    if (searchQuery.trim()) c++;
    if (activeCategory) c++;
    c += selectedCategories.size;
    c += selectedFeatures.size;
    return c;
  }, [searchQuery, activeCategory, selectedCategories, selectedFeatures]);

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

  const handleSearch = () => {
    const query = searchQuery.toLowerCase();
    const filtered = productsData.filter(
      (product) =>
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query)
    );
    setFilteredProducts(filtered);
  };

  const handleSearchInput = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
  };

  useEffect(() => {
    const q = searchQuery.toLowerCase().trim();

    const next = productsData.filter((p) => {
      // 1) نص البحث
      const matchSearch = !q
        ? true
        : p.name?.toLowerCase().includes(q) ||
          p.category?.toLowerCase().includes(q) ||
          p.description?.toLowerCase().includes(q);

      if (!matchSearch) return false;

      // 2) الفئة المختارة من الشريط العلوي (واحدة)
      const matchActiveCategory = !activeCategory
        ? true
        : p.category === activeCategory;
      if (!matchActiveCategory) return false;

      // 3) فئات مختارة من لوحة التصفية (ممكن أكثر من فئة)
      const matchSelectedCategories =
        selectedCategories.size === 0
          ? true
          : selectedCategories.has(p.category);
      if (!matchSelectedCategories) return false;

      // 4) مزايا مختارة من لوحة التصفية (AND: كل المزايا يجب تتوفر)
      const matchSelectedFeatures =
        selectedFeatures.size === 0
          ? true
          : Array.from(selectedFeatures).every((f) =>
              (p.features || []).includes(f)
            );

      return matchSelectedFeatures;
    });

    setFilteredProducts(next);
  }, [searchQuery, activeCategory, selectedCategories, selectedFeatures]);

  const handleCategoryClick = (category) => {
    if (activeCategory === category.name) {
      // Category already active → deselect
      setActiveCategory(null);
      setFilteredProducts(productsData); // show all products
    } else {
      // New category selected → filter
      setActiveCategory(category.name);
      setFilteredProducts(
        productsData.filter((p) => p.category === category.name)
      );
    }
  };

  return (
    <div
      className="bg-gradient-to-b from-blue-50 to-blue-100 min-h-screen"
      dir="rtl"
    >
      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-start lg:items-center justify-center py-24">
        <div className="w-full max-w-6xl px-4 text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900">
            {title}
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed text-base">
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
                  <div className="mt-2 font-semibold text-gray-800">
                    {cat.name}
                  </div>
                </button>
              ))}
            </div>
          </section>
        </div>
      </section>

      {/* Products Section */}
      <section className="px-4 lg:px-10 py-8 md:py-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
          <div className="text-sm text-gray-600">
            <span className="font-semibold">{filteredProducts.length}</span> من{" "}
            <span className="font-semibold">{productsData.length}</span> منتج
          </div>

          {/* Filter Button */}
          <button
            onClick={() => setShowFilter(true)}
            className="flex items-center gap-2 px-4 py-2.5 bg-white border-2 border-gray-200 rounded-xl text-gray-700 font-medium hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <i className="fas fa-sliders-h text-lg"></i>
            <span>تصفية</span>
            <span className="bg-blue-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
              {activeFiltersCount}
            </span>
          </button>

          {/* Filter Drawer / Modal */}
          {showFilter && (
            <div className="fixed inset-0 z-50">
              {/* الخلفية */}
              <div
                className="absolute inset-0 bg-black/40"
                onClick={() => setShowFilter(false)}
              />

              {/* محتوى اللوحة */}
              <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl rounded-s-2xl p-6 overflow-y-auto">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    تصفية المنتجات
                  </h3>
                  <button
                    onClick={() => setShowFilter(false)}
                    className="text-gray-500 hover:text-gray-700"
                    aria-label="Close"
                  >
                    ✕
                  </button>
                </div>

                {/* فئات المنتجات (متعدد الاختيار) */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">الفئة</h4>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((cat) => {
                      const checked = selectedCategories.has(cat.name);
                      return (
                        <button
                          key={cat.id}
                          type="button"
                          onClick={() => {
                            const next = new Set(selectedCategories);
                            checked
                              ? next.delete(cat.name)
                              : next.add(cat.name);
                            setSelectedCategories(next);
                          }}
                          className={`px-3 py-1.5 rounded-full border text-sm transition
                  ${
                    checked
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white text-gray-700 border-gray-300 hover:border-blue-400"
                  }
                `}
                        >
                          {cat.name}
                        </button>
                      );
                    })}
                  </div>
                  {/* ملاحظة: إذا أردت أن تتجاهل الفئة العلوية (activeCategory) عند فتح اللوحة، يمكنك مسحها هنا */}
                </div>

                {/* المزايا (features) */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">المزايا</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {allFeatures.map((f) => {
                      const checked = selectedFeatures.has(f);
                      return (
                        <label
                          key={f}
                          className={`flex items-center gap-2 p-2 rounded-lg border cursor-pointer transition
                  ${
                    checked
                      ? "bg-blue-50 border-blue-300"
                      : "bg-white border-gray-200 hover:border-blue-300"
                  }
                `}
                        >
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => {
                              const next = new Set(selectedFeatures);
                              checked ? next.delete(f) : next.add(f);
                              setSelectedFeatures(next);
                            }}
                          />
                          <span className="text-sm text-gray-800">{f}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* أزرار الإجراء */}
                <div className="flex items-center justify-between gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedCategories(new Set());
                      setSelectedFeatures(new Set());
                      // ملاحظة: لا نمسح البحث أو الفئة العلوية هنا حتى لا نربك المستخدم
                    }}
                    className="px-4 py-2 rounded-xl border-2 border-gray-300 text-gray-700 hover:bg-gray-50"
                  >
                    مسح الفلاتر
                  </button>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setShowFilter(false)}
                      className="px-4 py-2 rounded-xl border-2 border-gray-300 text-gray-700 hover:bg-gray-50"
                    >
                      إلغاء
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowFilter(false)}
                      className="px-5 py-2 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700"
                    >
                      تطبيق
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="grid gap-5 sm:gap-6 grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => handleProductClick(product)}
              toggleFavorite={() => toggleFavorite(product)}
              addToCart={() => addToCart(product)}
              isFav={isFavorite(product.id)}
              isInCart={inCart(product.id)}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12 text-gray-700">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-search text-3xl text-gray-400"></i>
            </div>
            <h3 className="mt-4 text-lg font-medium">لا توجد نتائج</h3>
            <p className="mt-2 text-sm">حاول البحث بكلمات مختلفة</p>
          </div>
        )}
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

export default InsulationPage;
