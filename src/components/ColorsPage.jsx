import React, { useEffect, useMemo, useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";

const ColorsPage = ({
  productsData = [],
  categoriesData = [],
  title,
  subtitle,
  productType, // "interior" | "exterior" | "insulation"
}) => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === "rtl";
  const lang = i18n.language;
  const navigate = useNavigate();

  // التنقل عند الضغط على المنتج
  const handleProductClick = (product) => {
    navigate(`/product-details?id=${product.id}&type=${productType}`);
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [activeCategory, setActiveCategory] = useState(null);

  // ترجمة التصنيفات وإنشاء map للوصول السريع
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

  // إنشاء map للبحث عن الفئة بسرعة
  const categoryMap = useMemo(() => {
    const map = {};
    categoriesData.forEach((c) => {
      map[c.key] = c.name;
    });
    return map;
  }, [categoriesData]);

  // تطبيق الفلترة
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

      // تحسين منطق مطابقة الفئات
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

  const onSearchChange = (e) => setSearchQuery(e.target.value);
  const onSearchSubmit = () => applyFilter();
  const handleKeyPress = (e) => e.key === "Enter" && onSearchSubmit();

  const handleCategoryClick = (cat) => {
    const categoryKey = cat.key || cat.name;
    setActiveCategory(activeCategory === categoryKey ? null : categoryKey);
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

        {/* Search */}
        <div className="max-w-3xl w-full">
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
                  onFocus={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 0 0 3px rgba(32, 63, 132, 0.3)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 4px 6px rgba(32, 63, 132, 0.2)";
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
                  className="w-full rounded-b-xl sm:rounded-e-xl sm:rounded-s-none sm:rounded-b-xl border border-gray-300 bg-white/60 ps-4 pe-4 py-3 md:py-4 text-base focus:outline-none transition"
                  onFocus={(e) => {
                    e.target.style.borderColor = "#203F84";
                    e.target.style.boxShadow =
                      "0 0 0 3px rgba(32, 63, 132, 0.1)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#d1d5db";
                    e.target.style.boxShadow = "none";
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
                  className="w-full rounded-t-xl sm:rounded-s-xl sm:rounded-e-none sm:rounded-b-xl border border-gray-300 bg-white/60 pl-4 pr-4 py-3 md:py-4 text-base focus:outline-none transition"
                  onFocus={(e) => {
                    e.target.style.borderColor = "#203F84";
                    e.target.style.boxShadow =
                      "0 0 0 3px rgba(32, 63, 132, 0.1)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#d1d5db";
                    e.target.style.boxShadow = "none";
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
                  onFocus={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 0 0 3px rgba(32, 63, 132, 0.3)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 4px 6px rgba(32, 63, 132, 0.2)";
                  }}
                >
                  {t("search_button")}
                </button>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Categories */}
      {categories.length > 0 && (
        <section className="px-4 lg:px-10 py-8">
          <div className="flex flex-wrap justify-center gap-6">
            {categories.map((cat) => {
              const isActive = activeCategory === (cat.key || cat.name);
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryClick(cat)}
                  className={`group text-center p-2 rounded-xl transition-all ${
                    isActive ? "shadow-md scale-105" : "hover:scale-105"
                  }`}
                  style={{
                    backgroundColor: isActive ? "#E8EEF7" : "transparent",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor = "#f0f4ff";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor = "transparent";
                    }
                  }}
                >
                  {cat.image && (
                    <div className="h-28 w-28 mx-auto rounded-full overflow-hidden">
                      <img
                        src={cat.image}
                        alt={cat.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  )}
                  <div className="mt-2 font-semibold text-gray-800">
                    {cat.name}
                  </div>
                </button>
              );
            })}
          </div>
        </section>
      )}

      {/* Products Grid */}
      <section className="px-4 lg:px-10 py-8 md:py-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
          <div className="text-sm text-gray-600">
            <span className="font-semibold">{filteredProducts.length}</span>{" "}
            {t("products_count_of") || "من"}{" "}
            <span className="font-semibold">{productsData.length}</span>{" "}
            {t("products_count_product") || "منتج"}
          </div>
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
