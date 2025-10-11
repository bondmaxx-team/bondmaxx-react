import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import About from "../pages/About";
import HeroSection from "../components/HeroSection";
import ProductSlider from "../components/ProductSlider";
import productsCollections from "../data/productsCollections";

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

  return (
    <div className="min-h-screen bg-white">
      <main className="mt-[70px]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <HeroSection onDiscoverColors={() => navigate("color-collection")} />
        </motion.div>

        <div className="max-w-[1400px] mx-auto px-6">
          <section
            className="py-20 relative overflow-hidden"
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
              className="max-w-7xl mx-auto px-6 mb-12 text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2
                className="text-3xl md:text-5xl font-bold mb-4"
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
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {t("products_description")}
              </p>
              <div
                className="w-32 h-1.5 mx-auto mt-6 rounded-full relative z-10"
                style={{
                  backgroundColor: "#203F84",
                }}
              />
            </motion.div>

            <div className="max-w-7xl mx-auto px-6 space-y-20">
              {productsCollections.map((product, index) => (
                <motion.div
                  key={product.titleKey}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.15,
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <ProductSlider
                    title={t(product.titleKey)}
                    products={product.collection}
                    productType={product.type}
                    color={product.color}
                    linkTo={product.linkTo}
                  />
                </motion.div>
              ))}
            </div>
          </section>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.15 }}
        >
          <About />
        </motion.div>
      </main>
    </div>
  );
}
