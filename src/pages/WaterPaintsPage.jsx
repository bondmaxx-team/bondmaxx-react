import { useTranslation } from "react-i18next";
import ColorsPage from "../components/ColorsPage";
import waterPaintsProducts from "../data/waterPaintsProducts";
import waterPaintsCategories from "../data/waterPaintsCategories";

function WaterPaintsPage() {
  const { t } = useTranslation();

  return (
    <ColorsPage
      productsData={waterPaintsProducts}
      categoriesData={waterPaintsCategories}
      title={t("water_paints")}
      subtitle={t("water_paints_description")}
      productType="water-paints"
    />
  );
}

export default WaterPaintsPage;
