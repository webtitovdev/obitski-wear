import React from "react";

import BreadCrumbs from "./../components/breadCrumbs/BreadCrumbs";
import ProductSort from "./../components/productSort/ProductSort";
import LeftSideBar from "./../components/leftSideBar/LeftSideBar";
import ProductList from "./../components/productList/ProductList";
import RightSideBar from "../components/rightSideBar/RightSideBar";

const Categories = () => {
  return (
    <>
      <BreadCrumbs />
      <div className="products">
        <div className="container">
          <div className="row">
            <LeftSideBar />
            <ProductSort />
          </div>
          <ProductList />
        </div>
        <RightSideBar />
      </div>
    </>
  );
};

export default Categories;
