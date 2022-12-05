import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useProductData from "../hooks/useProductData";
import "../styles/IndividualProductStyles.css";

const quantityMessage = (quantity) => {
  if (quantity === 0) return "unavailable";
  else if (quantity <= 10) return "selling fast";
  return "available";
};

const IndivdualProduct = () => {
  const { id } = useParams();
  const { isLoading, data } = useProductData(id);

  const [image, setImage] = useState("");

  useEffect(() => {}, [image]);
  useEffect(() => {
    if (data) setImage(data.data.image);
  }, [data]);

  if (isLoading) {
    return <div>Loading product....</div>;
  }
  const product = data.data;
  return (
    <div className="IndividualProduct">
      <div className="prod-img">
        <img src={image} alt="product" />
      </div>
      <div className="details">
        <h2>{product.name}</h2>
        <p>
          Price: <strong>${product.price}</strong>
        </p>
        <p>Description: {product.description}</p>
        <p>{quantityMessage(product.quantity)}</p>
        variants:
        <div className="variants">
          {product.variants.map((variant) => {
            return (
              <div
                key={variant.color}
                className="variant"
                onClick={() => {
                  setImage(variant.image);
                }}
                style={{ backgroundColor: `${variant.color}` }}
              ></div>
            );
          })}
        </div>
        <div className="add-to-cart-button">Add to Cart</div>
      </div>
    </div>
  );
};

export default IndivdualProduct;
