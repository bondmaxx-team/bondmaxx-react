import { useTranslation } from "react-i18next";
import ColorsPage from "../components/ColorsPage";
import accessoriesProducts from "../data/accessoriesProducts";
import accessoriesCategories from "../data/accessoriesCategories";

function AccessoriesPage() {
  const { t } = useTranslation();

  return (
    <ColorsPage
      productsData={accessoriesProducts}
      categoriesData={accessoriesCategories}
      title={t("accessories")}
      subtitle={t("accessories_description")}
      productType="accessories"
    />
  );
}

export default AccessoriesPage;
