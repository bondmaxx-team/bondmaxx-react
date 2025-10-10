import React from "react";
import { useTranslation } from "react-i18next";
import ColorSwatch from "./ColorSwatch";

const ColorFamilyCard = ({ family }) => {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  if (!family || !family.colors) return null;

  // Get translated family name
  const familyName =
    typeof family.name === "object"
      ? family.name?.[lang] ||
        family.name?.ar ||
        family.name?.en ||
        family.name?.tr ||
        family.name?.de ||
        ""
      : family.name || "";

  // Count colors and get color count badge
  const colorCount = family.colors?.length || 0;

  return (
    <div
      className="bg-white rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 p-6 border-2 border-gray-100 relative overflow-hidden"
      style={{
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.07)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "#203F84";
        e.currentTarget.style.boxShadow = "0 12px 24px rgba(32, 63, 132, 0.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "#e5e7eb";
        e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.07)";
      }}
    >
      {/* Color count badge */}
      <div className="absolute top-4 right-4 flex items-center gap-2 bg-gradient-to-r from-blue-50 to-blue-100 px-3 py-1.5 rounded-full">
        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
        <span className="text-xs font-semibold text-blue-700">
          {colorCount}{" "}
          {lang === "ar"
            ? "لون"
            : lang === "tr"
            ? "Renk"
            : lang === "de"
            ? "Farben"
            : "Colors"}
        </span>
      </div>

      {/* Family name */}
      <h3 className="text-lg font-bold text-gray-900 mb-5 text-center pr-20">
        {familyName}
      </h3>

      {/* Color swatches */}
      <div className="grid grid-cols-5 gap-3">
        {family.colors.map((color) => (
          <ColorSwatch key={color.id} color={color} />
        ))}
      </div>
    </div>
  );
};

export default ColorFamilyCard;
