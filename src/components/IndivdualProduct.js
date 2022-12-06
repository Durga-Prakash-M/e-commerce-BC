import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import useProductData from "../hooks/useProductData";
import { Cart } from "../recoil/atoms/Cart";
import { CartLength } from "../recoil/selectors/CartLength";
import "../styles/IndividualProductStyles.css";

const quantityMessage = (quantity) => {
  if (quantity === 0) return "unavailable";
  else if (quantity <= 10) return "selling fast";
  return "available";
};

const replaceAtIndex = (arr, idx, item) => {
  if (item.inCartQuantity === 0) {
    return [...arr.slice(0, idx), ...arr.slice(idx + 1)];
  }
  return [...arr.slice(0, idx), item, ...arr.slice(idx + 1)];
};
const AddToCart = ({ product }) => {
  const [itemsInCart, setItemsInCart] = useRecoilState(Cart);
  const idx = itemsInCart.findIndex((item) => item.id === product.id);
  const targetItemInCart = idx >= 0 ? itemsInCart[idx] : undefined;
  let newCart = undefined;
  const incrementBuyingQuantity = () => {
    if (targetItemInCart) {
      newCart = replaceAtIndex(itemsInCart, idx, {
        ...targetItemInCart,
        inCartQuantity: targetItemInCart.inCartQuantity + 1,
      });
    } else {
      newCart = [
        ...itemsInCart,
        {
          id: product.id,
          description: product.description,
          name: product.name,
          image: product.image,
          inCartQuantity: 1,
          price: product.price,
        },
      ];
    }
    setItemsInCart(newCart);
  };

  const decrementBuyingQuantity = () => {
    const newCart = replaceAtIndex(itemsInCart, idx, {
      ...targetItemInCart,
      inCartQuantity: targetItemInCart.inCartQuantity - 1,
    });
    setItemsInCart(newCart);
  };

  if (targetItemInCart) {
    return (
      <div className="addRemove">
        <div className="remove" onClick={decrementBuyingQuantity}>
          -
        </div>
        <div className="qantityInCart">{targetItemInCart.inCartQuantity}</div>
        <div className="add" onClick={incrementBuyingQuantity}>
          +
        </div>
      </div>
    );
  } else {
    return (
      <div className="add-to-cart-button" onClick={incrementBuyingQuantity}>
        Add to Cart
      </div>
    );
  }
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
