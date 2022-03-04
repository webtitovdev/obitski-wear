import React from "react";
import shoppingBagW from "../../images/shopping-bag-white.svg";
import star from "../../images/star.svg";

const PreviewShopItem = ({ image, name, price }) => {
  return (
    <div className="col-lg-4 product_col">
      <div className="product_prev">
        <div className="product_image">
          <img src={image} alt="" />
        </div>
        <div className="product_content clearfix">
          <div className="product_info">
            <div className="product_name">
              <a href="product.html">{name}</a>
            </div>
            <div className="product_price">{price} &#8381;</div>
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
  );
};

export default PreviewShopItem;
