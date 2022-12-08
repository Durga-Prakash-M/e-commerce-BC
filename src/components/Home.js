import React from "react";
import "../styles/HomeStyles.css";
import ProductsCatalog from "./ProductsCatalog";
import useProductsData from "../hooks/useProductsData";

const Home = () => {
  const { isLoading, data, isError } = useProductsData();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error loading products... </div>;
  }
  return (
    <div className="Home">
      <div className="homeHeader">
        <div className="ProductsTitle">Products</div>
        <div className="createProduct">create Product</div>
      </div>
      <ProductsCatalog listOfProducts={data.data} />
    </div>
  );
};

export default Home;
