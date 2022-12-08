import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import IndivdualProduct from "./components/IndivdualProduct";
import NotFoundPage from "./components/NotFoundPage";

const RouterManager = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products">
        <Route path="" element={<IndivdualProduct />} />
        <Route path=":id" element={<IndivdualProduct />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default RouterManager;
