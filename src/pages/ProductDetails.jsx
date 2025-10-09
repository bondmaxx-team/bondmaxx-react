import React, { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams, useNavigate, Link } from "react-router-dom";
import { useShop } from "../context/ShopContext";
import useWhatsApp from "@/hooks/useWhatsApp";
import { toast } from "sonner";

import interiorProducts from "../data/interiorProducts";
import exteriorProducts from "../data/exteriorProducts";
import insulationProducts from "../data/insulationProducts";

const ProductDetails = () => {
  const { t, i18n } = useTranslation();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { addToCart, toggleFavorite, isFavorite } = useShop();
  const { sendMessage } = useWhatsApp();

  const lang = i18n.language;
  const isRTL = i18n.dir() === "rtl";

  const [expandedSections, setExpandedSections] = useState({
    description: false,
    features: false,
    specifications: false,
    usage: false,
    storage: false,
  });

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  // Improved parameter extraction
  const productId = useMemo(() => {
    const id = searchParams.get("id");
    return id ? parseInt(id, 10) : 1;
  }, [searchParams]);

  const productType = useMemo(() => {
    const type = searchParams.get("type");
    return ["interior", "exterior", "insulation"].includes(type)
      ? type
      : "interior";
  }, [searchParams]);

  const allProducts = useMemo(
    () => ({
      interior: interiorProducts,
      exterior: exteriorProducts,
      insulation: insulationProducts,
    }),
    []
  );

  const product = useMemo(() => {
    const products = allProducts[productType];
    return products?.find((p) => p.id === productId);
  }, [productId, productType, allProducts]);

  // Enhanced translation helper
  const getTranslation = (obj, fallback = "") => {
    if (!obj) return fallback;
    if (typeof obj === "string") return obj;
    return obj[lang] || obj.en || fallback;
  };

  const translatedProduct = useMemo(() => {
    if (!product) return null;

    return {
      id: product.id,
      name: getTranslation(product.name),
      description: getTranslation(product.description),
      category: getTranslation(product.category, product.category),
      features: product.features?.[lang] || product.features?.en || [],
      fullDescription: getTranslation(product.fullDescription),
      detailedFeatures:
        product.detailedFeatures?.[lang] || product.detailedFeatures?.en || [],
      technicalSpecs:
        product.technicalSpecs?.[lang] || product.technicalSpecs?.en || {},
      usage: product.usage?.[lang] || product.usage?.en || {},
      storage: product.storage?.[lang] || product.storage?.en || {},
      image: product.image,
      color: product.color,
      price: product.price,
    };
  }, [product, lang]);

  const favorite = useMemo(
    () => isFavorite(productId?.toString()),
    [isFavorite, productId]
  );

  const handleAddToCart = (e) => {
    e.stopPropagation();
    if (product) {
      addToCart(product, 1);
      toast.success(t("added_to_cart"));
    }
  };

  const handleToggleFavorite = (e) => {
    e.stopPropagation();
    if (translatedProduct) {
      toggleFavorite({
        id: productId.toString(),
        image: translatedProduct.image,
        name: translatedProduct.name,
        price: translatedProduct.price,
      });
      toast.success(
        favorite ? t("removed_from_favorites") : t("added_to_favorites")
      );
    }
  };

  const openWhatsApp = (e) => {
    e.preventDefault();
    try {
      const message = `${t("whatsapp_message")} ${
        translatedProduct?.name || ""
      }`;
      const ok = sendMessage(message);
      if (!ok) toast.error(t("whatsapp_error"));
    } catch (error) {
      console.error("WhatsApp error:", error);
      toast.error(t("whatsapp_error"));
    }
  };

  const handleImageError = (e) => {
    e.target.style.display = "none";
    e.target.parentElement.style.backgroundColor =
      translatedProduct?.color || "#f3f4f6";
  };

  // Technical Specifications Rendering
  const renderTechnicalSpecs = () => {
    if (
      !translatedProduct?.technicalSpecs ||
      Object.keys(translatedProduct.technicalSpecs).length === 0
    ) {
      return <p className="text-gray-500">{t("no_specs_available")}</p>;
    }

    const specsLabels = {
      color: t("spec_color"),
      type: t("spec_type"),
      solidsContent: t("spec_solids_content"),
      viscosity: t("spec_viscosity"),
      density: t("spec_density"),
      pH: t("spec_ph"),
      whiteness: t("spec_whiteness"),
      dryingTime: t("spec_drying_time"),
      recoatTime: t("spec_recoat_time"),
      sheen: t("spec_sheen"),
      toolCleaning: t("spec_tool_cleaning"),
      base: t("base"),
      coverage: t("Coverage"),
      packaging: t("Packaging"),
      material: t("Material"),
      thickness: t("Thickness"),
      soundReductionIndex: t("Sound Reduction Index"),
      fireResistance: t("Fire Resistance"),
      dimensions: t("Dimensions"),
      weight: t("Weight"),
    };

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.entries(translatedProduct.technicalSpecs).map(
          ([key, value]) => (
            <div key={key} className="flex flex-col gap-1">
              <span className="text-sm font-semibold text-gray-700">
                {specsLabels[key] || key}:
              </span>
              <span className="text-sm text-gray-600">{value}</span>
            </div>
          )
        )}
      </div>
    );
  };

  // Usage Instructions Rendering
  const renderUsage = () => {
    if (
      !translatedProduct?.usage ||
      Object.keys(translatedProduct.usage).length === 0
    ) {
      return <p className="text-gray-500">{t("no_usage_info")}</p>;
    }

    return (
      <div className="space-y-4">
        {translatedProduct.usage.surfacePrep && (
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">
              {t("surface_preparation")}:
            </h4>
            <p className="text-gray-700">
              {translatedProduct.usage.surfacePrep}
            </p>
          </div>
        )}
        {translatedProduct.usage.application && (
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">
              {t("application_instructions")}:
            </h4>
            <p className="text-gray-700">
              {translatedProduct.usage.application}
            </p>
          </div>
        )}
      </div>
    );
  };

  // Storage Instructions Rendering
  const renderStorage = () => {
    if (
      !translatedProduct?.storage ||
      Object.keys(translatedProduct.storage).length === 0
    ) {
      return <p className="text-gray-500">{t("no_storage_info")}</p>;
    }

    return (
      <div className="space-y-3">
        {translatedProduct.storage.shelfLife && (
          <div className="flex items-start gap-3">
            <i className="fas fa-calendar-alt text-blue-600 mt-1"></i>
            <div>
              <span className="font-semibold">{t("shelf_life")}: </span>
              <span className="text-gray-700">
                {translatedProduct.storage.shelfLife}
              </span>
            </div>
          </div>
        )}
        {translatedProduct.storage.conditions && (
          <div className="flex items-start gap-3">
            <i className="fas fa-thermometer-half text-blue-600 mt-1"></i>
            <div>
              <span className="font-semibold">{t("storage_conditions")}: </span>
              <span className="text-gray-700">
                {translatedProduct.storage.conditions}
              </span>
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderSection = (key, icon, title, content) => (
    <div className="border-b border-gray-100 last:border-b-0">
      <button
        onClick={() => toggleSection(key)}
        className="w-full px-6 md:px-8 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
        aria-expanded={expandedSections[key]}
      >
        <div className="flex items-center gap-3">
          <i className={`${icon} text-blue-600 text-xl`}></i>
          <span className="text-base md:text-lg font-semibold text-gray-900">
            {title}
          </span>
        </div>
        <i
          className={`fas fa-chevron-down text-gray-500 text-lg transition-transform duration-200 ${
            expandedSections[key] ? "rotate-180" : ""
          }`}
        ></i>
      </button>
      {expandedSections[key] && (
        <div className="px-6 md:px-8 pb-6 pt-2 text-gray-700 text-sm md:text-base animate-fadeIn">
          {content}
        </div>
      )}
    </div>
  );

  // Loading or Not Found States
  if (!product || !translatedProduct) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-20">
        <i className="fas fa-box-open text-6xl text-gray-300 mb-4"></i>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          {t("product_not_found")}
        </h2>
        <button
          onClick={() => navigate(-1)}
          className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
        >
          {t("back_button")}
        </button>
      </div>
    );
  }

  return (
    <div className="py-20 bg-gray-50 min-h-screen" dir={isRTL ? "rtl" : "ltr"}>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors group"
        >
          <i
            className={`fas fa-arrow-${
              isRTL ? "right" : "left"
            } text-base group-hover:translate-x-${
              isRTL ? "1" : "-1"
            } transition-transform`}
          ></i>
          <span className="font-medium">{t("back_button")}</span>
        </button>

        <div className="shadow-xl overflow-hidden bg-white rounded-2xl">
          <div className="flex flex-col lg:flex-row gap-6 md:gap-8 p-6 md:p-8">
            {/* Product Image */}
            <div className="w-full lg:w-1/2 flex items-center justify-center">
              <div className="w-full max-w-[500px] aspect-[5/4] flex items-center justify-center overflow-hidden bg-gray-100 rounded-xl border-2 border-gray-200 shadow-inner">
                <img
                  src={translatedProduct.image}
                  alt={translatedProduct.name}
                  onError={handleImageError}
                  className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-5 w-full lg:w-1/2 relative">
              {/* Action Buttons */}
              <div
                className={`absolute top-0 ${
                  isRTL ? "left-0" : "right-0"
                } z-10`}
              >
                <div
                  className={`flex ${
                    isRTL ? "flex-row-reverse" : "flex-row"
                  } items-center gap-2`}
                >
                  <button
                    type="button"
                    onClick={handleToggleFavorite}
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-110"
                    aria-label={
                      favorite
                        ? t("remove_from_favorites")
                        : t("add_to_favorites")
                    }
                  >
                    <i
                      className={`${
                        favorite
                          ? "fas fa-heart text-red-500"
                          : "far fa-heart text-gray-500"
                      } text-lg transition-colors`}
                    />
                  </button>
                  <button
                    type="button"
                    onClick={handleAddToCart}
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-110"
                    aria-label={t("add_to_cart")}
                  >
                    <i className="fas fa-shopping-cart text-gray-600 hover:text-emerald-600 text-lg transition-colors" />
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="pt-14 md:pt-0">
                <p className="text-sm text-blue-600 font-medium mb-1">
                  {t(translatedProduct.category) || translatedProduct.category}
                </p>
                <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight mb-3">
                  {translatedProduct.name}
                </h1>
                {translatedProduct.price && (
                  <p className="text-3xl text-emerald-600 font-bold">
                    {translatedProduct.price} {t("currency_sar")}
                  </p>
                )}
              </div>

              <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                {translatedProduct.fullDescription ||
                  translatedProduct.description}
              </p>

              {/* Key Features */}
              {translatedProduct.features?.length > 0 && (
                <div className="space-y-3 bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 text-lg">
                    {t("key_features")}:
                  </h3>
                  {translatedProduct.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <i className="fas fa-check-circle text-blue-600 text-lg mt-0.5"></i>
                      <span className="text-gray-700 text-sm md:text-base">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Action Buttons */}
              <div className="space-y-3 pt-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <Link
                    to="/search-dealer"
                    className="px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300 text-center text-sm font-medium transform hover:scale-105 shadow-md"
                  >
                    <i className="fas fa-store me-2"></i>
                    {t("find_dealer")}
                  </Link>
                  <Link
                    to="/color-collection"
                    className="px-4 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-300 text-center text-sm font-medium transform hover:scale-105"
                  >
                    <i className="fas fa-palette me-2"></i>
                    {t("search_color")}
                  </Link>
                  <Link
                    to="/paint-calculator"
                    className="px-4 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-300 text-center text-sm font-medium transform hover:scale-105"
                  >
                    <i className="fas fa-calculator me-2"></i>
                    {t("paint_calculator")}
                  </Link>
                </div>

                <a
                  href="#"
                  onClick={openWhatsApp}
                  className="w-full px-6 py-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-300 flex items-center justify-center gap-3 font-medium transform hover:scale-105 shadow-lg"
                >
                  <i className="fab fa-whatsapp text-2xl"></i>
                  {t("contact_whatsapp")}
                </a>
              </div>
            </div>
          </div>

          {/* Expandable Sections */}
          <div className="border-t-2 border-gray-200">
            {translatedProduct.fullDescription &&
              renderSection(
                "description",
                "far fa-file-alt",
                t("full_description"),
                <p className="whitespace-pre-line leading-relaxed">
                  {translatedProduct.fullDescription}
                </p>
              )}

            {translatedProduct.detailedFeatures?.length > 0 &&
              renderSection(
                "features",
                "fas fa-list-check",
                t("detailed_features"),
                <ul className="space-y-3">
                  {translatedProduct.detailedFeatures.map((f, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <i className="fas fa-star text-yellow-500 mt-1"></i>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              )}

            {renderSection(
              "specifications",
              "fas fa-cog",
              t("technical_specifications"),
              renderTechnicalSpecs()
            )}

            {renderSection(
              "usage",
              "fas fa-paint-roller",
              t("usage_instructions"),
              renderUsage()
            )}

            {renderSection(
              "storage",
              "fas fa-warehouse",
              t("storage_instructions"),
              renderStorage()
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
