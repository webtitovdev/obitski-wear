import React from "react";

const CartCoupon = () => {
  return (
    <div className="col-lg-6">
      <div className="cart_coupon">
        <div className="cart_title">coupon code</div>
        <form
          action="#"
          className="cart_coupon_form d-flex flex-row align-items-start justify-content-start"
          id="cart_coupon_form"
        >
          <input
            type="text"
            className="cart_coupon_input"
            placeholder="Coupon code"
            required="required"
          />
          <button className="button_clear cart_button_2">apply coupon</button>
        </form>
      </div>
    </div>
  );
};

export default CartCoupon;
