import React from "react";
import { useTranslation } from "react-i18next";

const CollectionPagination = ({ currentPage, totalPages, onPageChange }) => {
  const { t } = useTranslation();

  // ✅ التحقق من صحة القيم
  const validTotalPages = totalPages && totalPages > 0 ? totalPages : 1;
  const validCurrentPage = currentPage && currentPage > 0 ? currentPage : 1;

  // إذا كان هناك صفحة واحدة فقط، لا نعرض الـ pagination
  if (validTotalPages <= 1) {
    return null;
  }

  return (
    <div className="flex items-center justify-center gap-3 mt-10 mb-6">
      {/* Previous button */}
      <button
        onClick={() => onPageChange(Math.max(1, validCurrentPage - 1))}
        disabled={validCurrentPage === 1}
        className="px-6 py-3 rounded-xl font-semibold transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
        style={{
          backgroundColor: validCurrentPage === 1 ? "#f3f4f6" : "#ffffff",
          color: validCurrentPage === 1 ? "#9ca3af" : "#374151",
          border: "2px solid #e5e7eb",
        }}
        onMouseEnter={(e) => {
          if (validCurrentPage !== 1) {
            e.currentTarget.style.borderColor = "#203F84";
            e.currentTarget.style.backgroundColor = "#E8EEF7";
            e.currentTarget.style.color = "#203F84";
          }
        }}
        onMouseLeave={(e) => {
          if (validCurrentPage !== 1) {
            e.currentTarget.style.borderColor = "#e5e7eb";
            e.currentTarget.style.backgroundColor = "#ffffff";
            e.currentTarget.style.color = "#374151";
          }
        }}
      >
        {t("previous") || "السابق"}
      </button>

      {/* Page numbers */}
      <div className="flex gap-2">
        {[...Array(Math.min(5, validTotalPages))].map((_, i) => {
          let pageNum;
          if (validTotalPages <= 5) {
            pageNum = i + 1;
          } else if (validCurrentPage <= 3) {
            pageNum = i + 1;
          } else if (validCurrentPage >= validTotalPages - 2) {
            pageNum = validTotalPages - 4 + i;
          } else {
            pageNum = validCurrentPage - 2 + i;
          }

          const isActive = validCurrentPage === pageNum;

          return (
            <button
              key={pageNum}
              onClick={() => onPageChange(pageNum)}
              className={`w-11 h-11 rounded-xl font-bold transition-all duration-300 ${
                isActive
                  ? "pagination-button-active"
                  : "pagination-button-inactive"
              }`}
              style={{
                boxShadow: isActive
                  ? "0 4px 8px rgba(32, 63, 132, 0.3)"
                  : "0 2px 4px rgba(0, 0, 0, 0.05)",
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.borderColor = "#203F84";
                  e.currentTarget.style.backgroundColor = "#E8EEF7";
                  e.currentTarget.style.color = "#203F84";
                  e.currentTarget.style.transform = "scale(1.1)";
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.borderColor = "#e5e7eb";
                  e.currentTarget.style.backgroundColor = "#ffffff";
                  e.currentTarget.style.color = "#374151";
                  e.currentTarget.style.transform = "scale(1)";
                }
              }}
            >
              {pageNum}
            </button>
          );
        })}
      </div>

      {/* Next button */}
      <button
        onClick={() =>
          onPageChange(Math.min(validTotalPages, validCurrentPage + 1))
        }
        disabled={validCurrentPage === validTotalPages}
        className="px-6 py-3 rounded-xl font-semibold transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
        style={{
          backgroundColor:
            validCurrentPage === validTotalPages ? "#f3f4f6" : "#ffffff",
          color: validCurrentPage === validTotalPages ? "#9ca3af" : "#374151",
          border: "2px solid #e5e7eb",
        }}
        onMouseEnter={(e) => {
          if (validCurrentPage !== validTotalPages) {
            e.currentTarget.style.borderColor = "#203F84";
            e.currentTarget.style.backgroundColor = "#E8EEF7";
            e.currentTarget.style.color = "#203F84";
          }
        }}
        onMouseLeave={(e) => {
          if (validCurrentPage !== validTotalPages) {
            e.currentTarget.style.borderColor = "#e5e7eb";
            e.currentTarget.style.backgroundColor = "#ffffff";
            e.currentTarget.style.color = "#374151";
          }
        }}
      >
        {t("next") || "التالي"}
      </button>
    </div>
  );
};

export default CollectionPagination;
