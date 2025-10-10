import { useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import useWhatsApp from "@/hooks/useWhatsApp";

export default function PaintingServices() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === "rtl";
  const { sendForm } = useWhatsApp();

  const [formData, setFormData] = useState({
    location: t("syria"),
    city: t("choose"),
    fullName: "",
    email: "",
    phoneCode: "+963",
    phone: "",
    paintType: t("choose"),
    serviceType: t("choose"),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.city || formData.city === t("choose")) {
      toast.error(t("alert_choose_city"));
      return;
    }
    if (!formData.fullName) {
      toast.error(t("alert_enter_name"));
      return;
    }
    if (!formData.email) {
      toast.error(t("alert_enter_email"));
      return;
    }
    if (!formData.phone) {
      toast.error(t("alert_enter_phone"));
      return;
    }
    if (!formData.paintType || formData.paintType === t("choose")) {
      toast.error(t("alert_choose_paint_type"));
      return;
    }
    if (!formData.serviceType || formData.serviceType === t("choose")) {
      toast.error(t("alert_choose_service_type"));
      return;
    }

    console.log("Form submitted:", formData);
    const sent = sendForm(formData, {
      title: "Painting Services Request",
      labels: {
        location: t("location") || "Location",
        city: t("city") || "City",
        fullName: t("full_name") || "Full Name",
        email: "Email",
        phoneCode: t("phone_code") || "Code",
        phone: t("phone") || "Phone",
        paintType: t("paint_type") || "Paint Type",
        serviceType: t("service_type") || "Service Type",
      },
      order: [
        "location",
        "city",
        "fullName",
        "email",
        "phoneCode",
        "phone",
        "paintType",
        "serviceType",
      ],
    });
    if (sent) {
      toast.success(t("success_message"));
    }
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-[#203F84]/10 via-[#203F84]/20 to-[#203F84]/10 py-20 px-4"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header Card */}
        <div className="p-8 md:p-12 mb-8">
          <div className="text-center">
            <div className="inline-block p-3 bg-[#203F84]/10 rounded-full mb-4">
              <svg
                className="w-12 h-12 text-[#203F84]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              {t("services_page_title")}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t("services_page_subtitle")}
            </p>
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          <div className="space-y-7">
            {/* Location Selection */}
            <div>
              <label
                className={`flex items-center text-gray-800 font-bold mb-3 text-base ${
                  isRTL ? "" : "flex-row-reverse justify-end"
                }`}
              >
                <svg
                  className={`w-5 h-5 ${
                    isRTL ? "ml-2" : "mr-2"
                  } text-[#203F84]`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                {t("choose_location")}
              </label>
              <select
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#203F84] focus:border-[#203F84] outline-none transition-all text-base bg-gray-50 hover:bg-white hover:border-[#203F84]/50 font-semibold"
              >
                <option value={t("syria")}>{t("syria")}</option>
              </select>
            </div>

            <p className="text-center text-base font-medium">
              {t("fill_form_or_contact")}{" "}
              <a
                href="https://wa.me/905550004000"
                className="font-bold underline text-[#203F84] hover:text-[#203F84]/70 transition-colors"
              >
                {t("or_contact_us")}
              </a>
            </p>

            {/* City and Full Name Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  className={`flex items-center text-gray-800 font-bold mb-3 text-base ${
                    isRTL ? "" : "flex-row-reverse justify-end"
                  }`}
                >
                  <span className={`text-red-500 ${isRTL ? "ml-1" : "mr-1"}`}>
                    *
                  </span>
                  {t("city")}
                </label>
                <select
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#203F84] focus:border-[#203F84] outline-none transition-all text-base bg-gray-50 hover:bg-white hover:border-[#203F84]/50"
                >
                  <option value={t("choose")}>{t("choose_city")}</option>
                  <option value={t("idlib")}>{t("idlib")}</option>
                  <option value={t("aleppo")}>{t("aleppo")}</option>
                  <option value={t("damascus")}>{t("damascus")}</option>
                  <option value={t("homs")}>{t("homs")}</option>
                  <option value={t("hama")}>{t("hama")}</option>
                  <option value={t("latakia")}>{t("latakia")}</option>
                  <option value={t("tartus")}>{t("tartus")}</option>
                </select>
              </div>

              <div>
                <label
                  className={`flex items-center text-gray-800 font-bold mb-3 text-base ${
                    isRTL ? "" : "flex-row-reverse justify-end"
                  }`}
                >
                  <span className={`text-red-500 ${isRTL ? "ml-1" : "mr-1"}`}>
                    *
                  </span>
                  {t("full_name")}
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder={t("enter_full_name")}
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#203F84] focus:border-[#203F84] outline-none transition-all text-base bg-gray-50 hover:bg-white hover:border-[#203F84]/50"
                />
              </div>
            </div>

            {/* Email, Phone Number, and Code */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
              <div className="lg:col-span-6">
                <label
                  className={`flex items-center text-gray-800 font-bold mb-3 text-base ${
                    isRTL ? "" : "flex-row-reverse justify-end"
                  }`}
                >
                  <span className={`text-red-500 ${isRTL ? "ml-1" : "mr-1"}`}>
                    *
                  </span>
                  {t("email")}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t("email_placeholder")}
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#203F84] focus:border-[#203F84] outline-none transition-all text-base bg-gray-50 hover:bg-white hover:border-[#203F84]/50"
                />
              </div>

              <div className="lg:col-span-4">
                <label
                  className={`flex items-center text-gray-800 font-bold mb-3 text-base ${
                    isRTL ? "" : "flex-row-reverse justify-end"
                  }`}
                >
                  <span className={`text-red-500 ${isRTL ? "ml-1" : "mr-1"}`}>
                    *
                  </span>
                  {t("phone_number_label")}
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={t("phone_placeholder")}
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#203F84] focus:border-[#203F84] outline-none transition-all text-base bg-gray-50 hover:bg-white hover:border-[#203F84]/50"
                />
              </div>

              <div className="lg:col-span-2">
                <label className="block text-gray-800 font-bold mb-3 text-base text-center">
                  {t("code")}
                </label>
                <input
                  type="text"
                  name="phoneCode"
                  value={formData.phoneCode}
                  onChange={handleChange}
                  className="w-full px-3 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#203F84] focus:border-[#203F84] outline-none transition-all text-base text-center font-bold bg-[#203F84]/10 hover:bg-[#203F84]/20"
                  readOnly
                />
              </div>
            </div>

            {/* Paint Type & Service Type */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  className={`flex items-center text-gray-800 font-bold mb-3 text-base ${
                    isRTL ? "" : "flex-row-reverse justify-end"
                  }`}
                >
                  <span className={`text-red-500 ${isRTL ? "ml-1" : "mr-1"}`}>
                    *
                  </span>
                  {t("choose_paint_type")}
                </label>
                <select
                  name="paintType"
                  value={formData.paintType}
                  onChange={handleChange}
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#203F84] focus:border-[#203F84] outline-none transition-all text-base bg-gray-50 hover:bg-white hover:border-[#203F84]/50"
                >
                  <option value={t("choose")}>
                    {t("choose_paint_type_option")}
                  </option>
                  <option value={t("interior_paint")}>
                    {t("interior_paint")}
                  </option>
                  <option value={t("exterior_paint")}>
                    {t("exterior_paint")}
                  </option>
                </select>
              </div>

              <div>
                <label
                  className={`flex items-center text-gray-800 font-bold mb-3 text-base ${
                    isRTL ? "" : "flex-row-reverse justify-end"
                  }`}
                >
                  <span className={`text-red-500 ${isRTL ? "ml-1" : "mr-1"}`}>
                    *
                  </span>
                  {t("choose_service_type")}
                </label>
                <select
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#203F84] focus:border-[#203F84] outline-none transition-all text-base bg-gray-50 hover:bg-white hover:border-[#203F84]/50"
                >
                  <option value={t("choose")}>
                    {t("choose_service_option")}
                  </option>
                  <option value={t("regular_paint")}>
                    {t("regular_paint")}
                  </option>
                  <option value={t("decorative_paint")}>
                    {t("decorative_paint")}
                  </option>
                  <option value={t("luxury_paint")}>{t("luxury_paint")}</option>
                  <option value={t("specialized_paint")}>
                    {t("specialized_paint")}
                  </option>
                </select>
              </div>
            </div>

            {/* Terms Notice */}
            <div
              className={`bg-amber-50 ${
                isRTL ? "border-r-4" : "border-l-4"
              } border-amber-500 p-4 rounded-lg`}
            >
              <div className="flex items-start">
                <svg
                  className={`w-5 h-5 text-amber-600 ${
                    isRTL ? "ml-2" : "mr-2"
                  } mt-0.5 flex-shrink-0`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-sm text-amber-800 font-medium">
                  {t("delivery_notice")}
                </p>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-4">
              <button
                onClick={handleSubmit}
                className="group relative w-full md:w-auto px-16 py-4 bg-gradient-to-r from-[#203F84] to-[#203F84] hover:from-[#1b346f] hover:to-[#1b346f] text-white text-lg font-bold rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl active:scale-95 transform hover:-translate-y-1 overflow-hidden"
              >
                <span className="relative z-10">{t("submit_request")}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/20 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-8 text-gray-600 text-sm">
          <p>
            {t("required_fields_note")}{" "}
            <span className="text-red-500 font-bold">*</span>
          </p>
        </div>
      </div>
    </div>
  );
}
