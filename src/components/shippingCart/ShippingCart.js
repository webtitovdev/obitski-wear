import React from "react";

import cartProduct from "../../images/cart_product_1.jpg";
import trash from "../../images/trash.png";

const ShippingCart = () => {
  return (
    <>
      <div className="row">
        <div className="col">
          <div className="cart_bar d-flex flex-row align-items-center justify-content-start">
            <div className="cart_bar_title_name">Product</div>
            <div className="cart_bar_title_content ml-auto">
              <div className="cart_bar_title_content_inner d-flex flex-row align-items-center justify-content-end">
                <div className="cart_bar_title_price">Price</div>
                <div className="cart_bar_title_quantity">Quantity</div>
                <div className="cart_bar_title_total">Total</div>
                <div className="cart_bar_title_button"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="cart_products">
            <ul>
              <li className=" cart_product d-flex flex-md-row flex-column align-items-md-center align-items-start justify-content-start">
                <div className="cart_product_image">
                  <img src={cartProduct} alt="" />
                </div>

                <div className="cart_product_name">
                  <a href="product.html">2 Piece Swimsuit</a>
                </div>
                <div className="cart_product_info ml-auto">
                  <div className="cart_product_info_inner d-flex flex-row align-items-center justify-content-md-end justify-content-start">
                    <div className="cart_product_price">$35.00</div>

                    <div className="product_quantity_container">
                      <div className="product_quantity clearfix">
                        <input
                          id="quantity_input"
                          type="text"
                          pattern="[0-9]*"
                          value="1"
                        />
                        <div className="quantity_buttons">
                          <div
                            id="quantity_inc_button"
                            className="quantity_inc quantity_control"
                          >
                            <i
                              className="fa fa-caret-up"
                              aria-hidden="true"
                            ></i>
                          </div>
                          <div
                            id="quantity_dec_button"
                            className="quantity_dec quantity_control"
                          >
                            <i
                              className="fa fa-caret-down"
                              aria-hidden="true"
                            ></i>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="cart_product_total">$35.00</div>

                    <div className="cart_product_button">
                      <button className="cart_product_remove">
                        <img src={trash} alt="" />
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="cart_control_bar d-flex flex-md-row flex-column align-items-start justify-content-start">
            <button className="button_clear cart_button">clear cart</button>
            <button className="button_update cart_button">update cart</button>
            <button className="button_update cart_button_2 ml-md-auto">
              continue shopping
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShippingCart;
