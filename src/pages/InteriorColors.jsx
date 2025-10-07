import ColorsPage from "../components/ColorsPage";
import interiorProducts from "../data/interiorProducts";
import interiorCategories from "../data/interiorCategories";
import { useTranslation } from "react-i18next";

const InteriorColorsPage = () => {
  const { t } = useTranslation();
  return (
    <ColorsPage
      productsData={interiorProducts}
      categoriesData={interiorCategories}
      title={t("interior_products")}
      subtitle={t("interior_description")}
    />
  );
};

export default InteriorColorsPage;
