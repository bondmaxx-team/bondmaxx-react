// InsulationPage.jsx
import { useTranslation } from "react-i18next";
import ColorsPage from "../components/ColorsPage";
import insulationProducts from "../data/insulationProducts";
import insulationCategories from "../data/insulationCategories";

const InsulationPage = () => {
  const { t } = useTranslation();

  return (
    <ColorsPage
      productsData={insulationProducts}
      categoriesData={insulationCategories}
      title={t("insulation_products")}
      subtitle={t("insulation_description")}
      productType="insulation"
    />
  );
};

export default InsulationPage;
