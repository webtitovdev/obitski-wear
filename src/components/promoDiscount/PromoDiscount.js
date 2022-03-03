import React from "react";

import promo1 from "../../images/promo_1.jpg";
import promo2 from "../../images/promo_2.jpg";
import promo3 from "../../images/promo_3.jpg";

const PromoDiscount = () => {
  return (
    <div className="promo">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="section_title_container text-center">
              <div className="section_subtitle">only the best</div>
              <div className="section_title">promo prices</div>
            </div>
          </div>
        </div>
        <div className="row promo_container">
          <div className="col-lg-4 promo_col">
            <div className="promo_item">
              <div className="promo_image">
                <img src={promo1} alt="" />
                <div className="promo_content promo_content_1">
                  <div className="promo_title">-30% off</div>
                  <div className="promo_subtitle">on all bags</div>
                </div>
              </div>
              <div className="promo_link">
                <a href="#">Shop Now</a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 promo_col">
            <div className="promo_item">
              <div className="promo_image">
                <img src={promo2} alt="" />
                <div className="promo_content promo_content_2">
                  <div className="promo_title">-30% off</div>
                  <div className="promo_subtitle">coats & jackets</div>
                </div>
              </div>
              <div className="promo_link">
                <a href="#">Shop Now</a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 promo_col">
            <div className="promo_item">
              <div className="promo_image">
                <img src={promo3} alt="" />
                <div className="promo_content promo_content_3">
                  <div className="promo_title">-25% off</div>
                  <div className="promo_subtitle">on Sandals</div>
                </div>
              </div>
              <div className="promo_link">
                <a href="#">Shop Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoDiscount;
