import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/catalogItemStyles.css";

const CatalogItem = ({ Item }) => {
  const navigate = useNavigate();
  const routeChange = () => {
    console.log(Item.id);
    let path = `/products/${Item.id}`;
    navigate(path);
  };
  return (
    <div className="catalogItem" onClick={routeChange}>
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
