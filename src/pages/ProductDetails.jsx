import React, { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useShop } from "../context/ShopContext";
import { useTranslation } from "react-i18next";

const ProductDetails = () => {
  const { toggleFavorite, isFavorite, addToCart } = useShop();
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === "rtl";

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // State for expandable sections
  const [expandedSections, setExpandedSections] = useState({
    description: false,
    features: false,
    specifications: false,
    usage: false,
    storage: false,
    manufacturer: false,
  });

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const getParam = (key, fallback) => {
    const value = searchParams.get(key);

    if (
      value === null ||
      value.trim() === "" ||
      value === "undefined" ||
      value === "null" ||
      value === "false" ||
      typeof value === "undefined"
    ) {
      return fallback;
    }

    return value;
  };

  const productId = getParam("id", "1");
  const category = getParam("category", t("paints_category"));
  const name = getParam("name", t("default_product_name"));
  const description = getParam("description", t("default_description"));
  const imageUrl = getParam(
    "image",
    "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=500&h=400&fit=crop"
  );

  const rawPrice = getParam("price", false);
  const price = rawPrice && rawPrice.trim() !== "" ? rawPrice : undefined;

  const color = getParam("color", "");

  let features = [
    t("elegant_matte_finish"),
    t("excellent_coverage"),
    t("reduces_light_reflection"),
    t("smooth_surface"),
    t("eco_friendly_formula"),
  ];
  const favorite = isFavorite(productId || "123456");

  try {
    const featuresParam = searchParams.get("features");
    if (featuresParam) {
      features = JSON.parse(decodeURIComponent(featuresParam));
    }
  } catch (error) {
    console.error("Error parsing features:", error);
  }

  const whatsappNumber = "905550004000";

  const openWhatsApp = (e) => {
    e.preventDefault();
    try {
      const message = encodeURIComponent(`${t("whatsapp_message")} ${name}`);
      window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
    } catch (error) {
      console.error("Error opening WhatsApp:", error);
      alert(t("whatsapp_error"));
    }
  };

  const handleImageError = (e) => {
    e.target.style.display = "none";
    if (color) {
      e.target.parentElement.style.backgroundColor = color;
    } else {
      e.target.parentElement.style.backgroundColor = "#f3f4f6";
    }
  };

  return (
    <div className="py-20 bg-gray-50 min-h-screen" dir={isRTL ? "rtl" : "ltr"}>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-4 flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
        >
          <i
            className={`fas fa-arrow-${isRTL ? "right" : "left"} text-base`}
          ></i>
          <span>{t("back_button")}</span>
        </button>

        <div className="shadow-lg overflow-hidden bg-white rounded-xl">
          <div className="flex flex-col lg:flex-row gap-4 md:gap-8 p-4 md:p-8">
            {/* Product Image */}
            <div className="w-full lg:w-1/2 flex items-center justify-center order-1 lg:order-1">
              <div className="w-full max-w-[500px] aspect-[5/4] flex items-center justify-center overflow-hidden bg-gray-100 rounded-lg border-2 border-gray-200">
                <img
                  src={imageUrl}
                  alt={name}
                  onError={handleImageError}
                  className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-4 md:space-y-6 w-full lg:w-1/2 relative order-2 lg:order-2">
              {/* Favorite and Cart Buttons */}
              <div
                className={`absolute top-0 ${
                  isRTL ? "left-0" : "right-0"
                } z-10 p-2`}
              >
                <div
                  className={`flex ${
                    isRTL ? "flex-row-reverse" : "flex-row"
                  } items-center gap-2`}
                >
                  {/* Favorite */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite({
                        id: productId,
                        image: imageUrl,
                        name: name,
                        price,
                      });
                    }}
                    className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white shadow-md hover:shadow-lg transition-all"
                    aria-label={t("add_to_favorites_aria")}
                    title={t("add_to_favorites_aria")}
                  >
                    <i
                      className={`${
                        favorite
                          ? "fas fa-heart text-red-500"
                          : "far fa-heart text-gray-500 hover:text-red-500"
                      } text-lg`}
                    />
                  </button>

                  {/* Cart */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(
                        { id: productId, image: imageUrl, price, name },
                        1
                      );
                    }}
                    className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white shadow-md hover:shadow-lg transition-all"
                    aria-label={t("add_to_cart_aria")}
                    title={t("add_to_cart_aria")}
                  >
                    <i className="fas fa-shopping-cart text-gray-600 hover:text-emerald-600 text-lg transition-colors" />
                  </button>
                </div>
              </div>

              <div className="pt-12 md:pt-0">
                <div className="space-y-2">
                  <p className="text-sm text-gray-500">{category}</p>
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                    {name}
                  </h1>
                  {price && (
                    <p className="text-2xl text-emerald-600 font-semibold">
                      {price} {t("currency_sar")}
                    </p>
                  )}
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {description}
              </p>

              {/* Features List with Check Icons */}
              {features && features.length > 0 && (
                <div className="space-y-3">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className={`flex items-start gap-3 ${
                        isRTL ? "flex-row-reverse" : ""
                      }`}
                    >
                      <i className="fas fa-check text-green-600 text-base mt-0.5"></i>
                      <span className="text-gray-700 text-sm md:text-base">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Buttons */}
              <div className="space-y-4 mt-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <Link
                    to="/search-dealer"
                    className="px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300 text-center text-sm font-medium transform hover:scale-105"
                  >
                    {t("find_dealer")}
                  </Link>

                  <Link
                    to="/color-collection"
                    className="px-4 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-300 text-center text-sm font-medium transform hover:scale-105"
                  >
                    {t("search_color")}
                  </Link>

                  <a
                    href="#"
                    className="px-4 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-300 text-center text-sm font-medium transform hover:scale-105"
                  >
                    {t("paint_calculator")}
                  </a>
                </div>

                <a
                  href="#"
                  onClick={openWhatsApp}
                  className="w-full px-6 py-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-300 flex items-center justify-center gap-3 font-medium transform hover:scale-105 shadow-lg"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  <span>{t("contact_whatsapp")}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Expandable Sections */}
          <div className="border-t border-gray-200">
            {/* Product Description Section */}
            <div className="border-b border-gray-100">
              <button
                onClick={() => toggleSection("description")}
                className="w-full px-6 md:px-8 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <i className="far fa-file-alt text-gray-500 text-xl"></i>
                  <span className="text-base md:text-lg font-semibold text-gray-900">
                    {t("product_description")}
                  </span>
                </div>
                <i
                  className={`fas fa-plus text-gray-500 text-lg transition-transform ${
                    expandedSections.description ? "rotate-45" : ""
                  }`}
                ></i>
              </button>
              {expandedSections.description && (
                <div className="px-6 md:px-8 pb-6 pt-2 text-gray-700 leading-relaxed text-sm md:text-base">
                  <p className="whitespace-pre-line">
                    {t("full_product_description")}
                  </p>
                </div>
              )}
            </div>

            {/* Features Section */}
            <div className="border-b border-gray-100">
              <button
                onClick={() => toggleSection("features")}
                className="w-full px-6 md:px-8 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-gray-500 text-xl"></i>
                  <span className="text-base md:text-lg font-semibold text-gray-900">
                    {t("product_features")}
                  </span>
                </div>
                <i
                  className={`fas fa-plus text-gray-500 text-lg transition-transform ${
                    expandedSections.features ? "rotate-45" : ""
                  }`}
                ></i>
              </button>
              {expandedSections.features && (
                <div className="px-6 md:px-8 pb-6 pt-2">
                  <ul className="space-y-3">
                    {[
                      t("feature_1"),
                      t("feature_2"),
                      t("feature_3"),
                      t("feature_4"),
                      t("feature_5"),
                      t("feature_6"),
                    ].map((feature, index) => (
                      <li
                        key={index}
                        className={`flex items-start gap-3 ${
                          isRTL ? "flex-row-reverse" : ""
                        }`}
                      >
                        <i className="fas fa-check text-green-600 mt-1"></i>
                        <span className="text-gray-700 text-sm md:text-base">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Technical Specifications Section */}
            <div className="border-b border-gray-100">
              <button
                onClick={() => toggleSection("specifications")}
                className="w-full px-6 md:px-8 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <i className="fas fa-cog text-gray-500 text-xl"></i>
                  <span className="text-base md:text-lg font-semibold text-gray-900">
                    {t("technical_specifications")}
                  </span>
                </div>
                <i
                  className={`fas fa-plus text-gray-500 text-lg transition-transform ${
                    expandedSections.specifications ? "rotate-45" : ""
                  }`}
                ></i>
              </button>
              {expandedSections.specifications && (
                <div className="px-6 md:px-8 pb-6 pt-2">
                  <div className="space-y-3">
                    {[
                      {
                        label: t("spec_type_label"),
                        value: t("spec_type_value"),
                      },
                      {
                        label: t("spec_viscosity_label"),
                        value: t("spec_viscosity_value"),
                      },
                      {
                        label: t("spec_density_label"),
                        value: t("spec_density_value"),
                      },
                      {
                        label: t("spec_whiteness_label"),
                        value: t("spec_whiteness_value"),
                      },
                      {
                        label: t("spec_drying_label"),
                        value: t("spec_drying_value"),
                      },
                      {
                        label: t("spec_recoat_label"),
                        value: t("spec_recoat_value"),
                      },
                      {
                        label: t("spec_gloss_label"),
                        value: t("spec_gloss_value"),
                      },
                      {
                        label: t("spec_coverage_label"),
                        value: t("spec_coverage_value"),
                      },
                      {
                        label: t("spec_sizes_label"),
                        value: t("spec_sizes_value"),
                      },
                    ].map((spec, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0"
                      >
                        <span className="text-gray-600 font-medium text-sm md:text-base">
                          {spec.label}
                        </span>
                        <span className="text-gray-900 text-sm md:text-base">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Usage Instructions Section */}
            <div className="border-b border-gray-100">
              <button
                onClick={() => toggleSection("usage")}
                className="w-full px-6 md:px-8 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <i className="fas fa-tools text-gray-500 text-xl"></i>
                  <span className="text-base md:text-lg font-semibold text-gray-900">
                    {t("usage_instructions")}
                  </span>
                </div>
                <i
                  className={`fas fa-plus text-gray-500 text-lg transition-transform ${
                    expandedSections.usage ? "rotate-45" : ""
                  }`}
                ></i>
              </button>
              {expandedSections.usage && (
                <div className="px-6 md:px-8 pb-6 pt-2">
                  <ol className="list-decimal list-inside space-y-3 text-gray-700 text-sm md:text-base">
                    {[
                      t("usage_step_1"),
                      t("usage_step_2"),
                      t("usage_step_3"),
                      t("usage_step_4"),
                      t("usage_step_5"),
                      t("usage_step_6"),
                    ].map((step, index) => (
                      <li key={index} className="leading-relaxed">
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </div>

            {/* Storage and Packaging Section */}
            <div className="border-b border-gray-100">
              <button
                onClick={() => toggleSection("storage")}
                className="w-full px-6 md:px-8 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <i className="fas fa-box text-gray-500 text-xl"></i>
                  <span className="text-base md:text-lg font-semibold text-gray-900">
                    {t("packaging_storage")}
                  </span>
                </div>
                <i
                  className={`fas fa-plus text-gray-500 text-lg transition-transform ${
                    expandedSections.storage ? "rotate-45" : ""
                  }`}
                ></i>
              </button>
              {expandedSections.storage && (
                <div className="px-6 md:px-8 pb-6 pt-2">
                  <ul className="space-y-3">
                    {[
                      t("storage_info_1"),
                      t("storage_info_2"),
                      t("storage_info_3"),
                    ].map((info, index) => (
                      <li
                        key={index}
                        className={`flex items-start gap-3 ${
                          isRTL ? "flex-row-reverse" : ""
                        }`}
                      >
                        <i className="fas fa-circle text-blue-600 text-xs mt-2"></i>
                        <span className="text-gray-700 text-sm md:text-base">
                          {info}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Manufacturer Information Section */}
            <div>
              <button
                onClick={() => toggleSection("manufacturer")}
                className="w-full px-6 md:px-8 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <i className="fas fa-industry text-gray-500 text-xl"></i>
                  <span className="text-base md:text-lg font-semibold text-gray-900">
                    {t("manufacturer_info")}
                  </span>
                </div>
                <i
                  className={`fas fa-plus text-gray-500 text-lg transition-transform ${
                    expandedSections.manufacturer ? "rotate-45" : ""
                  }`}
                ></i>
              </button>
              {expandedSections.manufacturer && (
                <div className="px-6 md:px-8 pb-6 pt-2">
                  <div className="space-y-3 text-gray-700">
                    <p className="font-semibold text-lg text-gray-900">
                      {t("company_name")}
                    </p>
                    <div className="space-y-2">
                      <p className="flex items-center gap-2">
                        <i className="fas fa-envelope text-blue-600"></i>
                        <a
                          href="mailto:info@bondmaxx.com"
                          className="text-blue-600 hover:underline"
                        >
                          info@bondmaxx.com
                        </a>
                      </p>
                      <p className="flex items-center gap-2">
                        <i className="fas fa-phone text-blue-600"></i>
                        <a
                          href="tel:+905550004000"
                          className="text-blue-600 hover:underline"
                        >
                          +90 555 000 40 00
                        </a>
                      </p>
                      <p className="flex items-center gap-2">
                        <i className="fas fa-map-marker-alt text-blue-600"></i>
                        <span>{t("manufacturer_address")}</span>
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
