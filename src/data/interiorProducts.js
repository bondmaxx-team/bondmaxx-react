import i18n from "../i18n";
import testImage from "../assets/color-1.png";

const t = i18n.t;

const interiorProducts = [
  {
    id: 1,
    name: t("bondmax_matte_paint"),
    category: t("paints"),
    image: testImage,
    description: t("beautiful_walls_everyday"),
    features: [
      t("luxurious_silk_touch"),
      t("high_washability"),
      t("precise_warm_colors"),
    ],
  },
  {
    id: 2,
    name: t("bondmax_matte_paint"),
    category: t("paints"),
    image: testImage,
    description: t("beautiful_walls_everyday"),
    features: [
      t("luxurious_silk_touch"),
      t("high_washability"),
      t("precise_warm_colors"),
    ],
  },
  {
    id: 3,
    name: t("bondmax_matte_paint"),
    category: t("paints"),
    image: testImage,
    description: t("beautiful_walls_everyday"),
    features: [
      t("luxurious_silk_touch"),
      t("high_washability"),
      t("precise_warm_colors"),
    ],
  },
];

export default interiorProducts;
