import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import About from "../pages/About";
import HeroSection from "../components/HeroSection";
import ProductSlider from "../components/ProductSlider";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
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
        <HeroSection onDiscoverColors={() => navigate("color-collection")} />
        <div className="max-w-[1400px] mx-auto px-6">
          <section className="py-16 bg-white" id="products-section">
            <div className="max-w-7xl mx-auto px-6 space-y-16">
              {productsCollections.map((product) => (
                <ProductSlider
                  key={product.titleKey}
                  title={t(product.titleKey)}
                  products={product.collection}
                  productType={product.type}
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
