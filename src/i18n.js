import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(HttpBackend) // load translations using http
  .use(LanguageDetector) // detect user language
  .use(initReactI18next) // pass the instance to react-i18next
  .init({
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json", // path to translation files
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
