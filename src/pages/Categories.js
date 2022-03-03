import React from "react";

import BreadCrumbs from "./../components/breadCrumbs/BreadCrumbs";
import ProductSort from "./../components/productSort/ProductSort";
import LeftSideBar from "./../components/leftSideBar/LeftSideBar";
import ProductList from "./../components/productList/ProductList";
import Pagination from "./../components/pagination/Pagination";
import RightSideBar from "../components/rightSideBar/RightSideBar";
import News from "../components/news/News";

const Categories = () => {
  return (
    <>
      <BreadCrumbs />
      <div class="products">
        <div class="container">
          <div class="row">
            <LeftSideBar />
            <ProductSort />
          </div>
          <ProductList />
          <Pagination />
        </div>
        <RightSideBar />
      </div>
      <News />
    </>
  );
};

export default Categories;
