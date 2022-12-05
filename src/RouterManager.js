import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import IndivdualProduct from "./components/IndivdualProduct";

const RouterManager = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products">
        <Route path=":id" element={<IndivdualProduct />} />
      </Route>
    </Routes>
  );
};

export default RouterManager;
