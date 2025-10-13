import { useTranslation } from "react-i18next";
import ColorsPage from "../components/ColorsPage";
import primerPaintsProducts from "../data/primerPaintsProducts";
import primerPaintsCategories from "../data/primerPaintsCategories";

function PrimerPaintsPage() {
  const { t } = useTranslation();

  return (
    <ColorsPage
      productsData={primerPaintsProducts}
      categoriesData={primerPaintsCategories}
      title={t("primer_paints")}
      subtitle={t("primer_paints_description")}
      productType="primer-paints"
    />
  );
}

export default PrimerPaintsPage;
