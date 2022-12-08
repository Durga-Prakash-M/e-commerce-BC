import { Cart as recoilCart } from "../../recoil/atoms/Cart";
import { useRecoilValue } from "recoil";
import React from "react";
import CartItem from "./cartItem";
import { CartLength } from "../../recoil/selectors/CartLength";
import "../../styles/cart.css";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

const Cart = () => {
  const cartItems = useRecoilValue(recoilCart);
  const cartLength = useRecoilValue(CartLength);
  const [displayCart, setDisplayCart] = useState(false);
  const refCart = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
  }, []);

  const handleClickOutside = (e) => {
    if (displayCart && refCart && !refCart.current.contains(e.target)) {
      setDisplayCart(true);
    } else {
      setDisplayCart(false);
    }
  };
  const toggleCart = () => {
    setDisplayCart((prev) => !prev);
  };

  return (
    <div className="cart-component">
      <div className="cart-button" onClick={toggleCart}>
        cart({cartLength})
      </div>
      {displayCart && cartLength > 0 && (
        <div
          className="cart"
          // onMouseLeave={() => {
          //   setDisplayCart(false);
          // }}
          ref={refCart}
        >
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
