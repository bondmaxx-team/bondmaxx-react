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

  // Optional: reflect dir on the wrapper for consistency
  useEffect(() => {
    // If you also set <html dir=...> elsewhere, keep it in sync:
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

  return (
    <div className="mb-16" dir={isRTL ? "rtl" : "ltr"}>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
      </div>

      <Swiper
        key={`${i18n?.language}-${color}`} // ✅ force remount on lang change
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        spaceBetween={16}
        pagination={{ clickable: true }}
        // We'll wire navigation via refs in onBeforeInit
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
        // Initial direction on mount (changeDirection will handle subsequent flips)
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
            className={`block bg-${color}-600 text-white rounded-lg shadow-md p-6 text-center hover:bg-${color}-700 transition h-full flex flex-col items-center justify-center`}
          >
            <i
              className={`fas ${
                isRTL ? "fa-arrow-left" : "fa-arrow-right"
              } mb-2 text-2xl`}
            />
            <p>
              {t("view_all")} {title}
            </p>
          </Link>
        </SwiperSlide>
      </Swiper>

      <div className="flex justify-between items-center">
        <div />
        <div className="flex gap-3">
          {/* ✅ Use refs so Swiper can rebind after dir change */}
          <button
            ref={prevRef}
            type="button"
            className={`cursor-pointer text-gray-600 hover:text-${color}-600`}
            aria-label="Previous"
          >
            <i
              className={`fas ${
                isRTL ? "fa-chevron-right" : "fa-chevron-left"
              }`}
            />
          </button>
          <button
            ref={nextRef}
            type="button"
            className={`cursor-pointer text-gray-600 hover:text-${color}-600`}
            aria-label="Next"
          >
            <i
              className={`fas ${
                isRTL ? "fa-chevron-left" : "fa-chevron-right"
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
