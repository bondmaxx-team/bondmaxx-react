import React, { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useShop } from "../context/ShopContext"; // استيراد الـ context الخاص بك

// ColorCard component
const ColorCard = ({ color }) => {
  const { t, i18n } = useTranslation();
  const { toggleFavorite, isFavorite } = useShop();

  const favorite = isFavorite(color.id);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(color.hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="aspect-square rounded-xl border-2 border-gray-200 cursor-pointer hover:scale-110 hover:shadow-lg hover:border-blue-400 transition-all duration-300 relative overflow-hidden group"
      style={{ backgroundColor: color.hex }}
      onClick={handleCopy}
      title={`${color.name} - ${color.hex} (${t("clickToCopy")})`}
    >
      <button
        type="button"
        className="absolute top-1 right-1 bg-white/90 border-0 rounded-full w-7 h-7 flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm z-10"
        onClick={(e) => {
          e.stopPropagation();
          toggleFavorite({
            ...color,
            type: "color",
          });
        }}
        aria-label={t("clickToCopy")}
      >
        {favorite ? (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#ef4444">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        ) : (
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#6b7280"
            strokeWidth="2"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        )}
      </button>
      {copied && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-white text-xs font-semibold">
          {t("copied")}
        </div>
      )}
    </div>
  );
};

// ColorFamilyCard component
const ColorFamilyCard = ({ family }) => {
  if (!family || !family.colors) return null;

  return (
    <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 p-8 border border-gray-100">
      <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
        {family.name}
      </h3>
      <div className="grid grid-cols-5 gap-3 mb-6">
        {family.colors.map((color) => (
          <ColorCard key={color.id} color={color} />
        ))}
      </div>
    </div>
  );
};

// Pagination component
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-center gap-2 mt-8">
      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="px-4 py-2 rounded-lg bg-white border-2 border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed hover:border-blue-400 transition-all"
      >
        {t("previous")}
      </button>
      <div className="flex gap-2">
        {[...Array(Math.min(5, totalPages))].map((_, i) => {
          let pageNum;
          if (totalPages <= 5) {
            pageNum = i + 1;
          } else if (currentPage <= 3) {
            pageNum = i + 1;
          } else if (currentPage >= totalPages - 2) {
            pageNum = totalPages - 4 + i;
          } else {
            pageNum = currentPage - 2 + i;
          }

          return (
            <button
              key={pageNum}
              onClick={() => onPageChange(pageNum)}
              className={`px-4 py-2 rounded-lg border-2 transition-all ${
                currentPage === pageNum
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white border-gray-200 hover:border-blue-400"
              }`}
            >
              {pageNum}
            </button>
          );
        })}
      </div>
      <button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="px-4 py-2 rounded-lg bg-white border-2 border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed hover:border-blue-400 transition-all"
      >
        {t("next")}
      </button>
    </div>
  );
};

