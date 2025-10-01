import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import testImage from "../assets/color-1.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useNavigate, Link } from "react-router-dom";

const HeroSection = ({ onDiscoverColors }) => {
  return (
    <section
      className="relative h-[90vh] flex items-center justify-center text-center text-white"
      style={{
        background:
          "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1600') no-repeat center center/cover",
      }}
    >
      <div className="relative z-10 max-w-2xl px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          مرحباً بكم في عالم BONDMAXX
        </h1>
        <p className="text-lg md:text-xl mb-8 leading-relaxed">
          اكتشف مجموعة استثنائية من الألوان والدهانات عالية الجودة. نحن نقدم
          حلولاً مبتكرة ومتطورة لجميع احتياجاتك في الطلاء والديكور، مع ضمان
          الجودة والأناقة في كل تفصيل.
        </p>
        <button
          onClick={onDiscoverColors}
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full shadow-lg transition text-white font-medium"
        >
          <i className="fas fa-palette"></i>
          اكتشف جميع الألوان
        </button>
      </div>
    </section>
  );
};

const ProductCard = ({ product, onToggleFavorite, onAddToCart }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = (e) => {
    e.preventDefault(); // Prevent navigation when clicking favorite
    e.stopPropagation();
    setIsFavorite(!isFavorite);
    onToggleFavorite(product);
  };

  const handleCartClick = (e) => {
    e.preventDefault(); // Prevent navigation when clicking cart
    e.stopPropagation();
    onAddToCart(product);
  };

  // Create query string from product object
  const productQuery = new URLSearchParams({
    id: product.id,
    name: product.name,
    price: product.price,
    image: product.image || "",
    color: product.color || "",
    description: product.description || "",
    category: product.category || "",
  }).toString();

  return (
    <Link
      to={`/interior-colors/product-details?${productQuery}`}
      className="block bg-gray-100 rounded-lg shadow-md p-6 text-center relative group hover:shadow-lg transition-shadow"
    >
      <div className="absolute top-3 left-2 z-10 flex gap-2">
        <button
          onClick={handleFavoriteClick}
          className="p-1 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
          aria-label="إضافة إلى المفضلة"
        >
          <i
            className={`fa-heart transition-colors ${
              isFavorite
                ? "fas text-red-500"
                : "far text-gray-400 hover:text-red-500"
            }`}
          ></i>
        </button>
        <button
          onClick={handleCartClick}
          className="p-1 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
          aria-label="أضف إلى السلة"
          title="أضف إلى السلة"
        >
          <i className="fas fa-shopping-cart text-gray-500 hover:text-emerald-600 transition-colors"></i>
        </button>
      </div>

      <h3 className="font-semibold mb-2">{product.name}</h3>

      {product.image ? (
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-28 object-contain rounded"
        />
      ) : (
        <div
          className="w-full h-32 rounded"
          style={{ backgroundColor: product.color }}
        ></div>
      )}
    </Link>
  );
};

const ProductSlider = ({
  title,
  products,
  color,
  linkTo,
  onToggleFavorite,
  onAddToCart,
}) => {
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
        className="mb-4 left-bottom-pagination relative"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard
              product={product}
              onToggleFavorite={onToggleFavorite}
              onAddToCart={onAddToCart}
            />
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

const IndustriesSection = () => {
  const industries = [
    {
      icon: "fa-home",
      title: "القطاع السكني",
      description:
        "حلول طلاء متطورة للمنازل والشقق والفيلات مع ضمان الجودة والأناقة",
    },
    {
      icon: "fa-building",
      title: "القطاع التجاري",
      description:
        "طلاء المباني التجارية والمكاتب والمراكز التسويقية بأحدث التقنيات",
    },
    {
      icon: "fa-industry",
      title: "القطاع الصناعي",
      description:
        "حلول طلاء متخصصة للمنشآت الصناعية والمصانع مقاومة للظروف القاسية",
    },
    {
      icon: "fa-ship",
      title: "القطاع البحري",
      description:
        "طلاء السفن والمنشآت البحرية بتقنيات مقاومة للتآكل والمياه المالحة",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            الصناعات التي نخدمها
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            نقدم حلول الطلاء المتخصصة والمبتكرة لمختلف الصناعات والقطاعات، مع
            ضمان أعلى معايير الجودة والأداء
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-10 text-center transition-all duration-300 cursor-pointer border border-gray-200 hover:bg-gradient-to-br hover:from-blue-50 hover:to-blue-100 hover:-translate-y-2 hover:shadow-xl"
            >
              <i
                className={`fas ${industry.icon} text-6xl text-blue-600 mb-6 transition-all duration-300`}
              ></i>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {industry.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MainSection = () => {
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
    const newFavorites = favorites.some((f) => f.id === product.id)
      ? favorites.filter((f) => f.id !== product.id)
      : [...favorites, product];

    setFavorites(newFavorites);
    localStorage.setItem("bondmaxx-favorites", JSON.stringify(newFavorites));
  };

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    localStorage.setItem("bondmaxx-cart", JSON.stringify(newCart));
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
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-6 space-y-16">
              <ProductSlider
                title="الدهانات الداخلية"
                products={productsData.interior}
                color="blue"
                linkTo="interior-colors"
                onToggleFavorite={handleToggleFavorite}
                onAddToCart={handleAddToCart}
              />
              <ProductSlider
                title="الدهانات الخارجية"
                products={productsData.exterior}
                color="green"
                linkTo="exterior-colors.html"
                onToggleFavorite={handleToggleFavorite}
                onAddToCart={handleAddToCart}
              />

              <ProductSlider
                title="العوازل"
                products={productsData.insulation}
                color="yellow"
                linkTo="insulation.html"
                onToggleFavorite={handleToggleFavorite}
                onAddToCart={handleAddToCart}
              />

              <ProductSlider
                title="مجموعة الألوان"
                products={productsData.collection}
                color="purple"
                linkTo="color-collection"
                onToggleFavorite={handleToggleFavorite}
                onAddToCart={handleAddToCart}
              />
            </div>
          </section>
        </div>

        <IndustriesSection />

        <a
          href="https://wa.me/4917666990043"
          target="_blank"
          rel="noopener noreferrer"
          title="تواصل معنا عبر واتساب"
          className="fixed bottom-5 right-5 w-12 h-12 md:w-16 md:h-16 z-50 cursor-pointer animate-bounce"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            className="w-full h-full rounded-full shadow-lg transform transition-transform duration-300 hover:scale-110"
          />
        </a>
      </main>
    </div>
  );
};

export default MainSection;
