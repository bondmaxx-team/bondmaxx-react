import ColorsPage from "../components/ColorsPage";
import exteriorProducts from "../data/exteriorProducts";
import exteriorCategories from "../data/exteriorCategories";

const ExteriorColorsPage = () => {
  return (
    <ColorsPage
      productsData={exteriorProducts}
      categoriesData={exteriorCategories}
      title={t("exterior_products")}
      subtitle={t("exterior_description")}
    />
  );
};

export default ExteriorColorsPage;
