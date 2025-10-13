import { useTranslation } from "react-i18next";
import ColorsPage from "../components/ColorsPage";
import puttyProducts from "../data/puttyProducts";
import puttyCategories from "../data/puttyCategories";

function PuttyPage() {
  const { t } = useTranslation();

  return (
    <ColorsPage
      productsData={puttyProducts}
      categoriesData={puttyCategories}
      title={t("putty")}
      subtitle={t("putty_description")}
      productType="putty"
    />
  );
}

export default PuttyPage;
