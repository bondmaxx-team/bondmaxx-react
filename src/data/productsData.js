import i18n from "../i18n";

const productsData = [
  {
    title: i18n.t("interior_paints"),
    color: "blue",
    linkTo: "interior-colors",
    collection: [
      {
        id: "interior-1",
        name: i18n.t("light_blue_interior"),
        color: "#BFDBFE",
      },
      {
        id: "interior-2",
        name: i18n.t("medium_blue_interior"),
        color: "#93C5FD",
      },
      {
        id: "interior-3",
        name: i18n.t("dark_blue_interior"),
        color: "#60A5FA",
      },
      {
        id: "interior-4",
        name: i18n.t("deep_blue_interior"),
        color: "#3B82F6",
      },
    ],
  },
  {
    title: i18n.t("exterior_paints"),
    color: "green",
    linkTo: "exterior-colors.html",
    collection: [
      {
        id: "exterior-1",
        name: i18n.t("light_green_exterior"),
        color: "#BBF7D0",
      },
      {
        id: "exterior-2",
        name: i18n.t("medium_green_exterior"),
        color: "#86EFAC",
      },
      {
        id: "exterior-3",
        name: i18n.t("dark_green_exterior"),
        color: "#4ADE80",
      },
      {
        id: "exterior-4",
        name: i18n.t("deep_green_exterior"),
        color: "#22C55E",
      },
    ],
  },
  {
    title: i18n.t("insulation"),
    color: "yellow",
    linkTo: "insulation.html",
    collection: [
      {
        id: "insulation-1",
        name: i18n.t("thermal_insulation_gold"),
        color: "#FDE68A",
      },
      {
        id: "insulation-2",
        name: i18n.t("water_insulation_yellow"),
        color: "#FCD34D",
      },
      {
        id: "insulation-3",
        name: i18n.t("sound_insulation_orange"),
        color: "#FBBF24",
      },
      {
        id: "insulation-4",
        name: i18n.t("multi_purpose_insulation"),
        color: "#F59E0B",
      },
    ],
  },
  {
    title: i18n.t("color_collection"),
    color: "purple",
    linkTo: "color-collection",
    collection: [
      {
        id: "collection-1",
        name: i18n.t("light_purple_collection"),
        color: "#DDD6FE",
      },
      {
        id: "collection-2",
        name: i18n.t("medium_purple_collection"),
        color: "#C4B5FD",
      },
      {
        id: "collection-3",
        name: i18n.t("dark_purple_collection"),
        color: "#A78BFA",
      },
      {
        id: "collection-4",
        name: i18n.t("deep_purple_collection"),
        color: "#8B5CF6",
      },
    ],
  },
];

export default productsData;
