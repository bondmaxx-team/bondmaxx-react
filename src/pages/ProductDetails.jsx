import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useShop } from "../context/ShopContext";

const ProductDetails = () => {
  const { toggleFavorite, isFavorite, addToCart } = useShop();

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const getParam = (key, fallback) => {
    const value = searchParams.get(key);

    if (
      value === null || // key not found
      value.trim() === "" || // empty string
      value === "undefined" || // literal string "undefined"
      value === "null" || // literal string "null"
      value === "false" || // literal string "false"
      typeof value === "undefined" // actual undefined (edge case)
    ) {
      return fallback;
    }

    return value;
  };

  const productId = getParam("id", "1");
  const category = getParam("category", "دهانات");
  const name = getParam("name", "دهان Bondmax مطفي");
  const description = getParam(
    "description",
    "تجعل بيتك يضج بالحياة في كل لحظة، حيث يغطي بك كل حائط بالطريقة التي تريدها، وحيث تُصبح الجمال والحياة أسلوب حياة."
  );
  const imageUrl = getParam(
    "image",
    "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=500&h=400&fit=crop"
  );

  // ✅ price: keep undefined if it's empty or missing
  const rawPrice = getParam("price", false);
  const price = rawPrice && rawPrice.trim() !== "" ? rawPrice : undefined;

  const color = getParam("color", "");

  // Parse features from query (if passed as JSON string) or use defaults
  let features = [
    "مظهر مطفي أنيق وراقي",
    "تغطية ممتازة بألوان ثابتة",
    "يقلل من الانعكاسات الضوئية",
    "سطح ناعم وسهل اللمس",
    "تركيبة قليلة الرائحة وصديقة للبيئة",
  ];
  const favorite = isFavorite(productId || "123456");

  try {
    const featuresParam = searchParams.get("features");
    if (featuresParam) {
      features = JSON.parse(decodeURIComponent(featuresParam));
    }
  } catch (error) {
    console.error("Error parsing features:", error);
    // Keep default features
  }

  const whatsappNumber = "1234567890";
  const whatsappMessage = "مرحباً، أنا مهتم بمنتج ";

  const openWhatsApp = (e) => {
    e.preventDefault();
    try {
      const message = encodeURIComponent(`${whatsappMessage}${name}`);
      window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
    } catch (error) {
      console.error("Error opening WhatsApp:", error);
      alert("حدث خطأ عند فتح واتساب");
    }
  };

  const handleImageError = (e) => {
    // Fallback to color background if image fails to load
    e.target.style.display = "none";
    if (color) {
      e.target.parentElement.style.backgroundColor = color;
    } else {
      e.target.parentElement.style.backgroundColor = "#f3f4f6";
    }
  };

  return (
    <div className="py-20 bg-gray-50 min-h-screen" dir="rtl">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-4 flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
        >
          <svg
            className="w-5 h-5 rotate-180"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
          <span>العودة</span>
        </button>

        <div className="shadow-lg overflow-hidden bg-white rounded-xl">
          <div className="flex flex-col lg:flex-row gap-4 md:gap-8 p-4 md:p-8">
            {/* Product Images Section */}
            <div className="w-full lg:w-1/2 flex items-center justify-center order-1 lg:order-1">
              <div className="w-full max-w-[500px] aspect-[5/4] flex items-center justify-center overflow-hidden bg-gray-100 rounded-lg">
                <img
                  src={imageUrl}
                  alt={name}
                  onError={handleImageError}
                  className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>

            {/* Product Details Section */}
            <div className="space-y-4 md:space-y-6 w-full lg:w-1/2 relative order-2 lg:order-2">
              {/* Favorite Icon */}
              <button
                onClick={() =>
                  toggleFavorite({
                    id: productId,
                    image: imageUrl,
                    price: price,
                  })
                }
                className="absolute top-0 left-0 md:left-0 p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all z-10"
                aria-label="أضف إلى المفضلة"
              >
                <svg
                  className={`w-6 h-6 transition-colors ${
                    favorite
                      ? "fill-red-500 text-red-500"
                      : "fill-none text-gray-400 hover:text-red-500"
                  }`}
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>

              {/* Header */}
              <div className="pt-12 md:pt-0">
                <div className="space-y-2">
                  <p className="text-sm text-gray-500">{category}</p>
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                    {name}
                  </h1>
                  {price && (
                    <p className="text-2xl text-emerald-600 font-semibold">
                      {price} ر.س
                    </p>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {description}
              </p>

              {/* Features */}
              {features && features.length > 0 && (
                <div className="space-y-3">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="feature-item flex items-center space-x-3 space-x-reverse"
                    >
                      <span className="text-gray-700 text-sm md:text-base">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Buttons - Responsive Grid */}
              <div className="space-y-4 mt-6">
                {/* Top Row - 3 buttons on desktop, stacked on mobile */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {/* Find Dealer */}
                  <a
                    href="#"
                    className="px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300 text-center text-sm font-medium transform hover:scale-105"
                  >
                    ابحث عن الوكيل
                  </a>

                  {/* Search Color */}
                  <a
                    href="#"
                    className="px-4 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-300 text-center text-sm font-medium transform hover:scale-105"
                  >
                    البحث عن اللون
                  </a>

                  {/* Paint Calculator */}
                  <a
                    href="#"
                    className="px-4 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-300 text-center text-sm font-medium transform hover:scale-105"
                  >
                    حاسبة الطلاء
                  </a>
                </div>

                {/* WhatsApp Contact - Full width */}
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
                  <span>تواصل عبر واتساب</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
