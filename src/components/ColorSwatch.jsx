import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const ColorSwatch = ({ color }) => {
  const { t } = useTranslation();
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
