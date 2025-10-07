import { useTranslation } from "react-i18next";

const PrivacyPolicyPage = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === "rtl";

  return (
    <div dir={isRTL ? "rtl" : "ltr"} className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">
        {t("privacy_policy_title")}
      </h1>

      <div className="bg-white shadow-lg rounded-xl p-8 max-w-3xl mx-auto text-gray-700 space-y-4">
        <p>{t("privacy_policy_text")}</p>
        <p>
          {t("contact_us")}:{" "}
          <a
            href="mailto:info@bondmaxx.com"
            className="text-blue-600 hover:underline"
          >
            info@bondmaxx.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
