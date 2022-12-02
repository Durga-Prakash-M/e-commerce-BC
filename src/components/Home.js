import React from "react";
import "../styles/HomeStyles.css";
import ProductsCatalog from "./ProductsCatalog";
const Home = () => {
  const prodsList = [];
  return (
    <div className="Home">
      <div className="homeHeader">
        <div style={{ fontSize: "125%", fontWeight: "bold" }}>Products</div>
        <div className="createProduct">create Product</div>
      </div>
      <ProductsCatalog listOfProducts={prodsList} />
    </div>
  );
};

export default Home;
