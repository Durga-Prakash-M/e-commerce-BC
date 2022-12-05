import React from "react";
import "../styles/HomeStyles.css";
import ProductsCatalog from "./ProductsCatalog";
import useProductsData from "../hooks/useProductsData";
const Home = () => {
  const { isLoading, data } = useProductsData();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="Home">
      <div className="homeHeader">
        <div style={{ fontSize: "125%", fontWeight: "bold" }}>Products</div>
        <div className="createProduct">create Product</div>
      </div>
      <ProductsCatalog listOfProducts={data.data} />
    </div>
  );
};

export default Home;
