import React, { useState } from "react";
import { useShop } from "../context/ShopContext";
import { useTranslation } from "react-i18next";

const ColorCollection = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === "rtl";
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showAllColors, setShowAllColors] = useState(false);

  // Color families with translations
  const colorFamilies = [
    {
      id: "royal-blue",
      category: "blues",
      name: t("royal_blue"),
      colors: [
        { id: "blue-1", hex: "#E8F2FF", name: t("very_light") },
        { id: "blue-2", hex: "#B8D9FF", name: t("light") },
        { id: "blue-3", hex: "#7FB8FF", name: t("medium") },
        { id: "blue-4", hex: "#2450A5", name: t("dark") },
        { id: "blue-5", hex: "#1A3D7A", name: t("very_dark") },
      ],
    },
    {
      id: "golden-orange",
      category: "oranges",
      name: t("golden_orange"),
      colors: [
        { id: "orange-1", hex: "#FFF4E6", name: t("very_light") },
        { id: "orange-2", hex: "#FFE4B3", name: t("light") },
        { id: "orange-3", hex: "#FFD080", name: t("medium") },
        { id: "orange-4", hex: "#F39200", name: t("dark") },
        { id: "orange-5", hex: "#E6732A", name: t("very_dark") },
      ],
    },
    {
      id: "royal-red",
      category: "reds",
      name: t("royal_red"),
      colors: [
        { id: "red-1", hex: "#FFE6E6", name: t("very_light") },
        { id: "red-2", hex: "#FFB3B3", name: t("light") },
        { id: "red-3", hex: "#FF8080", name: t("medium") },
        { id: "red-4", hex: "#E00025", name: t("dark") },
        { id: "red-5", hex: "#B8001D", name: t("very_dark") },
      ],
    },
    {
      id: "sunny-yellow",
      category: "yellows",
      name: t("sunny_yellow"),
      colors: [
        { id: "yellow-1", hex: "#FFFACD", name: t("very_light") },
        { id: "yellow-2", hex: "#FFF68F", name: t("light") },
        { id: "yellow-3", hex: "#FFE135", name: t("medium") },
        { id: "yellow-4", hex: "#FEE880", name: t("dark") },
        { id: "yellow-5", hex: "#DAA520", name: t("very_dark") },
      ],
    },
    {
      id: "crystal-cyan",
      category: "blues",
      name: t("crystal_cyan"),
      colors: [
        { id: "cyan-1", hex: "#E6F9FF", name: t("very_light") },
        { id: "cyan-2", hex: "#B3F0FF", name: t("light") },
        { id: "cyan-3", hex: "#80E7FF", name: t("medium") },
        { id: "cyan-4", hex: "#00AEEF", name: t("dark") },
        { id: "cyan-5", hex: "#0088CC", name: t("very_dark") },
      ],
    },
    {
      id: "natural-green",
      category: "greens",
      name: t("natural_green"),
      colors: [
        { id: "green-1", hex: "#F0F8E8", name: t("very_light") },
        { id: "green-2", hex: "#C8E6C9", name: t("light") },
        { id: "green-3", hex: "#A5D6A7", name: t("medium") },
        { id: "green-4", hex: "#66BB6A", name: t("dark") },
        { id: "green-5", hex: "#388E3C", name: t("very_dark") },
      ],
    },
  ];

  const filteredFamilies = colorFamilies.filter((family) => {
    const matchesCategory =
      selectedCategory === "all" || family.category === selectedCategory;
    const matchesSearch =
      searchTerm === "" ||
      family.name.includes(searchTerm) ||
      family.colors.some(
        (color) =>
          color.name.includes(searchTerm) ||
          color.hex.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  const ColorCard = ({ color, item }) => {
    const { toggleFavorite, addToCart, isFavorite } = useShop();
    const favorite = isFavorite(item.id);

    return (
      <div
        className="aspect-square rounded-xl border-2 border-gray-200 cursor-pointer hover:scale-110 hover:shadow-lg hover:border-blue-400 transition-all duration-300 relative overflow-hidden group"
        style={{ backgroundColor: color.hex }}
        title={`${color.name} - ${color.hex}`}
      >
        <button
          type="button"
          className={`absolute top-1 ${
            isRTL ? "right-1" : "left-1"
          } bg-white/90 border-0 rounded-full w-7 h-7 flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm`}
          onClick={() => toggleFavorite(item)}
        >
          <i
            className={favorite ? "fas fa-heart text-red-500" : "far fa-heart"}
          ></i>
        </button>
      </div>
    );
  };

  const ColorFamilyCard = ({ family }) => (
    <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 p-8 border border-gray-100">
      <h3
        className={`text-xl font-semibold text-gray-900 mb-6 text-center ${
          isRTL ? "font-arabic" : ""
        }`}
      >
        {family.name}
      </h3>
      <div className="grid grid-cols-5 gap-3 mb-6">
        {family.colors.map((color) => (
          <ColorCard item={color} key={color.id} color={color} />
        ))}
      </div>
    </div>
  );

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
                <div>
                  <button
                    onClick={() => setShowAllColors(false)}
                    className={`flex items-center gap-2 text-gray-700 transition-all duration-300 px-4 py-2.5 rounded-xl hover:text-blue-500 border-0 cursor-pointer text-sm sm:text-base font-medium ${
                      isRTL ? "hover:-translate-x-1" : "hover:translate-x-1"
                    }`}
                  >
                    <i
                      className={`fas ${
                        isRTL ? "fa-arrow-left" : "fa-arrow-right"
                      } text-sm`}
                    ></i>
                    <span>{t("back_to_home")}</span>
                  </button>
                </div>
                <div className="flex-1 relative">
                  <input
                    type="text"
                    className={`w-full py-3 sm:py-4 px-4 sm:px-5 ${
                      isRTL ? "pr-10 sm:pr-12" : "pl-10 sm:pl-12"
                    } border-2 border-gray-200 rounded-xl text-sm sm:text-base ${
                      isRTL ? "text-right" : "text-left"
                    } transition-all duration-300 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100`}
                    placeholder={t("search_placeholder")}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <i
                    className={`fas fa-search absolute ${
                      isRTL ? "right-3 sm:right-4" : "left-3 sm:left-4"
                    } top-1/2 transform -translate-y-1/2 text-gray-400 text-sm sm:text-base`}
                  ></i>
                </div>
              </div>

              <select
                className={`w-full lg:w-64 py-3 sm:py-4 px-4 sm:px-5 border-2 border-gray-200 rounded-xl text-sm sm:text-base ${
                  isRTL ? "text-right" : "text-left"
                } bg-white transition-all duration-300 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 cursor-pointer`}
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="all">{t("all_color_categories")}</option>
                <option value="blues">{t("blues_category")}</option>
                <option value="reds">{t("reds_category")}</option>
                <option value="greens">{t("greens_category")}</option>
                <option value="yellows">{t("yellows_category")}</option>
                <option value="purples">{t("purples_category")}</option>
                <option value="oranges">{t("oranges_category")}</option>
              </select>
            </div>

            <div
              className={`mt-4 sm:mt-5 flex items-center ${
                isRTL
                  ? "justify-between sm:justify-end"
                  : "justify-between sm:justify-start"
              } gap-4 text-xs sm:text-sm text-gray-600 font-medium`}
            >
              <div className="flex items-center gap-2 bg-blue-50 px-3 sm:px-4 py-2 rounded-lg">
                <i className="fas fa-layer-group text-blue-600"></i>
                <span>
                  {filteredFamilies.length} {t("family_count")}
                </span>
              </div>
              <div className="flex items-center gap-2 bg-purple-50 px-3 sm:px-4 py-2 rounded-lg">
                <i className="fas fa-droplet text-purple-600"></i>
                <span>
                  {filteredFamilies.length * 5} {t("color_count")}
                </span>
              </div>
            </div>
          </div>

          {filteredFamilies.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 pb-10 sm:pb-20">
              {filteredFamilies.map((family) => (
                <ColorFamilyCard key={family.id} family={family} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 sm:py-20 bg-white rounded-2xl shadow-lg border border-gray-100">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <i className="fas fa-palette text-3xl sm:text-5xl text-gray-400"></i>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3 px-4">
                {t("no_results_title")}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 px-4">
                {t("no_results_message")}
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
            <span className="inline-block pb-[0.15em] bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
              {t("collection_title")}
            </span>
          </h2>

          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t("collection_description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {colorFamilies.map((family) => (
            <ColorFamilyCard key={family.id} family={family} />
          ))}
        </div>

        <div className="text-center mt-16" style={{ marginTop: "60px" }}>
          <button
            onClick={() => setShowAllColors(true)}
            className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold border-0 cursor-pointer"
          >
            <i className={`fas fa-palette ${isRTL ? "ml-2" : "mr-2"}`}></i>
            {t("explore_all_colors")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ColorCollection;
