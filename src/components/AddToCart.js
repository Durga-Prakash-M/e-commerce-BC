import { useRecoilState } from "recoil";
import { Cart } from "../recoil/atoms/Cart";

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

export default AddToCart;
