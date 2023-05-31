import ProductCard from "../product-card/product-card.component";
import { Link } from "react-router-dom";

import "./category-preview.styles.scss";

const CategoryPreview = ({ products }) => {
  const title = products.title;
  const items = products.items;
  return (
    <div className="category-preview-container">
      <h2>
        <Link className="title" to={title}>
          {title.toUpperCase()}
        </Link>
      </h2>
      <div className="preview">
        {items
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
