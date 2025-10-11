import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import embedded translation resources for static builds
import ar from "./locales/ar/translation.json";
import en from "./locales/en/translation.json";
import tr from "./locales/tr/translation.json";
import de from "./locales/de/translation.json";

const storedLanguage =
  typeof window !== "undefined" && localStorage.getItem("lang");
await i18n.use(initReactI18next).init({
  lng: storedLanguage || "ar", // default language
  fallbackLng: "ar",
  supportedLngs: ["en", "ar", "tr", "de"],
  debug: false,
  resources: {
    ar: { translation: ar },
    en: { translation: en },
    tr: { translation: tr },
    de: { translation: de },
  },
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;
