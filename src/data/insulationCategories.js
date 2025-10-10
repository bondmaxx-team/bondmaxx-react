import roof from "../assets/2.jpeg";
import wall from "../assets/1.jpeg";

// Categories for Insulation page (aligned with product categories)
const insulationCategories = [
  {
    id: 1,
    key: "internal",
    image: wall,
    name: {
      en: "internal",
      ar: "داخلي ",
      de: "Intern",
      tr: "İç",
    },
  },
  {
    id: 2,
    key: "external",
    image: roof,
    name: {
      en: "external",
      ar: "خارجي",
      de: "external",
      tr: "Dış",
    },
  },
];

export default insulationCategories;
