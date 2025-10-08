import testImage from "../assets/color-1.png";

// ✅ منتجات الدهانات الداخلية
const interiorProducts = [
  {
    id: 1,
    nameKey: "bondmax_matte_paint",
    categoryKey: "walls",
    image: testImage,
    descriptionKey: "beautiful_walls_everyday",
    featuresKeys: [
      "luxurious_silk_touch",
      "high_washability",
      "precise_warm_colors",
    ],
  },
  {
    id: 2,
    nameKey: "bondmax_ceiling_white",
    categoryKey: "ceilings",
    image: testImage,
    descriptionKey: "perfect_white_ceiling",
    featuresKeys: ["anti_yellowing", "easy_application", "quick_drying"],
  },
  {
    id: 3,
    nameKey: "bondmax_luxury_silk",
    categoryKey: "walls",
    image: testImage,
    descriptionKey: "luxury_silk_finish",
    featuresKeys: ["elegant_sheen", "stain_resistant", "long_lasting_beauty"],
  },
  {
    id: 4,
    nameKey: "bondmax_kids_safe",
    categoryKey: "walls",
    image: testImage,
    descriptionKey: "safe_for_children",
    featuresKeys: ["non_toxic_formula", "easy_cleaning", "vibrant_colors"],
  },
  {
    id: 5,
    nameKey: "bondmax_kitchen_bath",
    categoryKey: "walls",
    image: testImage,
    descriptionKey: "moisture_resistant_paint",
    featuresKeys: ["anti_mold", "water_resistant", "easy_maintenance"],
  },
  {
    id: 6,
    nameKey: "bondmax_premium_ceiling",
    categoryKey: "ceilings",
    image: testImage,
    descriptionKey: "premium_ceiling_finish",
    featuresKeys: [
      "smooth_application",
      "no_drip_formula",
      "excellent_coverage",
    ],
  },
];

export default interiorProducts;
