import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";

await i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    lng: "ar", // اللغة الافتراضية دائماً
    fallbackLng: "ar",
    supportedLngs: ["en", "ar", "tr", "de"],
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
