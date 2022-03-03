import React from "react";

const HeadSlider = () => {
  return (
    <div class="home">
      <div class="home_slider_container">
        <div class="owl-carousel owl-theme home_slider">
          <div class="owl-item">
            <div
              class="home_slider_background"
              style={{ backgroundImage: "url(../images/home_slider_1.jpg)" }}
              // "background-image:url(images/home_slider_1.jpg)"
            ></div>
            <div class="home_slider_content">
              <div class="home_slider_content_inner">
                <div class="home_slider_subtitle">Promo Prices</div>
                <div class="home_slider_title">New Collection</div>
              </div>
            </div>
          </div>

          <div class="owl-item">
            <div
              class="home_slider_background"
              style={{ backgroundImage: "url(../images/home_slider_1.jpg)" }}
            ></div>
            <div class="home_slider_content">
              <div class="home_slider_content_inner">
                <div class="home_slider_subtitle">Promo Prices</div>
                <div class="home_slider_title">New Collection</div>
              </div>
            </div>
          </div>

          <div class="owl-item">
            <div
              class="home_slider_background"
              style={{ backgroundImage: "url(../images/home_slider_1.jpg)" }}
            ></div>
            <div class="home_slider_content">
              <div class="home_slider_content_inner">
                <div class="home_slider_subtitle">Promo Prices</div>
                <div class="home_slider_title">New Collection</div>
              </div>
            </div>
          </div>
        </div>

        <div class="home_slider_next d-flex flex-column align-items-center justify-content-center">
          <img src="images/arrow_r.png" alt="" />
        </div>

        <div class="home_slider_dots_container">
          <div class="container">
            <div class="row">
              <div class="col">
                <div class="home_slider_dots">
                  <ul
                    id="home_slider_custom_dots"
                    class="home_slider_custom_dots"
                  >
                    <li class="home_slider_custom_dot active">
                      01.<div></div>
                    </li>
                    <li class="home_slider_custom_dot">
                      02.<div></div>
                    </li>
                    <li class="home_slider_custom_dot">
                      03.<div></div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadSlider;
