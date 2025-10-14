import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NavigationBreadcrumb = ({ currentLang = "ar" }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const isRTL = currentLang === "ar" || currentLang === "tr";

  const allPages = {
    products: {
      label: {
        ar: "المنتجات",
        en: "Products",
        tr: "Ürünler",
        de: "Produkte",
      },
      items: [
        {
          path: "/OilPaintsPage",
          label: {
            ar: "الدهانات الزيتية",
            en: "Oil Paints",
            tr: "Yağlı Boyalar",
            de: "Ölfarben",
          },
        },
        {
          path: "/WaterPaintsPage",
          label: {
            ar: "الدهانات المائية",
            en: "Water Paints",
            tr: "Su Bazlı Boyalar",
            de: "Wasserfarben",
          },
        },
        {
          path: "/PrimerPaintsPage",
          label: {
            ar: "دهانات الأساس",
            en: "Primer Paints",
            tr: "Astar Boyalar",
            de: "Grundierungen",
          },
        },
        {
          path: "/InsulationPage",
          label: {
            ar: "العوازل",
            en: "Insulation",
            tr: "Yalıtım",
            de: "Isolierung",
          },
        },
        {
          path: "/EpoxyPage",
          label: {
            ar: "إيبوكسي",
            en: "Epoxy",
            tr: "Epoksi",
            de: "Epoxid",
          },
        },
        {
          path: "/PuttyPage",
          label: {
            ar: "المعجون",
            en: "Putty",
            tr: "Macun",
            de: "Spachtelmasse",
          },
        },
      ],
    },
    others: {
      items: [
        {
          path: "/AccessoriesPage",
          label: {
            ar: "الملحقات",
            en: "Accessories",
            tr: "Aksesuarlar",
            de: "Zubehör",
          },
        },
        {
          path: "/color-collection",
          label: {
            ar: "مجموعة الألوان",
            en: "Color Collection",
            tr: "Renk Koleksiyonu",
            de: "Farbkollektion",
          },
        },
        {
          path: "/search-dealer",
          label: {
            ar: "البحث عن تاجر",
            en: "Search Dealer",
            tr: "Bayi Arama",
            de: "Händler suchen",
          },
        },
        {
          path: "/about",
          label: {
            ar: "معلومات عنا",
            en: "About",
            tr: "Hakkımızda",
            de: "Über uns",
          },
        },
        {
          path: "/contact",
          label: {
            ar: "اتصل بنا",
            en: "Contact",
            tr: "İletişim",
            de: "Kontakt",
          },
        },
        {
          path: "/interior-colors",
          label: {
            ar: "ألوان داخلية",
            en: "Interior Colors",
            tr: "İç Mekan Renkleri",
            de: "Innenfarben",
          },
        },
        {
          path: "/exterior-colors",
          label: {
            ar: "ألوان خارجية",
            en: "Exterior Colors",
            tr: "Dış Mekan Renkleri",
            de: "Außenfarben",
          },
        },
      ],
    },
  };

  let mainLabel = null;
  let subLabel = null;

  // البحث في المنتجات
  allPages.products.items.forEach((item) => {
    if (item.path === location.pathname) {
      mainLabel =
        allPages.products.label[currentLang] || allPages.products.label.en;
      subLabel = item.label[currentLang] || item.label.en;
    }
  });

  // البحث في الصفحات الأخرى
  if (!mainLabel) {
    allPages.others.items.forEach((item) => {
      if (item.path === location.pathname) {
        subLabel = item.label[currentLang] || item.label.en;
      }
    });
  }

  // إخفاء في الصفحة الرئيسية
  if (!mainLabel && !subLabel) return null;

  // ترجمة "الرئيسية"
  const homeLabel = {
    ar: "الرئيسية",
    en: "Home",
    tr: "Ana Sayfa",
    de: "Startseite",
  };

  return (
    <div className="w-full bg-gradient-to-r from-blue-50 to-sky-50 border-t border-b border-gray-200">
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4"
        style={{
          direction: isRTL ? "rtl" : "ltr",
        }}
      >
        <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm flex-wrap">
          <span
            className="cursor-pointer text-[#203F84] hover:text-[#1a3270] transition-colors duration-200 hover:underline whitespace-nowrap"
            onClick={() => navigate("/")}
          >
            {homeLabel[currentLang] || homeLabel.en}
          </span>

          {mainLabel && (
            <>
              <span className="text-gray-400 select-none">›</span>
              <span className="text-gray-700 whitespace-nowrap">
                {mainLabel}
              </span>
            </>
          )}

          {subLabel && (
            <>
              <span className="text-gray-400 select-none">›</span>
              <span className=" border-[#203F84] text-[#203F84] px-2 py-1 font-semibold">
                {subLabel}
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavigationBreadcrumb;
