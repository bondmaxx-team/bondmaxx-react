import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

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
      {/* ✅ Added basename here */}
      <Routes>
        {/* Routes WITH Header */}
        <Route element={<LayoutWithHeader />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/interior-colors" element={<InteriorColorsPage />} />
          <Route path="/search-dealer" element={<SearchDealerPage />} />
          <Route path="/color-collection" element={<ColorCollection />} />
          <Route
            path="/interior-colors/product-details"
            element={<ProductDetails />}
          />
        </Route>

        {/* Routes WITHOUT Header */}
        <Route element={<LayoutWithoutHeader />}>
          <Route path="/painting-services" element={<PaintingServices />} />
        </Route>

        {/* Fallback route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
