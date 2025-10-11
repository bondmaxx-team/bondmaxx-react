import { useNavigate } from "react-router-dom";
import { useShop } from "../context/ShopContext";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";

const ProductCard = ({
  product,
  onClick,
  productType = "interior",
  categoryMap = {},
}) => {
  const { t, i18n } = useTranslation();
  const { addToCart, inCart } = useShop();
  const navigate = useNavigate();
  const lang = i18n.language;
  const isRTL = i18n.dir() === "rtl";
  const isInCart = inCart(product.id);

  const handleCartClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);

    if (!isInCart) {
      toast.success(t("added_to_cart"));
    } else {
      toast.info(t("removed_from_cart"));
    }
  };

  const handleCardClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (onClick) {
      onClick(product);
    } else {
      navigate(`/product-details?id=${product.id}&type=${productType}`);
    }
  };

  // Get translated data with proper fallback
  const productName =
    typeof product.name === "object"
      ? product.name?.[lang] ||
        product.name?.ar ||
        product.name?.en ||
        product.name?.tr ||
        product.name?.de ||
        ""
      : product.name || "";

  const productDescription =
    typeof product.description === "object"
      ? product.description?.[lang] ||
        product.description?.ar ||
        product.description?.en ||
        product.description?.tr ||
        product.description?.de ||
        ""
      : product.description || "";

  // Handle category - get translation from categoryMap
  let categoryName = "";
  if (product.category) {
    // إذا كان category عبارة عن string key مثل "walls"
    if (typeof product.category === "string" && categoryMap[product.category]) {
      const categoryTranslations = categoryMap[product.category];
      categoryName =
        categoryTranslations?.[lang] ||
        categoryTranslations?.ar ||
        categoryTranslations?.en ||
        categoryTranslations?.tr ||
        categoryTranslations?.de ||
        product.category;
    }
    // إذا كان category object فيه ترجمات مباشرة
    else if (typeof product.category === "object" && product.category.name) {
      categoryName =
        product.category.name?.[lang] ||
        product.category.name?.ar ||
        product.category.name?.en ||
        product.category.name?.tr ||
        product.category.name?.de ||
        "";
    } else if (typeof product.category === "object") {
      categoryName =
        product.category?.[lang] ||
        product.category?.ar ||
        product.category?.en ||
        product.category?.tr ||
        product.category?.de ||
        "";
    } else {
      categoryName = product.category;
    }
  }

  // Handle features - could be array or object with translations
  let features = [];
  if (product.features) {
    if (Array.isArray(product.features)) {
      features = product.features;
    } else if (typeof product.features === "object") {
      features =
        product.features?.[lang] ||
        product.features?.ar ||
        product.features?.en ||
        product.features?.tr ||
        product.features?.de ||
        [];
    }
  }

  return (
    <div
      onClick={handleCardClick}
      className="bg-white rounded-xl overflow-hidden relative group transition-all duration-300 cursor-pointer flex flex-col"
      style={{
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        border: "2px solid #e5e7eb",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 8px 16px rgba(32, 63, 132, 0.2)";
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.borderColor = "#203F84";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.borderColor = "#e5e7eb";
      }}
    >
      {/* أزرار السلة */}
      <div
        className={`absolute top-2 ${
          isRTL ? "left-2" : "right-2"
        } z-10 flex gap-1.5`}
      >
        <button
          onClick={handleCartClick}
          className="p-1.5 bg-white rounded-full shadow-md transition-all duration-200 hover:shadow-lg"
          aria-label={isInCart ? t("remove_from_cart") : t("add_to_cart")}
        >
          <i
            className={`fas fa-shopping-cart ${
              isInCart ? "text-blue-900" : "text-gray-600"
            }`}
            style={{ fontSize: "14px" }}
          ></i>
        </button>
      </div>

      {/* صورة المنتج */}
      {product.image && (
        <div
          className="w-full bg-gradient-to-br from-blue-50 to-white p-4 flex items-center justify-center"
          style={{ minHeight: "180px" }}
        >
          <img
            src={product.image}
            alt={productName}
            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
            style={{ maxHeight: "160px" }}
          />
        </div>
      )}

      {/* محتوى الكارد */}
      <div className="p-3 flex-grow flex flex-col" dir={isRTL ? "rtl" : "ltr"}>
        {/* الفئة - عرض فقط إذا كانت موجودة في categoryMap */}
        {categoryName && categoryName !== product.category && (
          <div className="mb-2">
            <span
              className="inline-block px-2 py-0.5 text-xs font-medium rounded-full"
              style={{ backgroundColor: "#E8EEF7", color: "#203F84" }}
            >
              {categoryName}
            </span>
          </div>
        )}

        {/* اسم المنتج */}
        <h3
          className="font-bold text-gray-900 text-sm mb-2 leading-snug line-clamp-2"
          style={{ minHeight: "2.5rem" }}
        >
          {productName}
        </h3>

        {/* الوصف */}
        {productDescription && (
          <p
            className="text-xs text-gray-600 mb-3 leading-relaxed line-clamp-2"
            style={{ minHeight: "2rem" }}
          >
            {productDescription}
          </p>
        )}

        {/* المميزات */}
        {features && features.length > 0 && (
          <div className="mb-3 space-y-1.5 flex-grow">
            {features.slice(0, 3).map((feature, index) => (
              <div key={index} className="flex items-start gap-1.5">
                <i
                  className="fas fa-check mt-0.5"
                  style={{ fontSize: "10px", color: "#203F84" }}
                ></i>
                <span className="text-xs text-gray-700 leading-relaxed">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* زر عرض المنتج */}
        <button
          onClick={handleCardClick}
          className="w-full py-2.5 px-3 text-white text-sm font-semibold rounded-lg transition-all duration-300 mt-auto"
          style={{
            background: "linear-gradient(135deg, #203F84 0%, #1a3366 100%)",
            boxShadow: "0 2px 4px rgba(32, 63, 132, 0.3)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background =
              "linear-gradient(135deg, #1a3366 0%, #142952 100%)";
            e.currentTarget.style.transform = "scale(1.02)";
            e.currentTarget.style.boxShadow =
              "0 4px 8px rgba(32, 63, 132, 0.4)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background =
              "linear-gradient(135deg, #203F84 0%, #1a3366 100%)";
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow =
              "0 2px 4px rgba(32, 63, 132, 0.3)";
          }}
        >
          {t("view_product") || "عرض المنتج"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
