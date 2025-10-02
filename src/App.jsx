import "./App.css";
import {
  HashRouter as Router,
  Routes,
  Route,
  Outlet,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";

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

// Component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Create a Layout component
function LayoutWithHeader() {
  return (
    <>
      <Header />
      <Outlet /> {/* This renders the child routes */}
      <Footer />
    </>
  );
}

function LayoutWithoutHeader() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* ✅ أضفت هذا السطر */}
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
          <Route
            path="/interior-colors/product-details"
            element={<ProductDetails />}
          />
          <Route path="/painting-services" element={<PaintingServices />} />
        </Route>

        {/* Routes WITHOUT Header */}
        <Route element={<LayoutWithoutHeader />}></Route>

        {/* Fallback route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
