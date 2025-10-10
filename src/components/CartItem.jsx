import { useTranslation } from "react-i18next";
import { useShop } from "../context/ShopContext";

export default function CartItem({ item }) {
  const { t, i18n } = useTranslation();
  const { setQty, removeFromCart } = useShop();
  const fallbackImage = null;

  const handleIncrease = () => {
    setQty(item.id, (item.qty || 0) + 1);
  };

  const handleDecrease = () => {
    if (item.qty > 1) {
      setQty(item.id, item.qty - 1);
    }
  };

  return (
    <div className="flex items-center gap-4 p-4 border-2 border-gray-100 rounded-xl bg-white hover:border-gray-200 transition-all duration-300">
      {/* Product Image */}
      <div className="flex-shrink-0">
        <img
          alt={item.name || t("product")}
          src={item.image ? item.image : fallbackImage}
          onError={(e) => {
            e.target.src = fallbackImage;
          }}
          className="w-16 h-16 object-cover rounded-lg border border-gray-200"
        />
      </div>

      {/* Product Info & Quantity Controls */}
      <div className="flex-grow">
        <h3
          className="font-bold text-gray-900 text-base mb-2 line-clamp-1"
          title={item.name[i18n.language] || item.name["en"] || item.nameKey}
        >
          {item.name[i18n.language] || item.name["en"] || item.nameKey}
        </h3>

        {/* Quantity Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleDecrease}
            disabled={item.qty === 1}
            className={`w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-200 ${
              item.qty === 1
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "bg-gray-100 hover:bg-gray-200 text-gray-700"
            }`}
            title={t("decrease_qty")}
          >
            <i className="fas fa-minus text-xs"></i>
          </button>

          <span className="text-base text-gray-900 font-bold min-w-[2rem] text-center">
            {item.qty}
          </span>

          <button
            onClick={handleIncrease}
            className="w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-200"
            style={{ backgroundColor: "#E8EEF7", color: "#203F84" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#d0dff5";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#E8EEF7";
            }}
            title={t("increase_qty")}
          >
            <i className="fas fa-plus text-xs"></i>
          </button>
        </div>
      </div>

      {/* Remove Button */}
      <button
        title={t("remove_item")}
        type="button"
        className="flex-shrink-0 text-red-500 hover:text-red-600 transition-colors duration-200 p-2"
        onClick={() => removeFromCart(item.id)}
      >
        <i className="fas fa-trash-alt text-lg"></i>
      </button>
    </div>
  );
}
