import { useContext, Fragment } from "react";
import { CategoriesContext } from "../../context/categories.context";
import CategoryPreview from "../../components/category-preview/category-preview.component";

import { selectCategories } from "../../store/categories/categories.selector";
import { useSelector } from "react-redux";

const CategoriesPreview = () => {
  // const { categoriesMap } = useContext(CategoriesContext);
  const categoriesMap = useSelector(selectCategories);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
