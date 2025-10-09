import { useTranslation } from "react-i18next";
import { useShop } from "../context/ShopContext";

export default function FavItem({ item }) {
  const { t, i18n } = useTranslation();
  const { toggleFavorite } = useShop();
  const fallbackImage = null;

  return (
    <div className="flex items-center justify-between gap-3 p-2 border rounded bg-white">
      <div className="flex items-center gap-3">
        {item.type === "color" ? (
          <div
            className="w-12 h-12 rounded-md border shadow-inner"
            style={{ backgroundColor: item.hex || "#ffffff" }}
            title={item.name[i18n.language] || item.name["en"] || item.nameKey}
          />
        ) : (
          <img
            alt={item.name[i18n.language] || t("product")}
            src={item.image ? item.image : fallbackImage}
            onError={(e) => {
              e.target.src = fallbackImage;
            }}
            className="w-12 h-12 object-cover rounded-md border"
          />
        )}

        <div>
          <div className="font-medium">
            {item.name[i18n.language] || item.name["en"] || item.nameKey}
          </div>
          {item.price && (
            <div className="text-sm text-gray-500">{item.price} ₺</div>
          )}
        </div>
      </div>

      <button
        title={t("remove_item")}
        type="button"
        className="text-red-600 hover:text-red-700"
        onClick={() => toggleFavorite(item)}
      >
        <i className="fas fa-trash-alt"></i>
      </button>
    </div>
  );
}
