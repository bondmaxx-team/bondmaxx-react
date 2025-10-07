import "./App.css";
import {
  HashRouter as Router,
  Routes,
  Route,
  Outlet,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import { ShopProvider } from "./context/ShopContext";
import { ErrorBoundary } from "react-error-boundary";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Fallback from "./components/Fallback";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/ContactUs";
import NotFound from "./pages/NotFound";
import ProductDetails from "./pages/ProductDetails";
import InteriorColorsPage from "./pages/InteriorColors";
import SearchDealerPage from "./pages/SearchDealer";
import ColorCollection from "./pages/ColorCollection";
import PaintingServices from "./pages/PaintingServices";
import ExteriorColorsPage from "./pages/ExteriorColors";
import InsulationPage from "./pages/Insulation";
import { useTranslation } from "react-i18next";
import ImprintPage from "./pages/Imprint";
import PrivacyPolicyPage from "./pages/PrivacyPolicy";
import DataProtectionPage from "./pages/DataProtection";

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Layouts
function LayoutWithHeader() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Apply direction based on language
    if (i18n.language === "ar") {
      document.documentElement.dir = "rtl";
      document.documentElement.lang = "ar";
    } else {
      document.documentElement.dir = "ltr";
      document.documentElement.lang = i18n.language;
    }
  }, [i18n.language]);
  return (
    <ErrorBoundary
      FallbackComponent={Fallback}
      onReset={() => window.location.reload()}
    >
      <ShopProvider>
        <Router>
          <ScrollToTop />
          <Routes>
            {/* Routes WITH Header */}
            <Route element={<LayoutWithHeader />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/interior-colors" element={<InteriorColorsPage />} />
              <Route path="/exterior-colors" element={<ExteriorColorsPage />} />
              <Route path="/insulation" element={<InsulationPage />} />
              <Route path="/search-dealer" element={<SearchDealerPage />} />
              <Route path="/color-collection" element={<ColorCollection />} />
              <Route path="/product-details" element={<ProductDetails />} />
              <Route path="/painting-services" element={<PaintingServices />} />
              <Route path="/imprint" element={<ImprintPage />} />
              <Route path="/PrivacyPolicy" element={<PrivacyPolicyPage />} />
              <Route path="/DataProtection" element={<DataProtectionPage />} />
            </Route>

            {/* Fallback */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </ShopProvider>
    </ErrorBoundary>
  );
}

export default App;
