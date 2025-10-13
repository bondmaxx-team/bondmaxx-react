import { useTranslation } from "react-i18next";
import ColorsPage from "../components/ColorsPage";
import oilPaintsProducts from "../data/oilPaintsProducts";
import oilPaintsCategories from "../data/oilPaintsCategories";

function OilPaintsPage() {
  const { t } = useTranslation();

  return (
    <ColorsPage
      productsData={oilPaintsProducts}
      categoriesData={oilPaintsCategories}
      title={t("oil_paints")}
      subtitle={t("oil_paints_description")}
      productType="oil-paints"
    />
  );
}

export default OilPaintsPage;
