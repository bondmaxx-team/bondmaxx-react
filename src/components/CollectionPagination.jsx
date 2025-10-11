import React from "react";
import { useTranslation } from "react-i18next";

const CollectionPagination = ({ currentPage, totalPages, onPageChange }) => {
  const { t } = useTranslation();
  return (
    <div className="flex items-center justify-center gap-2 mt-8">
      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="px-4 py-2 rounded-lg bg-white border-2 border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed hover:border-[var(--header-border)] transition-all"
      >
        {t("previous")}
      </button>
      <div className="hidden md:flex gap-2">
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
                  ? "bg-[var(--header-primary)] text-white border-[var(--header-primary)]"
                  : "bg-white border-gray-200 hover:border--[var(--header-border)]"
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
        className="px-4 py-2 rounded-lg bg-white border-2 border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed hover:border-[var(--header-border)] transition-all"
      >
        {t("next")}
      </button>
    </div>
  );
};

export default CollectionPagination;
