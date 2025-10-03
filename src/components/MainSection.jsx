import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import testImage from "../assets/color-1.png";
import { useNavigate, Link } from "react-router-dom";
import About from "../pages/About";
import HeroSection from "./HeroSection";
import ProductCard from "./MainSectionProductCard";
import { useShop } from "../context/ShopContext";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProductSlider = ({ title, products, color, linkTo }) => {
  return (
    <div className="mb-16">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        spaceBetween={16}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: `.${color}-next`,
          prevEl: `.${color}-prev`,
        }}
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
            <i className="fas fa-arrow-left mb-2 text-2xl"></i>
            <p>عرض جميع {title}</p>
          </Link>
        </SwiperSlide>
      </Swiper>

      <div className="flex justify-between items-center">
        <div></div>
        <div className="flex gap-3">
          <div
            className={`${color}-prev cursor-pointer text-gray-600 hover:text-${color}-600`}
          >
            <i className="fas fa-chevron-right"></i>
          </div>
          <div
            className={`${color}-next cursor-pointer text-gray-600 hover:text-${color}-600`}
          >
            <i className="fas fa-chevron-left"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

const MainSection = () => {
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
        name: "أزرق داخلي فاتح",
        color: "#BFDBFE",
        image: testImage,
      },
      { id: "interior-2", name: "أزرق داخلي متوسط", color: "#93C5FD" },
      { id: "interior-3", name: "أزرق داخلي غامق", color: "#60A5FA" },
      { id: "interior-4", name: "أزرق داخلي عميق", color: "#3B82F6" },
    ],
    exterior: [
      { id: "exterior-1", name: "أخضر خارجي فاتح", color: "#BBF7D0" },
      { id: "exterior-2", name: "أخضر خارجي متوسط", color: "#86EFAC" },
      { id: "exterior-3", name: "أخضر خارجي غامق", color: "#4ADE80" },
      { id: "exterior-4", name: "أخضر خارجي عميق", color: "#22C55E" },
    ],
    insulation: [
      { id: "insulation-1", name: "عازل حراري ذهبي", color: "#FDE68A" },
      { id: "insulation-2", name: "عازل مائي أصفر", color: "#FCD34D" },
      { id: "insulation-3", name: "عازل صوتي برتقالي", color: "#FBBF24" },
      { id: "insulation-4", name: "عازل متعدد الأغراض", color: "#F59E0B" },
    ],
    collection: [
      { id: "collection-1", name: "مجموعة البنفسجي الفاتح", color: "#DDD6FE" },
      { id: "collection-2", name: "مجموعة البنفسجي المتوسط", color: "#C4B5FD" },
      { id: "collection-3", name: "مجموعة البنفسجي الغامق", color: "#A78BFA" },
      { id: "collection-4", name: "مجموعة البنفسجي العميق", color: "#8B5CF6" },
    ],
  };

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <main className="mt-[70px]">
        <HeroSection onDiscoverColors={() => navigate("color-collection")} />

        <div className="max-w-[1400px] mx-auto px-6">
          <section className="py-16 bg-white" id="products-section">
            <div className="max-w-7xl mx-auto px-6 space-y-16">
              <ProductSlider
                title="الدهانات الداخلية"
                products={productsData.interior}
                color="blue"
                linkTo="interior-colors"
              />
              <ProductSlider
                title="الدهانات الخارجية"
                products={productsData.exterior}
                color="green"
                linkTo="exterior-colors.html"
              />

              <ProductSlider
                title="العوازل"
                products={productsData.insulation}
                color="yellow"
                linkTo="insulation.html"
              />

              <ProductSlider
                title="مجموعة الألوان"
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
