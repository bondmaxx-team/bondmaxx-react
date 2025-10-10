import { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import ColorFamilyCard from "@/components/ColorFamilyCard";
import CollectionPagination from "@/components/CollectionPagination";
import ColorCollectionFilter from "@/components/ColorCollectionFilter";
import colorCollectionCategories from "@/data/colorCollectionCategories";
import colorCollectionShades from "@/data/colorCollectionShades";
import {
  generateColorFamilies,
  groupFamiliesByCategory,
} from "@/lib/colorCollection";

const ColorCollection = () => {
  const { t, i18n } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showAllColors, setShowAllColors] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const isRTL = i18n.dir() === "rtl";

  const colorFamilies = useMemo(
    () =>
      generateColorFamilies(
        colorCollectionCategories,
        colorCollectionShades,
        t
      ),
    [t]
  );

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

  const categoryOptions = useMemo(
    () =>
      colorCollectionCategories.map((c) => ({
        value: c.category,
        label: t(c.key),
      })),
    [t]
  );

  const categoryGroups = useMemo(
    () => groupFamiliesByCategory(colorFamilies, t),
    [colorFamilies, t]
  );

  if (showAllColors) {
    return (
      <div
        className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50"
        dir={isRTL ? "rtl" : "ltr"}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 mt-12 sm:mt-16">
          <ColorCollectionFilter
            searchTerm={searchTerm}
            onSearchChange={(v) => {
              setSearchTerm(v);
              setCurrentPage(1);
            }}
            selectedCategory={selectedCategory}
            onCategoryChange={(v) => {
              setSelectedCategory(v);
              setCurrentPage(1);
            }}
            onBack={() => {
              setShowAllColors(false);
              setCurrentPage(1);
            }}
            isRTL={isRTL}
            categoryOptions={categoryOptions}
          />

          <div className="mt-4 sm:mt-5 flex items-center justify-between gap-4 text-xs sm:text-sm text-gray-600 font-medium">
            <div
              className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg"
              style={{ backgroundColor: "#E8EEF7" }}
            >
              <i
                className="fas fa-layer-group"
                style={{ color: "#203F84" }}
              ></i>
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

          {filteredFamilies.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {paginatedFamilies.map((family) => (
                  <ColorFamilyCard key={family.id} family={family} />
                ))}
              </div>
              <CollectionPagination
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
            <span
              className="inline-block pb-[0.15em] bg-gradient-to-r from-[#203F84] via-[#2d5bb8] to-[#203F84] bg-clip-text text-transparent animate-gradient-x bg-[length:200%_auto] transition-all duration-300 hover:scale-105"
              style={{
                animation: "gradient 3s ease infinite",
              }}
            >
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
            className="group relative inline-flex items-center gap-3 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-500 font-semibold border-0 cursor-pointer overflow-hidden"
            style={{ backgroundColor: "#203F84" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#1a3366";
              e.currentTarget.style.transform = "scale(1.1) translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#203F84";
              e.currentTarget.style.transform = "scale(1) translateY(0)";
            }}
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500 group-hover:animate-shimmer"></span>
            <span className="relative z-10 transition-transform duration-300 group-hover:scale-110">
              {t("exploreAllColors")}
            </span>
            <i className="fas fa-palette relative z-10 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-125"></i>
          </button>
        </div>

        <style>{`
          @keyframes gradient {
            0%, 100% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
          }
          
          @keyframes shimmer {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(100%);
            }
          }
          
          .animate-shimmer {
            animation: shimmer 2s infinite;
          }
        `}</style>
      </div>
    </section>
  );
};

export default ColorCollection;
