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
    manufacturer: false,
  });

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({ ...prev, [section]: !prev[section] }));
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
    )
      return fallback;
    return value;
  };

  const productId = getParam("id", "1");
  const productType = getParam("type", "interior");

  const allProducts = useMemo(
    () => ({
      interior: interiorProducts,
      exterior: exteriorProducts,
      insulation: insulationProducts,
    }),
    []
  );

  const product = useMemo(() => {
    const products = allProducts[productType] || allProducts.interior;
    return products.find((p) => p.id === parseInt(productId));
  }, [productId, productType, allProducts]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          {t("product_not_found") || "المنتج غير موجود"}
        </h2>
        <button
          onClick={() => navigate(-1)}
          className="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition"
        >
          {t("back") || "الرجوع"}
        </button>
      </div>
    );
  }

  const translatedProduct = useMemo(() => {
    return {
      ...product,
      name: product.name?.[lang] || product.name?.en || "",
      description: product.description?.[lang] || product.description?.en || "",
      category:
        product.category?.[lang] ||
        product.category?.en ||
        product.category ||
        "",
      features: (product.features?.[lang] || product.features?.en || []).map(
        (f) => f || ""
      ),
      usage: (product.usage?.[lang] || product.usage?.en || []).map(
        (f) => f || ""
      ),
      storage: (product.storage?.[lang] || product.storage?.en || []).map(
        (f) => f || ""
      ),
      manufacturer: {
        name:
          product.manufacturer?.name?.[lang] ||
          product.manufacturer?.name?.en ||
          t("company_name"),
        email: product.manufacturer?.email || "info@bondmaxx.com",
        phone: product.manufacturer?.phone || "+905550004000",
        address:
          product.manufacturer?.address?.[lang] ||
          product.manufacturer?.address?.en ||
          t("manufacturer_address"),
      },
      specifications: product.specifications || [],
      image: product.image,
      color: product.color,
      price: product.price,
    };
  }, [product, lang, t]);

  const favorite = isFavorite(productId);

  const openWhatsApp = (e) => {
    e.preventDefault();
    try {
      const message = `${t("whatsapp_message")} ${translatedProduct.name}`;
      const ok = sendMessage(message);
      if (!ok) toast.error(t("whatsapp_error"));
    } catch (error) {
      toast.error(t("whatsapp_error"));
    }
  };

  const handleImageError = (e) => {
    e.target.style.display = "none";
    e.target.parentElement.style.backgroundColor =
      translatedProduct.color || "#f3f4f6";
  };

  const renderSection = (key, icon, title, content) => (
    <div className="border-b border-gray-100">
      <button
        onClick={() => toggleSection(key)}
        className="w-full px-6 md:px-8 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <i className={`${icon} text-gray-500 text-xl`}></i>
          <span className="text-base md:text-lg font-semibold text-gray-900">
            {title}
          </span>
        </div>
        <i
          className={`fas fa-plus text-gray-500 text-lg transition-transform ${
            expandedSections[key] ? "rotate-45" : ""
          }`}
        ></i>
      </button>
      {expandedSections[key] && (
        <div className="px-6 md:px-8 pb-6 pt-2 text-gray-700 text-sm md:text-base">
          {content}
        </div>
      )}
    </div>
  );

  return (
    <div className="py-20 bg-gray-50 min-h-screen" dir={isRTL ? "rtl" : "ltr"}>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            {/* الصورة */}
            <div className="w-full lg:w-1/2 flex items-center justify-center order-1">
              <div className="w-full max-w-[500px] aspect-[5/4] flex items-center justify-center overflow-hidden bg-gray-100 rounded-lg border-2 border-gray-200">
                <img
                  src={translatedProduct.image}
                  alt={translatedProduct.name}
                  onError={handleImageError}
                  className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>

            {/* التفاصيل */}
            <div className="space-y-4 md:space-y-6 w-full lg:w-1/2 relative order-2">
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
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite({
                        id: productId,
                        image: translatedProduct.image,
                        name: translatedProduct.name,
                        price: translatedProduct.price,
                      });
                    }}
                    className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white shadow-md hover:shadow-lg transition-all"
                  >
                    <i
                      className={`${
                        favorite
                          ? "fas fa-heart text-red-500"
                          : "far fa-heart text-gray-500 hover:text-red-500"
                      } text-lg`}
                    />
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(translatedProduct, 1);
                    }}
                    className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white shadow-md hover:shadow-lg transition-all"
                  >
                    <i className="fas fa-shopping-cart text-gray-600 hover:text-emerald-600 text-lg transition-colors" />
                  </button>
                </div>
              </div>

              <div className="pt-12 md:pt-0">
                <p className="text-sm text-gray-500">
                  {translatedProduct.category}
                </p>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                  {translatedProduct.name}
                </h1>
                {translatedProduct.price && (
                  <p className="text-2xl text-emerald-600 font-semibold">
                    {translatedProduct.price} {t("currency_sar")}
                  </p>
                )}
              </div>

              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {translatedProduct.description}
              </p>

              {translatedProduct.features.length > 0 && (
                <div className="space-y-3">
                  {translatedProduct.features.map((feature, idx) => (
                    <div
                      key={idx}
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
                  {t("contact_whatsapp")}
                </a>
              </div>
            </div>
          </div>

          {/* الأقسام القابلة للتوسيع */}
          <div className="border-t border-gray-200">
            {renderSection(
              "description",
              "far fa-file-alt",
              t("product_description"),
              <p className="whitespace-pre-line">
                {translatedProduct.description}
              </p>
            )}
            {renderSection(
              "features",
              "fas fa-check-circle",
              t("product_features"),
              <ul className="space-y-3">
                {translatedProduct.features.map((f, i) => (
                  <li
                    key={i}
                    className={`flex items-start gap-3 ${
                      isRTL ? "flex-row-reverse" : ""
                    }`}
                  >
                    <i className="fas fa-check text-green-600 mt-1"></i>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            )}
            {renderSection(
              "specifications",
              "fas fa-cog",
              t("technical_specifications"),
              <div className="space-y-2">
                {translatedProduct.specifications.map((s, i) => (
                  <p key={i}>{s}</p>
                ))}
              </div>
            )}
            {renderSection(
              "usage",
              "fas fa-hand-paper",
              t("usage"),
              <ul className="list-disc ps-5">
                {translatedProduct.usage.map((u, i) => (
                  <li key={i}>{u}</li>
                ))}
              </ul>
            )}
            {renderSection(
              "storage",
              "fas fa-box",
              t("storage"),
              <ul className="list-disc ps-5">
                {translatedProduct.storage.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            )}
            {renderSection(
              "manufacturer",
              "fas fa-building",
              t("manufacturer_info"),
              <div className="space-y-2">
                <p>{translatedProduct.manufacturer.name}</p>
                <p>{translatedProduct.manufacturer.email}</p>
                <p>{translatedProduct.manufacturer.phone}</p>
                <p>{translatedProduct.manufacturer.address}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
