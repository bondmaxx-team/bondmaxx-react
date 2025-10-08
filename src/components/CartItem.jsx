import { useTranslation } from "react-i18next";
import { useShop } from "../context/ShopContext";

export default function CartItem({ item }) {
  const { t } = useTranslation();
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
    <div className="flex items-center justify-between gap-3 p-2 border rounded bg-white">
      <div className="flex items-center gap-3">
        <img
          alt={item.name || t("product")}
          src={item.image ? item.image : fallbackImage}
          onError={(e) => {
            e.target.src = fallbackImage;
          }}
          className="w-12 h-12 object-cover rounded-md border"
        />

        <div>
          <div className="font-medium">{t(item.name) || t("product")}</div>

          {item.price && (
            <div className="text-sm text-gray-500">{item.price} ₺</div>
          )}

          <div className="flex items-center gap-2 mt-1">
            <button
              onClick={handleDecrease}
              disabled={item.qty === 1}
              className={`w-6 h-6 flex items-center justify-center rounded-full text-xs transition 
                ${
                  item.qty === 1
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-gray-200 hover:bg-gray-300 text-gray-700"
                }`}
              title={t("decrease_qty")}
            >
              <i className="fas fa-minus"></i>
            </button>

            <span className="text-sm text-gray-800 font-medium">
              {item.qty}
            </span>

            <button
              onClick={handleIncrease}
              className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 text-xs"
              title={t("increase_qty")}
            >
              <i className="fas fa-plus"></i>
            </button>
          </div>
        </div>
      </div>

      <button
        title={t("remove_item")}
        type="button"
        className="text-red-600 hover:text-red-700"
        onClick={() => removeFromCart(item.id)}
      >
        <i className="fas fa-trash-alt"></i>
      </button>
    </div>
  );
}
