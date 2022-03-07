import React from "react";
import { useSelector } from "react-redux";

import Breadcrumbs from "../components/breadCrumbs/BreadCrumbs";
import TotalProductList from "../components/totalProductList/TotalProductList";
import InstaFeed from "./../components/instaFeed/InstaFeed";

const Cart = () => {
  const { cartItem } = useSelector((state) => state.productFunc);
  return (
    <>
      <Breadcrumbs />
      <div className="cart_container">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="cart_title">Корзина</div>
            </div>
          </div>
          <TotalProductList store={cartItem} title={"Корзина"} />
        </div>
      </div>
      <InstaFeed />
    </>
  );
};

export default Cart;
