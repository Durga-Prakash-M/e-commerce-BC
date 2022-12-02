import React from "react";
import { useParams } from "react-router-dom";
import "../styles/IndividualProductStyles.css";
const getProduct = (id) => {
  const item = {
    id: 1,
    createdAt: "2022-07-06T07:13:02.308Z",
    updatedAt: "2022-07-06T07:13:02.308Z",
    name: "Bottle",
    description: "No leakage",
    image:
      "https://image.shutterstock.com/image-photo/stylish-stainless-thermo-bottles-on-260nw-1914561409.jpg",
    category: "KITCHEN",
    quantity: 15,
    price: 320,
    variants: [
      {
        color: "Grey",
        image:
          "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2F0ZXIlMjBib3R0bGV8ZW58MHx8MHx8&w=1000&q=80",
      },
      {
        color: "Blue",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCzbSXJvxUSmMN9JlQGMy3hVmv_GBkrFl1YQ&usqp=CAU",
      },
    ],
  };
  return item;
};
const IndivdualProduct = () => {
  const { id } = useParams();
  const product = getProduct(id);
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
        <p>{product.description}</p>
        <p>{(product.quantity == 0 ? "Out of " : "In") + "stock"}</p>
        <div className="add-to-cart-button">Add to Cart</div>
      </div>
    </div>
  );
};

export default IndivdualProduct;
