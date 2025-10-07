import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import About from "../pages/About";
import HeroSection from "../components/HeroSection";
import ProductSlider from "../components/ProductSlider";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import productsData from "../data/productsData";

export default function Home() {
  const location = useLocation();
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    const id = location.state?.scrollTo;
    if (id) {
      // ensure DOM is painted
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 0);
    }
  }, [location.state]);

  // Set document direction based on language
  useEffect(() => {
    document.documentElement.dir = i18n.dir();
    document.documentElement.lang = i18n.language;
  }, [i18n.language, i18n]);

  return (
    <div className="min-h-screen bg-white">
      <main className="mt-[70px]">
        <HeroSection onDiscoverColors={() => navigate("color-collection")} />

        <div className="max-w-[1400px] mx-auto px-6">
          <section className="py-16 bg-white" id="products-section">
            <div className="max-w-7xl mx-auto px-6 space-y-16">
              {productsData.map((product) => (
                <ProductSlider
                  key={product.title}
                  title={product.title}
                  products={product.collection}
                  color={product.color}
                  linkTo={product.linkTo}
                />
              ))}
            </div>
          </section>
        </div>
        <About />
      </main>
    </div>
  );
}
