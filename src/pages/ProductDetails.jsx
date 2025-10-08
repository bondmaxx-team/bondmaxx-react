import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams, useNavigate } from "react-router-dom";

// 🟦 استيراد البيانات الثلاثة
import interiorProducts from "../data/interiorProducts";
import exteriorProducts from "../data/exteriorProducts";
import insulationProducts from "../data/insulationProducts";

import { useShop } from "../context/ShopContext";

const ProductDetails = () => {
  const { t, i18n } = useTranslation();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { addToCart } = useShop();

  const lang = i18n.language;
  const isRTL = i18n.dir() === "rtl";

  // 🟦 قراءة id و type من الرابط
  const productId = searchParams.get("id");
  const productType = searchParams.get("type") || "interior";

  // 🟦 اختيار قائمة المنتجات حسب النوع
  const productsList = useMemo(() => {
    switch (productType) {
      case "exterior":
        return exteriorProducts;
      case "insulation":
        return insulationProducts;
      default:
        return interiorProducts;
    }
  }, [productType]);

  // 🟦 إيجاد المنتج الحالي
  const product = useMemo(
    () => productsList.find((p) => String(p.id) === String(productId)),
    [productsList, productId]
  );

  // 🟥 لو المنتج غير موجود → نرجع للصفحة السابقة
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

  // 🟦 تجهيز النصوص المترجمة
  const translatedName = product.name?.[lang] || product.name?.en || "";
  const translatedDesc =
    product.description?.[lang] || product.description?.en || "";
  const translatedFeatures =
    product.features?.[lang] || product.features?.en || [];

  return (
    <div
      className="bg-gradient-to-b from-blue-50 to-blue-100 min-h-screen py-10 px-4"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* صورة المنتج */}
        {product.image && (
          <div className="w-full h-72 md:h-96 bg-gray-100">
            <img
              src={product.image}
              alt={translatedName}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* التفاصيل */}
        <div className="p-6 md:p-10">
          <h1 className="text-2xl md:text-4xl font-bold mb-4 text-gray-800">
            {translatedName}
          </h1>
          {translatedDesc && (
            <p className="text-gray-600 text-base md:text-lg mb-6">
              {translatedDesc}
            </p>
          )}

          {/* الميزات */}
          {translatedFeatures?.length > 0 && (
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-2 text-gray-800">
                {t("features") || "الميزات"}
              </h2>
              <ul className="list-disc ps-5 text-gray-700 space-y-1">
                {translatedFeatures.map((f, idx) => (
                  <li key={idx}>{f}</li>
                ))}
              </ul>
            </div>
          )}

          {/* زر السلة */}
          <button
            onClick={() => addToCart(product)}
            className="bg-gradient-to-br from-blue-500 to-blue-700 text-white px-6 py-3 rounded-xl hover:from-blue-600 hover:to-blue-800 transition font-semibold"
          >
            {t("add_to_cart") || "أضف إلى السلة"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
