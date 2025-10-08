// ExteriorColorsPage.jsx
import { useTranslation } from "react-i18next";
import ColorsPage from "../components/ColorsPage";
import exteriorProducts from "../data/exteriorProducts";
import exteriorCategories from "../data/exteriorCategories";

const ExteriorColorsPage = () => {
  const { t } = useTranslation();

  return (
    <ColorsPage
      productsData={exteriorProducts}
      categoriesData={exteriorCategories}
      title={t("exterior_products")}
      subtitle={t("exterior_description")}
      productType="exterior"
    />
  );
};

export default ExteriorColorsPage;
