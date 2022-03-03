import React from "react";

import sidebarPromo from "../../images/sidebar_promo_1.jpg";
import sidebarPromo2 from "../../images/sidebar_promo_2.jpg";

const RightSideBar = () => {
  return (
    <div className="sidebar_right clearfix">
      <div className="sidebar_promo_1 sidebar_promo d-flex flex-column align-items-center justify-content-center">
        <div
          className="sidebar_promo_image"
          style={{ backgroundImage: `url(${sidebarPromo})` }}
        ></div>
        <div className="sidebar_promo_content text-center">
          <div className="sidebar_promo_title">
            30%<span>off</span>
          </div>
          <div className="sidebar_promo_subtitle">On all shoes</div>
          <div className="sidebar_promo_button">
            <a href="checkout.html">check out</a>
          </div>
        </div>
      </div>
      <div className="sidebar_promo_2 sidebar_promo">
        <div
          className="sidebar_promo_image"
          style={{ backgroundImage: `url(${sidebarPromo2})` }}
        ></div>
        <div className="sidebar_promo_content text-center">
          <div className="sidebar_promo_title">
            30%<span>off</span>
          </div>
          <div className="sidebar_promo_subtitle">On all shoes</div>
          <div className="sidebar_promo_button">
            <a href="checkout.html">check out</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;
