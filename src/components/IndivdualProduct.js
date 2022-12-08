import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useProductData from "../hooks/useProductData";
import "../styles/IndividualProductStyles.css";
import { quantityMessage } from "../utils/IndividualProductUtils";
import AddToCart from "./AddToCart";

const IndivdualProduct = () => {
  let { id } = useParams();
  if (!id) id = 1;
  const { isLoading, data, isError } = useProductData(id);
  const [image, setImage] = useState("");

  useEffect(() => {}, [image]);
  useEffect(() => {
    if (data) setImage(data.data.image);
  }, [data]);

  if (isLoading) {
    return <div>Loading product....</div>;
  }

  if (isError) {
    return <div>Error loading Product...</div>;
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

        {product.variants.length !== 0 && <div>variants:</div>}
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
        <AddToCart product={product} />
      </div>
    </div>
  );
};

export default IndivdualProduct;
