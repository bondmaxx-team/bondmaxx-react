import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useShop } from "../context/ShopContext";

const ColorSwatch = ({ color }) => {
  const { t } = useTranslation();
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
      className="aspect-square rounded-xl border-2 border-gray-200 cursor-pointer hover:scale-110 hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
      style={{ backgroundColor: color.hex }}
      onClick={handleCopy}
      title={`${color.name} - ${color.hex} (${t("clickToCopy")})`}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "#203F84";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "#e5e7eb";
      }}
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
        <div
          className="absolute inset-0 flex items-center justify-center text-white text-xs font-semibold"
          style={{ backgroundColor: "rgba(32, 63, 132, 0.9)" }}
        >
          {t("copied")}
        </div>
      )}
    </div>
  );
};

export default ColorSwatch;