const ColorCollection = () => {
  const { t, i18n } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showAllColors, setShowAllColors] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const isRTL = i18n.language === "ar";

  const hslToHex = (h, s, l) => {
    l /= 100;
    const a = (s * Math.min(l, 1 - l)) / 100;
    const f = (n) => {
      const k = (n + h / 30) % 12;
      const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      return Math.round(255 * color)
        .toString(16)
        .padStart(2, "0");
    };
    return `#${f(0)}${f(8)}${f(4)}`.toUpperCase();
  };

  const colorFamilies = useMemo(() => {
    const families = [];
    const categories = [
      { name: t("blues"), category: "blues", baseHue: 210 },
      { name: t("greens"), category: "greens", baseHue: 120 },
      { name: t("reds"), category: "reds", baseHue: 0 },
      { name: t("oranges"), category: "oranges", baseHue: 30 },
      { name: t("yellows"), category: "yellows", baseHue: 60 },
      { name: t("purples"), category: "purples", baseHue: 280 },
      { name: t("pinks"), category: "pinks", baseHue: 330 },
      { name: t("cyans"), category: "cyans", baseHue: 180 },
      { name: t("magentas"), category: "magentas", baseHue: 300 },
      { name: t("teals"), category: "teals", baseHue: 170 },
      { name: t("browns"), category: "browns", baseHue: 25 },
      { name: t("grays"), category: "grays", baseHue: 0 },
    ];

    const shadeNames = [
      t("veryLight"),
      t("light"),
      t("medium"),
      t("dark"),
      t("veryDark"),
    ];

    categories.forEach((cat) => {
      for (let familyIndex = 0; familyIndex < 6; familyIndex++) {
        const hueVariation = familyIndex * 12;
        const adjustedHue = (cat.baseHue + hueVariation + 360) % 360;

        const colors = [];
        for (let shade = 0; shade < 5; shade++) {
          const lightness = 90 - shade * 17;
          let saturation;

          if (cat.category === "grays") {
            saturation = shade * 2;
          } else {
            saturation = 85 - shade * 10 + familyIndex * 2;
          }

          const hex = hslToHex(adjustedHue, saturation, lightness);

          colors.push({
            id: `${cat.category}-${familyIndex}-${shade}`,
            hex: hex,
            name: shadeNames[shade],
          });
        }

        families.push({
          id: `${cat.category}-family-${familyIndex}`,
          category: cat.category,
          name: `${cat.name} ${familyIndex + 1}`,
          colors: colors,
        });
      }
    });

    return families;
  }, [t]);

  const filteredFamilies = useMemo(() => {
    return colorFamilies.filter((family) => {
      const matchesCategory =
        selectedCategory === "all" || family.category === selectedCategory;
      const matchesSearch =
        searchTerm === "" ||
        family.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        family.colors.some(
          (color) =>
            color.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            color.hex.toLowerCase().includes(searchTerm.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [colorFamilies, selectedCategory, searchTerm]);

  const totalPages = Math.ceil(filteredFamilies.length / itemsPerPage);
  const paginatedFamilies = filteredFamilies.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const categoryGroups = useMemo(() => {
    const categories = {
      blues: { name: t("blues"), families: [] },
      greens: { name: t("greens"), families: [] },
      reds: { name: t("reds"), families: [] },
      oranges: { name: t("oranges"), families: [] },
      yellows: { name: t("yellows"), families: [] },
      purples: { name: t("purples"), families: [] },
      pinks: { name: t("pinks"), families: [] },
      cyans: { name: t("cyans"), families: [] },
      magentas: { name: t("magentas"), families: [] },
      teals: { name: t("teals"), families: [] },
      browns: { name: t("browns"), families: [] },
      grays: { name: t("grays"), families: [] },
    };

    colorFamilies.forEach((family) => {
      if (categories[family.category]) {
        categories[family.category].families.push(family);
      }
    });

    return Object.entries(categories)
      .map(([key, value]) => ({
        category: key,
        name: value.name,
        family: value.families[0],
      }))
      .filter((item) => item.family);
  }, [colorFamilies, t]);

  if (showAllColors) {
    return (
      <div
        className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50"
        dir={isRTL ? "rtl" : "ltr"}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 mt-12 sm:mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 mb-8 border border-gray-100">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex gap-5">
                <button
                  onClick={() => {
                    setShowAllColors(false);
                    setCurrentPage(1);
                  }}
                  className="flex items-center gap-2 text-gray-700 transition-all duration-300 px-4 py-2.5 rounded-xl hover:text-blue-500 border-0 cursor-pointer text-sm sm:text-base font-medium bg-transparent"
                >
                  <span>{t("backToHome")}</span>
                  <i className="fas fa-arrow-right text-sm"></i>
                </button>

                <div className="flex-1 relative">
                  <input
                    type="text"
                    className="w-full py-3 sm:py-4 px-4 sm:px-5 pr-10 sm:pr-12 border-2 border-gray-200 rounded-xl text-sm sm:text-base transition-all duration-300 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                    placeholder={t("searchPlaceholder")}
                    value={searchTerm}
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                      setCurrentPage(1);
                    }}
                  />
                  <i className="fas fa-search absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm sm:text-base"></i>
                </div>
              </div>

              <select
                className="w-full lg:w-64 py-3 sm:py-4 px-4 sm:px-5 border-2 border-gray-200 rounded-xl text-sm sm:text-base bg-white transition-all duration-300 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 cursor-pointer"
                value={selectedCategory}
                onChange={(e) => {
                  setSelectedCategory(e.target.value);
                  setCurrentPage(1);
                }}
              >
                <option value="all">{t("allCategories")}</option>
                <option value="blues">{t("blues")}</option>
                <option value="greens">{t("greens")}</option>
                <option value="reds">{t("reds")}</option>
                <option value="oranges">{t("oranges")}</option>
                <option value="yellows">{t("yellows")}</option>
                <option value="purples">{t("purples")}</option>
                <option value="pinks">{t("pinks")}</option>
                <option value="cyans">{t("cyans")}</option>
                <option value="magentas">{t("magentas")}</option>
                <option value="teals">{t("teals")}</option>
                <option value="browns">{t("browns")}</option>
                <option value="grays">{t("grays")}</option>
              </select>
            </div>

            <div className="mt-4 sm:mt-5 flex items-center justify-between gap-4 text-xs sm:text-sm text-gray-600 font-medium">
              <div className="flex items-center gap-2 bg-blue-50 px-3 sm:px-4 py-2 rounded-lg">
                <i className="fas fa-layer-group text-blue-600"></i>
                <span>
                  {filteredFamilies.length} {t("familyCount")}
                </span>
              </div>
              <div className="flex items-center gap-2 bg-purple-50 px-3 sm:px-4 py-2 rounded-lg">
                <i className="fas fa-droplet text-purple-600"></i>
                <span>
                  {filteredFamilies.length * 5} {t("colorCount")}
                </span>
              </div>
              <div className="flex items-center gap-2 bg-green-50 px-3 sm:px-4 py-2 rounded-lg">
                <i className="fas fa-palette text-green-600"></i>
                <span>
                  {t("pageOf", { current: currentPage, total: totalPages })}
                </span>
              </div>
            </div>
          </div>

          {filteredFamilies.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {paginatedFamilies.map((family) => (
                  <ColorFamilyCard key={family.id} family={family} />
                ))}
              </div>
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </>
          ) : (
            <div className="text-center py-12 sm:py-20 bg-white rounded-2xl shadow-lg border border-gray-100">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <i className="fas fa-palette text-3xl sm:text-5xl text-gray-400"></i>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3 px-4">
                {t("noColorsFound")}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 px-4">
                {t("tryModifyingSearch")}
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <section
      className="py-24 bg-gradient-to-br from-gray-50 to-white mt-[70px]"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-6 leading-[1.15]">
            <span className="inline-block pb-[0.15em] bg-gradient-to-r text-blue-600">
              {t("title")}
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t("descriptionn")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {categoryGroups.map((group) => (
            <ColorFamilyCard key={group.category} family={group.family} />
          ))}
        </div>

        <div className="text-center mt-16" style={{ marginTop: "60px" }}>
          <button
            onClick={() => setShowAllColors(true)}
            className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold border-0 cursor-pointer"
          >
            <span>{t("exploreAllColors")}</span>
            <i className="fas fa-palette"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ColorCollection;
