import { Cart as recoilCart } from "../../recoil/atoms/Cart";
import { useRecoilValue } from "recoil";
import React from "react";
import CartItem from "./cartItem";
import { CartLength } from "../../recoil/selectors/CartLength";
import "../../styles/cart.css";
import { useState } from "react";

const Cart = () => {
  const cartItems = useRecoilValue(recoilCart);
  const cartLength = useRecoilValue(CartLength);
  const [displayCart, setDisplayCart] = useState(false);
  const toggleCart = () => {
    setDisplayCart((prev) => !prev);
  };
  // console.log(cartItems);
  return (
    <div className="cart-component">
      <div className="cart-button" onClick={toggleCart}>
        cart({cartLength})
      </div>
      {displayCart && cartLength > 0 && (
        <div className="cart">
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
