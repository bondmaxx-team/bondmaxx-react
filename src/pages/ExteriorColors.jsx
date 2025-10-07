import React from "react";
import ColorsPage from "../components/ColorsPage";
import exteriorProducts from "../data/exteriorProducts";
import exteriorCategories from "../data/exteriorCategories";

const ExteriorColorsPage = () => {
  return (
    <ColorsPage
      productsData={exteriorProducts}
      categoriesData={exteriorCategories}
      titleKey="exterior_products"
      descriptionKey="exterior_description"
    />
  );
};

export default ExteriorColorsPage;
