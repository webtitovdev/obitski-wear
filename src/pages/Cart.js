import React from "react";

import Breadcrumbs from "../components/breadCrumbs/BreadCrumbs";
import ShippingCart from "../components/shippingCart/ShippingCart";
import CartCoupon from "../components/cartCoupon/CartCoupon";
import CartTotal from "../components/cartTotal/CartTotal";
import InstaFeed from "./../components/instaFeed/InstaFeed";

const Cart = () => {
  return (
    <>
      <Breadcrumbs />
      <div className="cart_container">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="cart_title">your shopping cart</div>
            </div>
          </div>
          <ShippingCart />
          <div className="row cart_extra">
            <CartCoupon />
            <CartTotal />
          </div>
        </div>
      </div>
      <InstaFeed />
    </>
  );
};

export default Cart;
