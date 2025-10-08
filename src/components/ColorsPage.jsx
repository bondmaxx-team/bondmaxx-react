import React, { useEffect, useMemo, useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";

const ColorsPage = ({
  productsData = [],
  categoriesData = [],
  title,
  subtitle,
}) => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === "rtl";
  const navigate = useNavigate();

  // ✅ ترجم المنتجات مرة واحدة
  const translatedProducts = useMemo(() => {
    return productsData.map((p) => ({
      ...p,
      name: p.nameKey ? t(p.nameKey) : p.name,
      category: p.categoryKey ? t(p.categoryKey) : p.category,
      description: p.descriptionKey ? t(p.descriptionKey) : p.description,
      features: p.featuresKeys
        ? p.featuresKeys.map((fk) => t(fk))
        : p.features || [],
    }));
  }, [productsData, t]);

  const handleProductClick = (product) => {
    const productQuery = new URLSearchParams({
      id: product.id,
      name: product.name,
      price: product.price || "",
      image: product.image || "",
      color: product.color || "",
      description: product.description || "",
      category: product.category || "",
    }).toString();

    navigate(`/product-details?${productQuery}`);
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(translatedProducts);
  const [activeCategory, setActiveCategory] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState(new Set());
  const [selectedFeatures, setSelectedFeatures] = useState(new Set());
  const [showFilter, setShowFilter] = useState(false);

  const categories = useMemo(
    () => categoriesData.map((c) => ({ ...c, name: t(c.key) })),
    [categoriesData, t]
  );

  const allFeatures = useMemo(() => {
    const s = new Set();
    translatedProducts.forEach((p) =>
      (p.features || []).forEach((f) => s.add(f))
    );
    return Array.from(s);
  }, [translatedProducts]);

  const activeFiltersCount = useMemo(() => {
    let c = 0;
    if (searchQuery.trim()) c++;
    if (activeCategory) c++;
    c += selectedCategories.size;
    c += selectedFeatures.size;
    return c;
  }, [searchQuery, activeCategory, selectedCategories, selectedFeatures]);

  const applyFilter = useCallback(() => {
    const q = searchQuery.toLowerCase().trim();

    const next = translatedProducts.filter((p) => {
      const matchSearch = !q
        ? true
        : p.name?.toLowerCase().includes(q) ||
          p.category?.toLowerCase().includes(q) ||
          (p.description || "").toLowerCase().includes(q) ||
          (p.features || []).some((f) => f.toLowerCase().includes(q));
      if (!matchSearch) return false;

      const matchActiveCategory = !activeCategory
        ? true
        : p.category === activeCategory;
      if (!matchActiveCategory) return false;

      const matchSelectedCategories =
        selectedCategories.size === 0
          ? true
          : selectedCategories.has(p.category);
      if (!matchSelectedCategories) return false;

      const matchSelectedFeatures =
        selectedFeatures.size === 0
          ? true
          : Array.from(selectedFeatures).every((f) =>
              (p.features || []).includes(f)
            );

      return matchSelectedFeatures;
    });

    setFilteredProducts(next);
  }, [
    translatedProducts,
    searchQuery,
    activeCategory,
    selectedCategories,
    selectedFeatures,
  ]);

  useEffect(() => {
    setFilteredProducts(translatedProducts);
  }, [translatedProducts]);

  useEffect(() => {
    applyFilter();
  }, [applyFilter]);

  const onSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const onSearchSubmit = () => {
    applyFilter();
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") onSearchSubmit();
  };

  const handleCategoryClick = (cat) => {
    if (activeCategory === cat.name) {
      setActiveCategory(null);
    } else {
      setActiveCategory(cat.name);
    }
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
                  className="shrink-0 rounded-t-xl sm:rounded-s-xl sm:rounded-e-none sm:rounded-b-xl bg-gradient-to-br from-blue-500 to-blue-700 px-5 md:px-8 py-3 md:py-4 text-white font-semibold hover:from-blue-600 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors"
                >
                  {t("search_button")}
                </button>
                <input
                  type="search"
                  placeholder={t("search_product")}
                  value={searchQuery}
                  onChange={onSearchChange}
                  onKeyPress={handleKeyPress}
                  className="w-full rounded-b-xl sm:rounded-e-xl sm:rounded-s-none sm:rounded-b-xl border border-gray-300 bg-white/60 ps-4 pe-4 py-3 md:py-4 text-base focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
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
                  className="w-full rounded-t-xl sm:rounded-s-xl sm:rounded-e-none sm:rounded-b-xl border border-gray-300 bg-white/60 pl-4 pr-4 py-3 md:py-4 text-base focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
                />
                <button
                  type="button"
                  onClick={onSearchSubmit}
                  className="shrink-0 rounded-b-xl sm:rounded-e-xl sm:rounded-s-none sm:rounded-b-xl bg-gradient-to-br from-blue-500 to-blue-700 px-5 md:px-8 py-3 md:py-4 text-white font-semibold hover:from-blue-600 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors"
                >
                  {t("search_button")}
                </button>
              </>
            )}
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
              className={`group text-center p-2 rounded-xl transition-all ${
                activeCategory === cat.name
                  ? "bg-blue-100 shadow-md scale-105"
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
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
          <div className="text-sm text-gray-600">
            <span className="font-semibold">{filteredProducts.length}</span>{" "}
            {t("products_count_of")}{" "}
            <span className="font-semibold">{translatedProducts.length}</span>{" "}
            {t("products_count_product")}
          </div>

          {/* Filter Button */}
          <button
            onClick={() => setShowFilter(true)}
            className="flex items-center gap-2 px-4 py-2.5 bg-white border-2 border-gray-200 rounded-xl text-gray-700 font-medium hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <i className="fas fa-sliders-h text-lg"></i>
            <span>{t("filter_button")}</span>
            <span className="bg-blue-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
              {activeFiltersCount}
            </span>
          </button>

          {/* Filter Drawer */}
          {showFilter && (
            <div className="fixed inset-0 z-50">
              <div
                className="absolute inset-0 bg-black/40"
                onClick={() => setShowFilter(false)}
              />

              <div
                className={`absolute ${
                  isRTL ? "right-0" : "left-0"
                } top-0 h-full w-full max-w-md bg-white shadow-2xl ${
                  isRTL ? "rounded-s-2xl" : "rounded-e-2xl"
                } p-6 overflow-y-auto`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    {t("filter_products")}
                  </h3>
                  <button
                    onClick={() => setShowFilter(false)}
                    className="text-gray-500 hover:text-gray-700"
                    aria-label="Close"
                  >
                    ✕
                  </button>
                </div>

                {/* Categories */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">{t("category_filter")}</h4>
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
                          className={`px-3 py-1.5 rounded-full border text-sm transition ${
                            checked
                              ? "bg-blue-600 text-white border-blue-600"
                              : "bg-white text-gray-700 border-gray-300 hover:border-blue-400"
                          }`}
                        >
                          {cat.name}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">{t("features_filter")}</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {allFeatures.map((f) => {
                      const checked = selectedFeatures.has(f);
                      return (
                        <label
                          key={f}
                          className={`flex items-center gap-2 p-2 rounded-lg border cursor-pointer transition ${
                            checked
                              ? "bg-blue-50 border-blue-300"
                              : "bg-white border-gray-200 hover:border-blue-300"
                          }`}
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

                {/* Action Buttons */}
                <div className="flex items-center justify-between gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedCategories(new Set());
                      setSelectedFeatures(new Set());
                      setActiveCategory(null);
                      setSearchQuery("");
                    }}
                    className="px-4 py-2 rounded-xl border-2 border-gray-300 text-gray-700 hover:bg-gray-50"
                  >
                    {t("clear_filters")}
                  </button>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setShowFilter(false)}
                      className="px-4 py-2 rounded-xl border-2 border-gray-300 text-gray-700 hover:bg-gray-50"
                    >
                      {t("cancel_button")}
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowFilter(false)}
                      className="px-5 py-2 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700"
                    >
                      {t("apply_button")}
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
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12 text-gray-700">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-search text-3xl text-gray-400"></i>
            </div>
            <h3 className="mt-4 text-lg font-medium">{t("no_results")}</h3>
            <p className="mt-2 text-sm">{t("no_results_search_message")}</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default ColorsPage;
