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
  const { i18n } = useTranslation();
  const isRTL = i18n.dir() === "rtl";
  const lang = i18n.language;
  const navigate = useNavigate();
  const searchRef = useRef(null);

  const handleProductClick = (product) => {
    navigate(`/product-details?id=${product.id}&type=${productType}`);
  };

  // ----------------- States -----------------
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [activeCategory, setActiveCategory] = useState(null);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [selectedWeight, setSelectedWeight] = useState("");
  const [selectedQuality, setSelectedQuality] = useState("");

  // ----------------- Filter Labels -----------------
  const filterLabels = {
    weight: { en: "Weight", tr: "Ağırlık", de: "Gewicht", ar: "الوزن" },
    quality: { en: "Quality", tr: "Kalite", de: "Qualität", ar: "الجودة" },
    all: { en: "All", tr: "Hepsi", de: "Alle", ar: "الكل" },
    clearAll: {
      en: "Clear All",
      tr: "Hepsini Temizle",
      de: "Alle löschen",
      ar: "مسح الفلاتر",
    },
    searchPlaceholder: {
      en: "Search product",
      tr: "Ürün ara",
      de: "Produkt suchen",
      ar: "ابحث عن منتج",
    },
    searchButton: { en: "Search", tr: "Ara", de: "Suchen", ar: "بحث" },
    noResults: {
      en: "No results",
      tr: "Sonuç yok",
      de: "Keine Ergebnisse",
      ar: "لا توجد نتائج",
    },
    noResultsMessage: {
      en: "Try searching with different keywords",
      tr: "Farklı anahtar kelimelerle aramayı deneyin",
      de: "Versuchen Sie es mit anderen Suchbegriffen",
      ar: "حاول البحث بكلمات أخرى",
    },
    productsCountOf: { en: "of", tr: "den", de: "von", ar: "من" },
    productsCountProduct: {
      en: "products",
      tr: "ürün",
      de: "Produkte",
      ar: "منتج",
    },
  };

  // ----------------- Available Weights & Qualities -----------------
  const availableWeights = [
    { value: "1kg", label: { en: "1 kg", ar: "1 كغ", de: "1 kg", tr: "1 kg" } },
    { value: "4kg", label: { en: "4 kg", ar: "4 كغ", de: "4 kg", tr: "4 kg" } },
    {
      value: "10kg",
      label: { en: "10 kg", ar: "10 كغ", de: "10 kg", tr: "10 kg" },
    },
    {
      value: "20kg",
      label: { en: "20 kg", ar: "20 كغ", de: "20 kg", tr: "20 kg" },
    },
    {
      value: "25kg",
      label: { en: "25 kg", ar: "25 كغ", de: "25 kg", tr: "25 kg" },
    },
  ];

  const availableQualities = [
    {
      value: "gold",
      label: { en: "Gold", ar: "ذهبي", de: "Gold", tr: "Altın" },
    },
    {
      value: "normal",
      label: { en: "Normal", ar: "عادي", de: "Normal", tr: "Normal" },
    },
  ];

  // ----------------- Categories Memo -----------------
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

  // ----------------- Apply Filters -----------------
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

      const matchWeight = !selectedWeight
        ? true
        : p.weight?.toString() === selectedWeight;

      const matchQuality = !selectedQuality
        ? true
        : p.quality?.toString() === selectedQuality;

      return matchActiveCategory && matchWeight && matchQuality;
    });

    setFilteredProducts(next);
  }, [
    productsData,
    lang,
    searchQuery,
    activeCategory,
    selectedWeight,
    selectedQuality,
  ]);

  useEffect(() => setFilteredProducts(productsData), [productsData]);
  useEffect(() => applyFilter(), [applyFilter]);

  // ----------------- Click Outside Dropdown -----------------
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowCategoryDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ----------------- Handlers -----------------
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

  const clearFilters = () => {
    setSelectedWeight("");
    setSelectedQuality("");
    setSearchQuery("");
    setActiveCategory(null);
  };

  // ----------------- Render -----------------
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
          <div className="relative flex flex-col sm:flex-row gap-2">
            <input
              type="search"
              placeholder={filterLabels.searchPlaceholder[lang]}
              value={searchQuery}
              onChange={onSearchChange}
              onKeyPress={handleKeyPress}
              onFocus={() => setShowCategoryDropdown(true)}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none"
            />
            <button
              onClick={onSearchSubmit}
              className="px-4 py-3 bg-[#203F84] text-white rounded-lg hover:bg-[#1a3366] transition"
            >
              {filterLabels.searchButton[lang]}
            </button>
          </div>

          {showCategoryDropdown && categories.length > 0 && (
            <div className="absolute left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-2xl z-50 max-h-80 overflow-y-auto">
              <div className="p-3 flex flex-col gap-1">
                {categories.map((cat) => {
                  const isActive = activeCategory === (cat.key || cat.name);
                  return (
                    <button
                      key={cat.id}
                      onClick={() => handleCategoryClick(cat)}
                      className={`w-full px-4 py-2 rounded-lg transition flex items-center gap-3 ${
                        isActive
                          ? "bg-[#203F84] text-white"
                          : "bg-transparent text-gray-700"
                      }`}
                    >
                      {cat.image && (
                        <img
                          src={cat.image}
                          alt={cat.name}
                          className="w-10 h-10 rounded-full object-cover border-2"
                        />
                      )}
                      <span className="flex-1 font-medium">{cat.name}</span>
                      {isActive && <i className="fas fa-check"></i>}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Filters Dropdown Section */}
      <section className="px-4 lg:px-10 py-6">
        <div className="flex flex-wrap gap-4 mb-6">
          {/* Weight Filter */}
          <div>
            <label className="block mb-1 font-semibold text-gray-700">
              {filterLabels.weight[lang]}
            </label>
            <select
              value={selectedWeight}
              onChange={(e) => setSelectedWeight(e.target.value)}
              className="rounded-lg border border-gray-300 px-3 py-2 focus:outline-none"
            >
              <option value="">{filterLabels.all[lang]}</option>
              {availableWeights.map((w) => (
                <option key={w.value} value={w.value}>
                  {w.label[lang]}
                </option>
              ))}
            </select>
          </div>

          {/* Quality Filter */}
          <div>
            <label className="block mb-1 font-semibold text-gray-700">
              {filterLabels.quality[lang]}
            </label>
            <select
              value={selectedQuality}
              onChange={(e) => setSelectedQuality(e.target.value)}
              className="rounded-lg border border-gray-300 px-3 py-2 focus:outline-none"
            >
              <option value="">{filterLabels.all[lang]}</option>
              {availableQualities.map((q) => (
                <option key={q.value} value={q.value}>
                  {q.label[lang]}
                </option>
              ))}
            </select>
          </div>

          {/* Clear Filters */}
          {(selectedWeight ||
            selectedQuality ||
            searchQuery ||
            activeCategory) && (
            <button
              onClick={clearFilters}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition self-end"
            >
              {filterLabels.clearAll[lang]}
            </button>
          )}
        </div>
      </section>

      {/* Products Grid */}
      <section className="px-4 lg:px-10 py-8 md:py-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
          <div className="text-sm text-gray-600">
            <span className="font-semibold">{filteredProducts.length}</span>{" "}
            {filterLabels.productsCountOf[lang]}{" "}
            <span className="font-semibold">{productsData.length}</span>{" "}
            {filterLabels.productsCountProduct[lang]}
          </div>

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
              {filterLabels.noResults[lang]}
            </h3>
            <p className="mt-2 text-sm">
              {filterLabels.noResultsMessage[lang]}
            </p>
          </div>
        )}
      </section>
    </div>
  );
};

export default ColorsPage;
