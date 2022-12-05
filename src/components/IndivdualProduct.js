import React from "react";
import { useParams } from "react-router-dom";
import useProductData from "../hooks/useProductData";
import "../styles/IndividualProductStyles.css";
const IndivdualProduct = () => {
  const { id } = useParams();
  const { isLoading, data } = useProductData(id);
  if (isLoading) {
    return <div>Loading product....</div>;
  }
  const product = data.data;
  return (
    <div className="IndividualProduct">
      <div className="prod-img">
        <img src={product.image} alt="product" />
      </div>
      <div className="details">
        <h2>{product.name}</h2>
        <p>
          Price: <strong>${product.price}</strong>
        </p>
        <p>Description: {product.description}</p>
        <p>
          {product.quantity === 0
            ? "Out of Stock"
            : "Quantity: " + product.quantity}
        </p>
        <div className="add-to-cart-button">Add to Cart</div>
      </div>
    </div>
  );
};

export default IndivdualProduct;
