import React from "react";

import extra1 from "../../images/extra_1.jpg";
import extra2 from "../../images/extra_2.jpg";

const News = () => {
  return (
    <div className="extra clearfix">
      <div className="extra_promo extra_promo_1">
        <div
          className="extra_promo_image"
          style={{ backgroundImage: `url(${extra1})` }}
          // "background-image:url(images/extra_1.jpg)"
        ></div>
        <div className="extra_1_content d-flex flex-column align-items-center justify-content-center text-center">
          <div className="extra_1_price">
            30%<span>off</span>
          </div>
          <div className="extra_1_title">On all shoes</div>
          <div className="extra_1_text">
            *Integer ut imperdiet erat. Quisque ultricies lectus tellus, eu
            tristique magna pharetra.
          </div>
          <div className="button extra_1_button">
            <a href="checkout.html">check out</a>
          </div>
        </div>
      </div>
      <div className="extra_promo extra_promo_2">
        <div
          className="extra_promo_image"
          style={{ backgroundImage: `url(${extra2})` }}
          // background-image:url(images/extra_2.jpg)
        ></div>
        <div className="extra_2_content d-flex flex-column align-items-center justify-content-center text-center">
          <div className="extra_2_title">
            <div className="extra_2_center">&</div>
            <div className="extra_2_top">Mix</div>
            <div className="extra_2_bottom">Match</div>
          </div>
          <div className="extra_2_text">
            *Integer ut imperdiet erat. Quisque ultricies lectus tellus, eu
            tristique magna pharetra.
          </div>
          <div className="button extra_2_button">
            <a href="checkout.html">check out</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
