import React from "react";

const CartTotal = () => {
  return (
    <div className="col-lg-5 offset-lg-1">
      <div className="cart_total">
        <div className="cart_title">cart total</div>
        <ul>
          <li className="d-flex flex-row align-items-center justify-content-start">
            <div className="cart_total_title">Subtotal</div>
            <div className="cart_total_price ml-auto">$35.00</div>
          </li>
          <li className="d-flex flex-row align-items-center justify-content-start">
            <div className="cart_total_title">Shipping</div>
            <div className="cart_total_price ml-auto">$5.00</div>
          </li>
          <li className="d-flex flex-row align-items-center justify-content-start">
            <div className="cart_total_title">Total</div>
            <div className="cart_total_price ml-auto">$40.00</div>
          </li>
        </ul>
        <button className="cart_total_button">proceed to checkout</button>
      </div>
    </div>
  );
};

export default CartTotal;
