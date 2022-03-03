import React from "react";

import best1 from "../../images/best_1.jpg";
import best2 from "../../images/best_2.jpg";
import best3 from "../../images/best_3.jpg";
import best4 from "../../images/best_4.jpg";
import option1 from "../../images/option_1.png";
import option2 from "../../images/option_2.png";
import option3 from "../../images/option_3.png";
import option4 from "../../images/option_4.png";

const LeftSideBar = () => {
  return (
    <div class="col-12">
      <div className="sidebar_left clearfix">
        <div className="sidebar_section">
          <div className="sidebar_title">Categories</div>
          <div className="sidebar_section_content">
            <ul>
              <li>
                <a href="#">Wedding Dresses (23)</a>
              </li>
              <li>
                <a href="#">Swimsuits (11)</a>
              </li>
              <li>
                <a href="#">Jeans (61)</a>
              </li>
              <li>
                <a href="#">Tops (34)</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="sidebar_section">
          <div className="sidebar_title">Color</div>
          <div
            className="sidebar_section_content sidebar_color_content mCustomScrollbar"
            data-mcs-theme="minimal-dark"
          >
            <ul>
              <li>
                <a href="#">
                  <span style={{ background: "#a3ccff" }}></span>Blue (23)
                </a>
              </li>
              <li>
                <a href="#">
                  <span style={{ background: "#937c6f" }}></span>Brown (11)
                </a>
              </li>
              <li>
                <a href="#">
                  <span style={{ background: "#00000" }}></span>Black (61)
                </a>
              </li>
              <li>
                <a href="#">
                  <span style={{ background: "#ff5c00" }}></span>Orange (34)
                </a>
              </li>
              <li>
                <a href="#">
                  <span style={{ background: "#a3ffb2" }}></span>Green (17)
                </a>
              </li>
              <li>
                <a href="#">
                  <span style={{ background: "#f52832" }}></span>Red (22)
                </a>
              </li>
              <li>
                <a href="#">
                  <span style={{ background: "#fdabf4" }}></span>Pink (7)
                </a>
              </li>
              <li>
                <a href="#">
                  <span style={{ background: "#ecf863" }}></span>Yellow (13)
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="sidebar_section">
          <div className="sidebar_title">Size</div>
          <div className="sidebar_section_content">
            <ul>
              <li>
                <a href="#">Small S (23)</a>
              </li>
              <li>
                <a href="#">Medium M (11)</a>
              </li>
              <li>
                <a href="#">Large L (61)</a>
              </li>
              <li>
                <a href="#">Extra Large XL (34)</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="sidebar_section">
          <div className="sidebar_title">Price</div>
          <div className="sidebar_section_content">
            <div className="filter_price">
              <div id="slider-range" className="slider_range"></div>
              <p>
                <input
                  type="text"
                  id="amount"
                  className="amount"
                  readonly
                  style={{ border: "0", fontWeight: "bold" }}
                />
              </p>
              <div className="clear_price_btn">Clear Price</div>
            </div>
          </div>
        </div>

        <div className="sidebar_section">
          <div className="sidebar_title">Best Sellers</div>
          <div className="sidebar_section_content bestsellers_content">
            <ul>
              <li className="clearfix">
                <div className="best_image">
                  <img src={best1} alt="" />
                </div>
                <div className="best_content">
                  <div className="best_title">
                    <a href="product.html">Blue dress with dots</a>
                  </div>
                  <div className="best_price">$45</div>
                </div>
                <div className="best_buy">+</div>
              </li>
              <li className="clearfix">
                <div className="best_image">
                  <img src={best2} alt="" />
                </div>
                <div className="best_content">
                  <div className="best_title">
                    <a href="product.html">White t-shirt</a>
                  </div>
                  <div className="best_price">$45</div>
                </div>
                <div className="best_buy">+</div>
              </li>
              <li className="clearfix">
                <div className="best_image">
                  <img src={best3} alt="" />
                </div>
                <div className="best_content">
                  <div className="best_title">
                    <a href="product.html">Blue dress with dots</a>
                  </div>
                  <div className="best_price">$45</div>
                </div>
                <div className="best_buy">+</div>
              </li>
              <li className="clearfix">
                <div className="best_image">
                  <img src={best4} alt="" />
                </div>
                <div className="best_content">
                  <div className="best_title">
                    <a href="product.html">White t-shirt</a>
                  </div>
                  <div className="best_price">$45</div>
                </div>
                <div className="best_buy">+</div>
              </li>
            </ul>
          </div>
        </div>
        <div className="sidebar_section sidebar_options">
          <div className="sidebar_section_content">
            <div className="sidebar_option d-flex flex-row align-items-center justify-content-start">
              <div className="option_image">
                <img src={option1} alt="" />
              </div>
              <div className="option_content">
                <div className="option_title">30 Days Returns</div>
                <div className="option_subtitle">No questions asked</div>
              </div>
            </div>
            <div className="sidebar_option d-flex flex-row align-items-center justify-content-start">
              <div className="option_image">
                <img src={option2} alt="" />
              </div>
              <div className="option_content">
                <div className="option_title">Free Delivery</div>
                <div className="option_subtitle">On all orders</div>
              </div>
            </div>
            <div className="sidebar_option d-flex flex-row align-items-center justify-content-start">
              <div className="option_image">
                <img src={option3} alt="" />
              </div>
              <div className="option_content">
                <div className="option_title">Secure Payments</div>
                <div className="option_subtitle">No need to worry</div>
              </div>
            </div>
            <div className="sidebar_option d-flex flex-row align-items-center justify-content-start">
              <div className="option_image">
                <img src={option4} alt="" />
              </div>
              <div className="option_content">
                <div className="option_title">24/7 Support</div>
                <div className="option_subtitle">Just call us</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="current_page">Woman's Fashion</div>
    </div>
  );
};

export default LeftSideBar;
