import React, {
  useEffect,
  useMemo,
  useState,
  useCallback,
  useRef,
} from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";

const ColorsPage = ({
  productsData = [],
  categoriesData = [],
  title,
  subtitle,
  productType,
}) => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === "rtl";
  const lang = i18n.language;
  const navigate = useNavigate();
  const searchRef = useRef(null);

  const handleProductClick = (product) => {
    navigate(`/product-details?id=${product.id}&type=${productType}`);
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [activeCategory, setActiveCategory] = useState(null);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);

  const categories = useMemo(() => {
    return categoriesData.map((c) => ({
      ...c,
      name:
        c.name?.[lang] ||
        c.name?.ar ||
        c.name?.en ||
        c.name?.tr ||
        c.name?.de ||
        "",
    }));
  }, [categoriesData, lang]);

  const applyFilter = useCallback(() => {
    const q = searchQuery.toLowerCase().trim();

    const next = productsData.filter((p) => {
      const name =
        typeof p.name === "object"
          ? p.name?.[lang] || p.name?.en || ""
          : p.name || "";
      const description =
        typeof p.description === "object"
          ? p.description?.[lang] || p.description?.en || ""
          : p.description || "";
      const categoryName =
        typeof p.category === "object"
          ? p.category?.[lang] || p.category?.en || ""
          : p.category || "";
      const features =
        typeof p.features === "object"
          ? p.features?.[lang] || p.features?.en || []
          : p.features || [];

      const matchSearch = !q
        ? true
        : name.toLowerCase().includes(q) ||
          categoryName.toLowerCase().includes(q) ||
          description.toLowerCase().includes(q) ||
          features.some((f) => f.toLowerCase().includes(q));

      if (!matchSearch) return false;

      const matchActiveCategory = !activeCategory
        ? true
        : p.category === activeCategory ||
          p.categoryKey === activeCategory ||
          categoryName === activeCategory;

      return matchActiveCategory;
    });

    setFilteredProducts(next);
  }, [productsData, lang, searchQuery, activeCategory]);

  useEffect(() => setFilteredProducts(productsData), [productsData]);
  useEffect(() => applyFilter(), [applyFilter]);

  // إخفاء القائمة عند الضغط خارجها
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowCategoryDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const onSearchChange = (e) => setSearchQuery(e.target.value);
  const onSearchSubmit = () => applyFilter();
  const handleKeyPress = (e) => e.key === "Enter" && onSearchSubmit();

  const handleCategoryClick = (cat) => {
    const categoryKey = cat.key || cat.name;
    if (categoryKey === "all") {
      setActiveCategory(null);
    } else {
      setActiveCategory(categoryKey);
    }
    setShowCategoryDropdown(false);
  };

  return (
    <div
      className="bg-gradient-to-b from-blue-50 to-blue-100 min-h-screen"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Hero Section */}
      <section className="min-h-[50vh] flex flex-col items-center justify-center py-16 px-4 text-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-3 text-gray-900">
          {title}
        </h1>
        <p className="text-gray-600 max-w-3xl mb-6 text-base">{subtitle}</p>

        {/* Search with Category Dropdown */}
        <div className="max-w-3xl w-full relative" ref={searchRef}>
          <div className="relative flex flex-col sm:flex-row">
            {isRTL ? (
              <>
                <button
                  type="button"
                  onClick={onSearchSubmit}
                  className="shrink-0 rounded-t-xl sm:rounded-s-xl sm:rounded-e-none sm:rounded-b-xl px-5 md:px-8 py-3 md:py-4 text-white font-semibold focus:outline-none transition-all duration-300"
                  style={{
                    background:
                      "linear-gradient(to bottom right, #203F84, #1a3366)",
                    boxShadow: "0 4px 6px rgba(32, 63, 132, 0.2)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background =
                      "linear-gradient(to bottom right, #1a3366, #142952)";
                    e.currentTarget.style.transform = "scale(1.02)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background =
                      "linear-gradient(to bottom right, #203F84, #1a3366)";
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  {t("search_button")}
                </button>
                <input
                  type="search"
                  placeholder={t("search_product")}
                  value={searchQuery}
                  onChange={onSearchChange}
                  onKeyPress={handleKeyPress}
                  onFocus={() => setShowCategoryDropdown(true)}
                  onMouseEnter={() => setShowCategoryDropdown(true)}
                  className="w-full rounded-b-xl sm:rounded-e-xl sm:rounded-s-none sm:rounded-b-xl border border-gray-300 bg-white/60 ps-4 pe-4 py-3 md:py-4 text-base focus:outline-none transition"
                  style={{
                    borderColor: showCategoryDropdown ? "#203F84" : "#d1d5db",
                  }}
                />
              </>
            ) : (
              <>
                <input
                  type="search"
                  placeholder={t("search_product")}
                  value={searchQuery}
                  onChange={onSearchChange}
                  onKeyPress={handleKeyPress}
                  onFocus={() => setShowCategoryDropdown(true)}
                  onMouseEnter={() => setShowCategoryDropdown(true)}
                  className="w-full rounded-t-xl sm:rounded-s-xl sm:rounded-e-none sm:rounded-b-xl border border-gray-300 bg-white/60 pl-4 pr-4 py-3 md:py-4 text-base focus:outline-none transition"
                  style={{
                    borderColor: showCategoryDropdown ? "#203F84" : "#d1d5db",
                  }}
                />
                <button
                  type="button"
                  onClick={onSearchSubmit}
                  className="shrink-0 rounded-b-xl sm:rounded-e-xl sm:rounded-s-none sm:rounded-b-xl px-5 md:px-8 py-3 md:py-4 text-white font-semibold focus:outline-none transition-all duration-300"
                  style={{
                    background:
                      "linear-gradient(to bottom right, #203F84, #1a3366)",
                    boxShadow: "0 4px 6px rgba(32, 63, 132, 0.2)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background =
                      "linear-gradient(to bottom right, #1a3366, #142952)";
                    e.currentTarget.style.transform = "scale(1.02)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background =
                      "linear-gradient(to bottom right, #203F84, #1a3366)";
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  {t("search_button")}
                </button>
              </>
            )}
          </div>

          {showCategoryDropdown && categories.length > 0 && (
            <div className="absolute left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-2xl z-50 max-h-80 overflow-y-auto">
              <div className="p-3">
                {categories.map((cat) => {
                  const isActive = activeCategory === (cat.key || cat.name);
                  return (
                    <button
                      key={cat.id}
                      onClick={() => handleCategoryClick(cat)}
                      className="w-full px-4 py-3 rounded-lg transition-all duration-200 flex items-center gap-3 mb-1"
                      style={{
                        textAlign: isRTL ? "right" : "left",
                        direction: isRTL ? "rtl" : "ltr",
                        backgroundColor: isActive ? "#203F84" : "transparent",
                        color: isActive ? "white" : "#374151",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#203F84";
                        e.currentTarget.style.color = "white";
                        const img = e.currentTarget.querySelector("img");
                        if (img) img.style.borderColor = "white";
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive) {
                          e.currentTarget.style.backgroundColor = "transparent";
                          e.currentTarget.style.color = "#374151";
                          const img = e.currentTarget.querySelector("img");
                          if (img) img.style.borderColor = "#e5e7eb";
                        }
                      }}
                    >
                      {cat.image && (
                        <img
                          src={cat.image}
                          alt={cat.name}
                          className="w-10 h-10 rounded-full object-cover border-2 shadow-sm transition-all duration-200"
                          style={{
                            borderColor: isActive ? "white" : "#e5e7eb",
                          }}
                        />
                      )}
                      <span className="font-medium flex-1">{cat.name}</span>
                      {isActive && <i className="fas fa-check text-sm"></i>}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Products Grid */}
      <section className="px-4 lg:px-10 py-8 md:py-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
          <div className="text-sm text-gray-600">
            <span className="font-semibold">{filteredProducts.length}</span>{" "}
            {t("products_count_of") || "من"}{" "}
            <span className="font-semibold">{productsData.length}</span>{" "}
            {t("products_count_product") || "منتج"}
          </div>

          {/* عرض الفئة النشطة */}
          {activeCategory && (
            <button
              onClick={() => setActiveCategory(null)}
              className="text-sm px-4 py-2 bg-[#203F84] text-white rounded-lg hover:bg-[#1a3366] transition flex items-center gap-2"
            >
              <span>
                {categories.find((c) => (c.key || c.name) === activeCategory)
                  ?.name || activeCategory}
              </span>
              <i className="fas fa-times"></i>
            </button>
          )}
        </div>

        <div className="grid gap-5 sm:gap-6 grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              productType={productType}
              onClick={() => handleProductClick(product)}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12 text-gray-700">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-search text-3xl text-gray-400"></i>
            </div>
            <h3 className="mt-4 text-lg font-medium">
              {t("no_results") || "لا توجد نتائج"}
            </h3>
            <p className="mt-2 text-sm">
              {t("no_results_search_message") || "حاول البحث بكلمات أخرى"}
            </p>
          </div>
        )}
      </section>
    </div>
  );
};

export default ColorsPage;
