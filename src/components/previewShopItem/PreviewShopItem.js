import React from "react";

import product1 from "../../images/product_1.jpg";
import product2 from "../../images/product_2.jpg";
import product3 from "../../images/product_3.jpg";
import shoppingBagW from "../../images/shopping-bag-white.svg";

const PreviewShopItem = () => {
  return (
    <div className="arrivals">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="section_title_container text-center">
              <div className="section_subtitle">only the best</div>
              <div className="section_title">new arrivals</div>
            </div>
          </div>
        </div>
        <div className="row products_container">
          <div className="col-lg-4 product_col">
            <div className="product_prev">
              <div className="product_image">
                <img src={product1} alt="" />
              </div>
              <div className="product_content clearfix">
                <div className="product_info">
                  <div className="product_name">
                    <a href="product.html">Woman's Long Dress</a>
                  </div>
                  <div className="product_price">$45.00</div>
                </div>
                <div className="product_options">
                  <div className="product_buy product_option">
                    <img src={shoppingBagW} alt="" />
                  </div>
                  <div className="product_fav product_option">+</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 product_col">
            <div className="product_prev">
              <div className="product_image">
                <img src={product2} alt="" />
              </div>
              <div className="product_content clearfix">
                <div className="product_info">
                  <div className="product_name">
                    <a href="product.html">2 Piece Swimsuit</a>
                  </div>
                  <div className="product_price">$35.00</div>
                </div>
                <div className="product_options">
                  <div className="product_buy product_option">
                    <img src={shoppingBagW} alt="" />
                  </div>
                  <div className="product_fav product_option">+</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 product_col">
            <div className="product_prev">
              <div className="product_image">
                <img src={product3} alt="" />
              </div>
              <div className="product_content clearfix">
                <div className="product_info">
                  <div className="product_name">
                    <a href="product.html">Man Blue Jacket</a>
                  </div>
                  <div className="product_price">$145.00</div>
                </div>
                <div className="product_options">
                  <div className="product_buy product_option">
                    <img src={shoppingBagW} alt="" />
                  </div>
                  <div className="product_fav product_option">+</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewShopItem;
