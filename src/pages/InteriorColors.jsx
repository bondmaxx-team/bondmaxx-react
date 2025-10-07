import React from "react";
import ColorsPage from "../components/ColorsPage";
import interiorProducts from "../data/interiorProducts";
import interiorCategories from "../data/interiorCategories";

const InteriorColorsPage = () => {
  return (
    <ColorsPage
      productsData={interiorProducts}
      categoriesData={interiorCategories}
      titleKey="interior_products"
      descriptionKey="interior_description"
    />
  );
};

export default InteriorColorsPage;
