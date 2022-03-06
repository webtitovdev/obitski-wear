import React from "react";

import bagShopW from "../../images/shopping-bag-white.svg";

const Product = ({ image, name, price }) => {
  return (
    <div className="product">
      <div className="product_image">
        <img src={image} alt="" />
      </div>
      <div className="product_content clearfix">
        <div className="product_info">
          <div className="product_name">
            <a href="product.html">{name}</a>
          </div>
          <div className="product_price">{price}</div>
        </div>
        <div className="product_options">
          <div className="product_buy product_option">
            <img src={bagShopW} alt="Добавить в корзину" />
          </div>
          <div className="product_fav product_option">+</div>
        </div>
      </div>
    </div>
  );
};

export default Product;
