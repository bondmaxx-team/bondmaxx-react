import { useTranslation } from "react-i18next";
import ColorsPage from "../components/ColorsPage";
import epoxyProducts from "../data/epoxyProducts";
import epoxyCategories from "../data/epoxyCategories";

function EpoxyPage() {
  const { t } = useTranslation();

  return (
    <ColorsPage
      productsData={epoxyProducts}
      categoriesData={epoxyCategories}
      title={t("epoxy")}
      subtitle={t("epoxy_description")}
      productType="epoxy"
    />
  );
}

export default EpoxyPage;
