import { useTranslation } from "react-i18next";

const ImprintPage = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === "rtl";

  return (
    <div dir={isRTL ? "rtl" : "ltr"} className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">
        {t("imprint_title")}
      </h1>

      <div className="bg-white shadow-lg rounded-xl p-8 max-w-3xl mx-auto text-gray-700">
        <p className="mb-4">
          <strong>{t("company_name")}</strong>
        </p>
        <p className="mb-4">
          <strong>{t("address")}:</strong> maarat alnasan, Idlib, Syria
        </p>
        <p className="mb-4">
          <strong>{t("email")}:</strong>{" "}
          <a
            href="mailto:info@bondmaxx.com"
            className="text-blue-600 hover:underline"
          >
            info@bondmaxx.com
          </a>
        </p>
        <p className="mb-4">
          <strong>{t("phone")}:</strong>{" "}
          <a
            href="tel:+90 536 792 65 56"
            className="text-blue-600 hover:underline"
          >
            +90 536 792 65 56
          </a>
        </p>
        <p className="mb-4">
          <strong>{t("website")}:</strong>{" "}
          <a
            href="https://www.bondmaxx.com"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.bondmaxx.com
          </a>
        </p>

        <p className="mt-6 text-sm text-gray-500">
          {t("all_rights_reserved")} © {new Date().getFullYear()} Bondmaxx
        </p>
      </div>
    </div>
  );
};

export default ImprintPage;
