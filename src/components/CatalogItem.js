import React from "react";
import { Link } from "react-router-dom";
import "../styles/catalogItemStyles.css";
const CatalogItem = ({ Item }) => {
  return (
    <div className="catalogItem">
      <img src={Item.image} alt="product" />
      <div>
        <strong>{Item.name}</strong>
        <p>{Item.description}</p>
        <p>
          price: <strong>${Item.price}</strong>
        </p>
      </div>
    </div>
  );
};

export default CatalogItem;
