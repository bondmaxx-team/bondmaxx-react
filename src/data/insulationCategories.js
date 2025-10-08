import roof from "../assets/2.jpeg";
import wall from "../assets/1.jpeg";

// Categories for Insulation page (aligned with product categories)
const insulationCategories = [
  {
    id: 1,
    key: "thermal_insulation",
    image: roof,
    name: {
      en: "Thermal Insulation",
      ar: "العزل الحراري",
      de: "Wärmedämmung",
      tr: "Isı Yalıtımı",
    },
  },
  {
    id: 2,
    key: "sound_insulation",
    image: wall,
    name: {
      en: "Sound Insulation",
      ar: "العزل الصوتي",
      de: "Schalldämmung",
      tr: "Ses Yalıtımı",
    },
  },
];

export default insulationCategories;
