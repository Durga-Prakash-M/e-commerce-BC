import { selector } from "recoil";
import { Cart } from "../atoms/Cart";
export const CartLength = selector({
  key: "cart-length",
  get: ({ get }) => {
    const cartItems = get(Cart);
    return cartItems.length;
  },
});
