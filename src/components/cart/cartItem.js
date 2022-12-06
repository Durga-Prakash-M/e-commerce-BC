import React from "react";
const CartItem = ({ item }) => {
  return (
    <div className="cartItem">
      <div className="cartItemImage">
        <img src={item.image} alt="product" />
      </div>
      <div className="cartItemDetails">
        <strong>{item.name}</strong>
        <p>{item.description}</p>
        <p>Quantity: {item.inCartQuantity}</p>
        <p>
          price: <strong>${item.price * item.inCartQuantity}</strong>
        </p>
      </div>
    </div>
  );
};
export default CartItem;
