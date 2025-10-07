import React from "react";
import ColorsPage from "../components/ColorsPage";
import insulationProducts from "../data/insulationProducts";
import insulationCategories from "../data/insulationCategories";

const InsulationPage = () => {
  return (
    <ColorsPage
      productsData={insulationProducts}
      categoriesData={insulationCategories}
      title={t("insulation_products")}
      subtitle={t("insulation_description")}
    />
  );
};

export default InsulationPage;
