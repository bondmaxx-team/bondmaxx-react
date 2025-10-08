// ✅ احفظ المفاتيح فقط، بدون ترجمة
const productsCollections = [
  {
    titleKey: "interior_paints", // مفتاح الترجمة
    color: "blue",
    linkTo: "interior-colors",
    collection: [
      {
        id: "interior-1",
        nameKey: "light_blue_interior", // مفتاح الترجمة
        color: "#BFDBFE",
      },
      {
        id: "interior-2",
        nameKey: "medium_blue_interior",
        color: "#93C5FD",
      },
      {
        id: "interior-3",
        nameKey: "dark_blue_interior",
        color: "#60A5FA",
      },
      {
        id: "interior-4",
        nameKey: "deep_blue_interior",
        color: "#3B82F6",
      },
    ],
  },
  {
    titleKey: "exterior_paints",
    color: "green",
    linkTo: "exterior-colors",
    collection: [
      {
        id: "exterior-1",
        nameKey: "light_green_exterior",
        color: "#BBF7D0",
      },
      {
        id: "exterior-2",
        nameKey: "medium_green_exterior",
        color: "#86EFAC",
      },
      {
        id: "exterior-3",
        nameKey: "dark_green_exterior",
        color: "#4ADE80",
      },
      {
        id: "exterior-4",
        nameKey: "deep_green_exterior",
        color: "#22C55E",
      },
    ],
  },
  {
    titleKey: "insulation_products",
    color: "orange",
    linkTo: "insulation",
    collection: [
      {
        id: "insulation-1",
        nameKey: "thermal_insulation_gold",
        color: "#FDE68A",
      },
      {
        id: "insulation-2",
        nameKey: "water_insulation_yellow",
        color: "#FCD34D",
      },
      {
        id: "insulation-3",
        nameKey: "sound_insulation_orange",
        color: "#FBBF24",
      },
      {
        id: "insulation-4",
        nameKey: "multi_purpose_insulation",
        color: "#F59E0B",
      },
    ],
  },
  {
    titleKey: "color_collection",
    color: "purple",
    linkTo: "color-collection",
    collection: [
      {
        id: "collection-1",
        nameKey: "light_purple_collection",
        color: "#DDD6FE",
      },
      {
        id: "collection-2",
        nameKey: "medium_purple_collection",
        color: "#C4B5FD",
      },
      {
        id: "collection-3",
        nameKey: "dark_purple_collection",
        color: "#A78BFA",
      },
      {
        id: "collection-4",
        nameKey: "deep_purple_collection",
        color: "#8B5CF6",
      },
    ],
  },
];

export default productsCollections;
