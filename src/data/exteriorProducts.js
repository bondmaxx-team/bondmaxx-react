import testImage from "../assets/color-1.png"; // صورة افتراضية للمنتجات الخارجية

// ✅ منتجات الدهانات الخارجية
const exteriorProducts = [
  {
    id: 1,
    nameKey: "bondmax_exterior_weatherproof",
    categoryKey: "walls",
    image: testImage,
    descriptionKey: "weather_resistant_finish",
    featuresKeys: ["uv_protection", "water_repellent", "long_last_color"],
  },
  {
    id: 2,
    nameKey: "bondmax_exterior_façade",
    categoryKey: "walls",
    image: testImage,
    descriptionKey: "perfect_for_facades",
    featuresKeys: ["anti_crack", "easy_application", "durable_finish"],
  },
  {
    id: 3,
    nameKey: "bondmax_exterior_metalwood",
    categoryKey: "metal_and_wood",
    image: testImage,
    descriptionKey: "protects_metal_and_wood",
    featuresKeys: ["rust_resistant", "smooth_finish", "long_lasting"],
  },
  {
    id: 4,
    nameKey: "bondmax_exterior_elastic",
    categoryKey: "walls",
    image: testImage,
    descriptionKey: "elastic_and_crack_free",
    featuresKeys: ["flexible_coating", "waterproof", "weatherproof"],
  },
  {
    id: 5,
    nameKey: "bondmax_exterior_premium",
    categoryKey: "walls",
    image: testImage,
    descriptionKey: "premium_outdoor_finish",
    featuresKeys: ["rich_colors", "fade_resistant", "easy_cleaning"],
  },
  {
    id: 6,
    nameKey: "bondmax_exterior_matt",
    categoryKey: "walls",
    image: testImage,
    descriptionKey: "matte_finish_exterior",
    featuresKeys: ["modern_look", "anti_dust", "washable_surface"],
  },
];

export default exteriorProducts;
