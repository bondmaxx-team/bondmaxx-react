import React from "react";
import { useTranslation } from "react-i18next";

const ColorCollectionFilter = ({
  searchTerm,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  onBack,
  isRTL,
  categoryOptions, // [{value, label}]
}) => {
  const { t } = useTranslation();

  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 mb-8 border border-gray-100">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex gap-5">
          <button
            onClick={onBack}
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
              onChange={(e) => onSearchChange(e.target.value)}
            />
            <i
              className={`fas fa-search absolute ${
                isRTL ? "left-3 sm:left-4" : "right-3 sm:right-4"
              } top-1/2 transform -translate-y-1/2 text-gray-400 text-sm sm:text-base`}
            ></i>
          </div>
        </div>

        <select
          className="w-full lg:w-64 py-3 sm:py-4 px-4 sm:px-5 border-2 border-gray-200 rounded-xl text-sm sm:text-base bg-white transition-all duration-300 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 cursor-pointer"
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
        >
          <option value="all">{t("allCategories")}</option>
          {categoryOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ColorCollectionFilter;
