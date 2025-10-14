import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import ProductCard from "./MainSectionProductCard";
import { useTranslation } from "react-i18next";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProductSlider = ({ title, products, color, linkTo, productType }) => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n?.language === "ar";

  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const buttonColor = "#203F84";
  const buttonHoverColor = "#1a3269";

  useEffect(() => {
    document.documentElement.setAttribute("dir", isRTL ? "rtl" : "ltr");
  }, [isRTL]);

  useEffect(() => {
    const swiper = swiperRef.current;
    if (!swiper) return;

    swiper.changeDirection(isRTL ? "rtl" : "ltr", false);
    swiper.params.navigation.prevEl = prevRef.current;
    swiper.params.navigation.nextEl = nextRef.current;
    swiper.navigation.destroy();
    swiper.navigation.init();
    swiper.navigation.update();
    swiper.update();
  }, [isRTL]);

  const translatedTitle = t(title);

  return (
    <div className="mb-6" dir={isRTL ? "rtl" : "ltr"}>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">{translatedTitle}</h2>
      </div>

      <Swiper
        key={`${i18n?.language}-${color}`}
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        spaceBetween={16}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation = {
            ...(swiper.params.navigation || {}),
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          };
          swiper.params.pagination.el = ".custom-pagination";
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
        className="mb-4 relative"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} productType={productType} />
          </SwiperSlide>
        ))}

        <SwiperSlide>
          <Link
            to={linkTo}
            className="block text-white rounded-lg shadow-md p-6 text-center transition h-full flex flex-col items-center justify-center"
            style={{
              backgroundColor: buttonColor,
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = buttonHoverColor)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = buttonColor)
            }
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

        <div
          className={`custom-pagination flex ${
            isRTL ? "justify-start" : "justify-end"
          } mt-4`}
        />
      </Swiper>

      <div className="flex justify-between items-center">
        <div />
        <div className="flex gap-3">
          <button
            ref={prevRef}
            type="button"
            className="cursor-pointer transition-colors"
            style={{ color: "#6b7280" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = buttonColor)}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#6b7280")}
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
            className="cursor-pointer transition-colors"
            style={{ color: "#6b7280" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = buttonColor)}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#6b7280")}
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
