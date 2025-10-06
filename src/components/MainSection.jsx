import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import testImage from "../assets/color-1.png";
import { useNavigate, Link } from "react-router-dom";
import About from "../pages/About";
import HeroSection from "./HeroSection";
import ProductCard from "./MainSectionProductCard";
import { useShop } from "../context/ShopContext";
import { useTranslation } from "react-i18next";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProductSlider = ({ title, products, color, linkTo }) => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

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
        key={`${i18n.language}-${color}`} // ✅ force remount on lang change
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
const MainSection = () => {
  const { t } = useTranslation();
  const { toggleFavorite, addToCart } = useShop();
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedFavorites = JSON.parse(
      localStorage.getItem("bondmaxx-favorites") || "[]"
    );
    const savedCart = JSON.parse(localStorage.getItem("bondmaxx-cart") || "[]");
    setFavorites(savedFavorites);
    setCart(savedCart);
  }, []);

  const handleToggleFavorite = (product) => {
    toggleFavorite(product.id);
  };

  const handleAddToCart = (product) => {
    addToCart(product, 1);
  };

  const productsData = {
    interior: [
      {
        id: "interior-1",
        name: t("light_blue_interior"),
        color: "#BFDBFE",
        image: testImage,
      },
      {
        id: "interior-2",
        name: t("medium_blue_interior"),
        color: "#93C5FD",
      },
      {
        id: "interior-3",
        name: t("dark_blue_interior"),
        color: "#60A5FA",
      },
      {
        id: "interior-4",
        name: t("deep_blue_interior"),
        color: "#3B82F6",
      },
    ],
    exterior: [
      {
        id: "exterior-1",
        name: t("light_green_exterior"),
        color: "#BBF7D0",
      },
      {
        id: "exterior-2",
        name: t("medium_green_exterior"),
        color: "#86EFAC",
      },
      {
        id: "exterior-3",
        name: t("dark_green_exterior"),
        color: "#4ADE80",
      },
      {
        id: "exterior-4",
        name: t("deep_green_exterior"),
        color: "#22C55E",
      },
    ],
    insulation: [
      {
        id: "insulation-1",
        name: t("thermal_insulation_gold"),
        color: "#FDE68A",
      },
      {
        id: "insulation-2",
        name: t("water_insulation_yellow"),
        color: "#FCD34D",
      },
      {
        id: "insulation-3",
        name: t("sound_insulation_orange"),
        color: "#FBBF24",
      },
      {
        id: "insulation-4",
        name: t("multi_purpose_insulation"),
        color: "#F59E0B",
      },
    ],
    collection: [
      {
        id: "collection-1",
        name: t("light_purple_collection"),
        color: "#DDD6FE",
      },
      {
        id: "collection-2",
        name: t("medium_purple_collection"),
        color: "#C4B5FD",
      },
      {
        id: "collection-3",
        name: t("dark_purple_collection"),
        color: "#A78BFA",
      },
      {
        id: "collection-4",
        name: t("deep_purple_collection"),
        color: "#8B5CF6",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <main className="mt-[70px]">
        <HeroSection onDiscoverColors={() => navigate("color-collection")} />

        <div className="max-w-[1400px] mx-auto px-6">
          <section className="py-16 bg-white" id="products-section">
            <div className="max-w-7xl mx-auto px-6 space-y-16">
              <ProductSlider
                title={t("interior_paints")}
                products={productsData.interior}
                color="blue"
                linkTo="interior-colors"
              />
              <ProductSlider
                title={t("exterior_paints")}
                products={productsData.exterior}
                color="green"
                linkTo="exterior-colors.html"
              />

              <ProductSlider
                title={t("insulation")}
                products={productsData.insulation}
                color="yellow"
                linkTo="insulation.html"
              />

              <ProductSlider
                title={t("color_collection")}
                products={productsData.collection}
                color="purple"
                linkTo="color-collection"
              />
            </div>
          </section>
        </div>

        <About />
      </main>
    </div>
  );
};

export default MainSection;
