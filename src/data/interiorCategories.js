import roof from "../assets/2.jpeg";
import wall from "../assets/1.jpeg";

const interiorCategories = [
  {
    id: 1,
    key: "walls",
    image: wall,
    name: {
      en: "Walls",
      ar: "الجدران",
      de: "Wände",
      tr: "Duvarlar",
    },
  },
  {
    id: 2,
    key: "ceilings",
    image: roof,
    name: {
      en: "Ceilings",
      ar: "الأسقف",
      de: "Decken",
      tr: "Tavanlar",
    },
  },
];

export default interiorCategories;
