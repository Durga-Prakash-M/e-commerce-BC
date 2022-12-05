import React from "react";
import CatalogItem from "./CatalogItem";
import "../styles/products-catalog.css";

const ProductsCatalog = ({ listOfProducts }) => {
  return (
    <div className="ProductsCatalog">
      {listOfProducts.map((product) => (
        <CatalogItem key={product.id} Item={product} />
      ))}
    </div>
  );
};

export default ProductsCatalog;
