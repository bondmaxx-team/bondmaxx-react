import { useTranslation } from "react-i18next";
import ColorsPage from "../components/ColorsPage";
import insulationProducts from "../data/insulationProducts";
import insulationCategories from "../data/insulationCategories";

const InsulationPage = () => {
  const { t } = useTranslation(); // أضف هذا السطر

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
