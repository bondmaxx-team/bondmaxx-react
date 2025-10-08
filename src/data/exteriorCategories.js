import roof from "../assets/2.jpeg";
import wall from "../assets/1.jpeg";

// Align categories with exterior product categories for consistency
const exteriorCategories = [
  {
    id: 1,
    key: "ceilings",
    image: roof,
    name: {
      en: "Ceilings",
      ar: "الأسقف",
      de: "Decken",
      tr: "Tavanlar",
    },
  },
  {
    id: 2,
    key: "walls",
    image: wall,
    name: {
      en: "Walls",
      ar: "الجدران",
      de: "Wände",
      tr: "Duvarlar",
    },
  },
];

export default exteriorCategories;
