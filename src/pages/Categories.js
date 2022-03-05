import React from "react";

import BreadCrumbs from "./../components/breadCrumbs/BreadCrumbs";
import ProductSort from "./../components/productSort/ProductSort";
import LeftSideBar from "./../components/leftSideBar/LeftSideBar";
import ProductList from "./../components/productList/ProductList";
import Pagination from "./../components/pagination/Pagination";
import RightSideBar from "../components/rightSideBar/RightSideBar";
import NewsList from "../components/newsList/NewsList";

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
          <Pagination />
        </div>
        <RightSideBar />
      </div>
      <NewsList />
    </>
  );
};

export default Categories;
