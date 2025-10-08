import testImage from "../assets/color-1.png";

// ✅ احفظ المفاتيح فقط بدون ترجمة
const insulationProducts = [
  {
    id: 1,
    nameKey: "thermal_bondmax_premium",
    categoryKey: "thermal_insulation",
    image: testImage,
    descriptionKey: "thermal_bondmax_premium_desc",
    featuresKeys: [
      "reduces_energy_consumption",
      "moisture_resistant",
      "easy_installation",
    ],
  },
  {
    id: 2,
    nameKey: "sound_bondmax_excellent",
    categoryKey: "sound_insulation",
    image: testImage,
    descriptionKey: "sound_bondmax_excellent_desc",
    featuresKeys: [
      "excellent_sound_absorption",
      "lightweight",
      "durable_long_lasting",
    ],
  },
  {
    id: 3,
    nameKey: "thermal_bondmax_villas",
    categoryKey: "thermal_insulation",
    image: testImage,
    descriptionKey: "thermal_bondmax_villas_desc",
    featuresKeys: [
      "advanced_insulation",
      "improves_energy_efficiency",
      "fire_resistant",
    ],
  },
  {
    id: 4,
    nameKey: "sound_interior_rooms",
    categoryKey: "sound_insulation",
    image: testImage,
    descriptionKey: "sound_interior_rooms_desc",
    featuresKeys: [
      "noise_absorption",
      "light_easy_install",
      "no_ventilation_block",
    ],
  },
];

export default insulationProducts;
