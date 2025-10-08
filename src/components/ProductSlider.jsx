import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import ProductCard from "./MainSectionProductCard";
import { useTranslation } from "react-i18next";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProductSlider = ({ title, products, color, linkTo }) => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n?.language === "ar";

  // Keep a ref to the swiper instance and nav buttons
  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // Color mapping for Tailwind classes
  const colorClasses = {
    blue: {
      bg: "bg-blue-600",
      hover: "hover:bg-blue-700",
      hoverText: "hover:text-blue-600",
    },
    green: {
      bg: "bg-green-600",
      hover: "hover:bg-green-700",
      hoverText: "hover:text-green-600",
    },
    red: {
      bg: "bg-red-600",
      hover: "hover:bg-red-700",
      hoverText: "hover:text-red-600",
    },
    yellow: {
      bg: "bg-yellow-600",
      hover: "hover:bg-yellow-700",
      hoverText: "hover:text-yellow-600",
    },
    purple: {
      bg: "bg-purple-600",
      hover: "hover:bg-purple-700",
      hoverText: "hover:text-purple-600",
    },
    orange: {
      bg: "bg-orange-600",
      hover: "hover:bg-orange-700",
      hoverText: "hover:text-orange-600",
    },
    pink: {
      bg: "bg-pink-600",
      hover: "hover:bg-pink-700",
      hoverText: "hover:text-pink-600",
    },
  };

  const currentColor = colorClasses[color] || colorClasses.blue;

  // Optional: reflect dir on the wrapper for consistency
  useEffect(() => {
    document.documentElement.setAttribute("dir", isRTL ? "rtl" : "ltr");
  }, [isRTL]);

  // When direction changes, tell Swiper & rebind navigation
  useEffect(() => {
    const swiper = swiperRef.current;
    if (!swiper) return;

    // Flip direction (no full destroy needed)
    swiper.changeDirection(isRTL ? "rtl" : "ltr", false);

    // Rebind navigation to the current refs
    swiper.params.navigation.prevEl = prevRef.current;
    swiper.params.navigation.nextEl = nextRef.current;

    // Re-init & update
    swiper.navigation.destroy();
    swiper.navigation.init();
    swiper.navigation.update();
    swiper.update();
  }, [isRTL]);

  // ✅ ترجم العنوان هنا
  const translatedTitle = t(title);

  return (
    <div className="mb-16" dir={isRTL ? "rtl" : "ltr"}>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
      </div>

      <Swiper
        key={`${i18n?.language}-${color}`}
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        spaceBetween={16}
        pagination={{ clickable: true }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation = {
            ...(swiper.params.navigation || {}),
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          };
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        direction="horizontal"
        dir={isRTL ? "rtl" : "ltr"}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="mb-4"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}

        <SwiperSlide>
          <Link
            to={linkTo}
            className={`block ${currentColor.bg} ${currentColor.hover} text-white rounded-lg shadow-md p-6 text-center transition h-full flex flex-col items-center justify-center`}
          >
            <i
              className={`fas ${
                isRTL ? "fa-arrow-left" : "fa-arrow-right"
              } mb-2 text-2xl`}
            />
            <p>
              {t("view_all")} {translatedTitle}
            </p>
          </Link>
        </SwiperSlide>
      </Swiper>

      <div className="flex justify-between items-center">
        <div />
        <div className="flex gap-3">
          <button
            ref={prevRef}
            type="button"
            className={`cursor-pointer text-gray-600 ${currentColor.hoverText} transition-colors`}
            aria-label="Previous"
          >
            <i
              className={`fas ${
                isRTL ? "fa-chevron-right" : "fa-chevron-left"
              } text-xl`}
            />
          </button>
          <button
            ref={nextRef}
            type="button"
            className={`cursor-pointer text-gray-600 ${currentColor.hoverText} transition-colors`}
            aria-label="Next"
          >
            <i
              className={`fas ${
                isRTL ? "fa-chevron-left" : "fa-chevron-right"
              } text-xl`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
