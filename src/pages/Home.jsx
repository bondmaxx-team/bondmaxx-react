import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import About from "../pages/About";
import HeroSection from "../components/HeroSection";
import ProductSlider from "../components/ProductSlider";

// استيراد المنتجات من الملفات
import oilPaintsProducts from "../data/oilPaintsProducts";
import waterPaintsProducts from "../data/waterPaintsProducts";
import epoxyProducts from "../data/epoxyProducts";
import accessoriesProducts from "../data/accessoriesProducts"; // إضافة الملحقات

export default function Home() {
  const location = useLocation();
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    const id = location.state?.scrollTo;
    if (id) {
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 0);
    }
  }, [location.state]);

  useEffect(() => {
    document.documentElement.dir = i18n.dir();
    document.documentElement.lang = i18n.language;
  }, [i18n.language, i18n]);

  const handleDiscoverColors = () => {
    navigate("/color-collection");
  };

  // قائمة صفحات المنتجات
  const productPages = [
    {
      href: "/OilPaintsPage",
      label: t("oil_paints"),
      icon: "fas fa-oil-can",
      gradient: "linear-gradient(135deg, #203F84 0%, #1a3366 100%)",
    },
    {
      href: "/WaterPaintsPage",
      label: t("water_paints"),
      icon: "fas fa-tint",
      gradient: "linear-gradient(135deg, #203F84 0%, #1a3366 100%)",
    },
    {
      href: "/PrimerPaintsPage",
      label: t("primer_paints"),
      icon: "fas fa-layer-group",
      gradient: "linear-gradient(135deg, #203F84 0%, #1a3366 100%)",
    },
    {
      href: "/InsulationPage",
      label: t("insulation"),
      icon: "fas fa-shield-alt",
      gradient: "linear-gradient(135deg, #203F84 0%, #1a3366 100%)",
    },
    {
      href: "/EpoxyPage",
      label: t("epoxy"),
      icon: "fas fa-fill-drip",
      gradient: "linear-gradient(135deg, #203F84 0%, #1a3366 100%)",
    },
    {
      href: "/PuttyPage",
      label: t("putty"),
      icon: "fas fa-tools",
      gradient: "linear-gradient(135deg, #203F84 0%, #1a3366 100%)",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <main>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <HeroSection onDiscoverColors={handleDiscoverColors} />
        </motion.div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          {/* سكشن المنتجات (السلايدرات) */}
          <section
            className="py-6 relative overflow-hidden"
            id="products-section"
          >
            {/* Gradient Background */}
            <div
              className="absolute inset-0 -z-10"
              style={{
                background:
                  "linear-gradient(to bottom right, #f9fafb, rgba(32, 63, 132, 0.05), rgba(32, 63, 132, 0.08))",
              }}
            />

            <div className="absolute inset-0 -z-10 opacity-20">
              <div
                className="absolute top-10 right-20 w-96 h-96 rounded-full blur-3xl animate-pulse-slow"
                style={{ backgroundColor: "#203F84" }}
              />
              <div
                className="absolute bottom-20 left-20 w-80 h-80 rounded-full blur-3xl animate-pulse-slow"
                style={{ animationDelay: "2s", backgroundColor: "#203F84" }}
              />
              <div
                className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full blur-3xl animate-pulse-slow"
                style={{ animationDelay: "1s", backgroundColor: "#203F84" }}
              />
            </div>

            <motion.div
              className="max-w-7xl mx-auto mb-8 sm:mb-10 md:mb-12 text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4"
                style={{
                  background:
                    "linear-gradient(to right, #374151, #203F84, #203F84)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                {t("our_products")}
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
                {t("products_description")}
              </p>
              <div
                className="w-24 sm:w-32 h-1 sm:h-1.5 mx-auto mt-4 sm:mt-6 rounded-full relative z-10"
                style={{
                  backgroundColor: "#203F84",
                }}
              />
            </motion.div>

            <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16 md:space-y-20">
              {/* سلايدر الدهانات الزيتية */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <ProductSlider
                  title="oil_paints"
                  products={oilPaintsProducts}
                  productType="oil-paints"
                  color="#203F84"
                  linkTo="/oil-paints"
                />
              </motion.div>

              {/* سلايدر الدهانات المائية */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <ProductSlider
                  title="water_paints"
                  products={waterPaintsProducts}
                  productType="water-paints"
                  color="#203F84"
                  linkTo="/water-paints"
                />
              </motion.div>

              {/* سلايدر الإيبوكسي */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <ProductSlider
                  title="epoxy_coatings"
                  products={epoxyProducts}
                  productType="epoxy"
                  color="#203F84"
                  linkTo="/epoxy"
                />
              </motion.div>

              {/* سلايدر الملحقات - جديد */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.45 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <ProductSlider
                  title="accessories"
                  products={accessoriesProducts}
                  productType="accessories"
                  color="#203F84"
                  linkTo="/accessories"
                />
              </motion.div>
            </div>
          </section>

          {/* سكشن صفحات المنتجات */}
          <section className="py-6">
            <motion.div
              className="max-w-7xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* العنوان */}
              <div className="text-center mb-8 sm:mb-10 md:mb-12">
                <h2
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4"
                  style={{
                    background:
                      "linear-gradient(to right, #374151, #203F84, #203F84)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  {t("explore_categories") || "استكشف الفئات"}
                </h2>
                <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
                  {t("categories_description") ||
                    "تصفح جميع فئات منتجاتنا المتنوعة"}
                </p>
                <div
                  className="w-24 sm:w-32 h-1 sm:h-1.5 mx-auto mt-4 sm:mt-6 rounded-full"
                  style={{
                    backgroundColor: "#203F84",
                  }}
                />
              </div>

              {/* شبكة البطاقات */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {productPages.map((page, index) => (
                  <motion.div
                    key={page.href}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <button
                      onClick={() => navigate(page.href)}
                      className="group relative w-full h-40 sm:h-48 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                      style={{
                        background: page.gradient,
                      }}
                    >
                      {/* الخلفية المتحركة */}
                      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />

                      {/* المحتوى */}
                      <div className="relative h-full flex flex-col items-center justify-center p-4 sm:p-6 text-white">
                        {/* الأيقونة */}
                        <div className="mb-3 sm:mb-4 transform group-hover:scale-110 transition-transform duration-300">
                          <i
                            className={`${page.icon} text-4xl sm:text-5xl md:text-6xl`}
                          ></i>
                        </div>

                        {/* النص */}
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-center">
                          {page.label}
                        </h3>

                        {/* السهم */}
                        <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300">
                          <i className="fas fa-arrow-left text-lg sm:text-xl"></i>
                        </div>
                      </div>

                      {/* Shine Effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                      </div>
                    </button>
                  </motion.div>
                ))}
              </div>

              {/* زر اكتشف جميع الألوان */}
              <motion.div
                className="flex justify-center rounded-full mt-6 sm:mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <button
                  onClick={handleDiscoverColors}
                  className="group relative w-full sm:w-auto sm:min-w-[320px] md:max-w-md h-16 sm:h-20 rounded-full overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  style={{
                    background:
                      "linear-gradient(135deg, #203F84 0%, #1a3366 100%)",
                  }}
                >
                  {/* الخلفية المتحركة */}
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />

                  {/* المحتوى */}
                  <div className="relative h-full flex items-center justify-center gap-3 sm:gap-4 px-6 sm:px-8 text-white">
                    <i className="fas fa-palette text-2xl sm:text-3xl transform group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300"></i>
                    <span className="text-lg sm:text-xl font-bold">
                      {t("cta_button") || "اكتشف جميع الألوان"}
                    </span>
                    <i className="fas fa-arrow-left text-lg sm:text-xl transform group-hover:translate-x-2 transition-transform duration-300"></i>
                  </div>

                  {/* Shine Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                  </div>
                </button>
              </motion.div>
            </motion.div>
          </section>
        </div>

        <About />
      </main>
    </div>
  );
}
