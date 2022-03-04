import React from "react";

import BreadCrumbs from "../breadCrumbs/BreadCrumbs";

import productImage1 from "../../images/product_image_1.jpg";
import productImage2 from "../../images/product_image_2.jpg";
import productImage3 from "../../images/product_image_3.jpg";
import review1 from "../../images/review_1.jpg";
import review2 from "../../images/review_2.jpg";
const ProductItem = () => {
  return (
    <>
      <BreadCrumbs />
      <div className="product_item">
        <div className="container">
          <div className="row product_row">
            <div className="col-lg-7">
              <div className="product_image">
                <div className="product_image_large">
                  <img src={productImage1} alt="" />
                </div>
                <div className="product_image_thumbnails d-flex flex-row align-items-start justify-content-start">
                  <div
                    className="product_image_thumbnail"
                    style={{ backgroundImage: `url(${productImage1})` }}
                    data-image="images/product_image_1.jpg"
                  ></div>
                  <div
                    className="product_image_thumbnail"
                    style={{ backgroundImage: `url(${productImage2})` }}
                    data-image="images/product_image_2.jpg"
                  ></div>
                  <div
                    className="product_image_thumbnail"
                    style={{ backgroundImage: `url(${productImage3})` }}
                    data-image="images/product_image_4.jpg"
                  ></div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="product_content">
                <div className="product_name">2 Piece Swimsuit</div>
                <div className="product_price">$35.00</div>
                <div className="in_stock_container">
                  <div className="in_stock in_stock_true"></div>
                  <span>in stock</span>
                </div>
                <div className="product_text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla quis quam ipsum. Pellentesque consequat tellus non
                    tortor tempus, id egestas elit iaculis. Proin eu dui porta,
                    pretium metus vitae, pharetra odio. Sed ac mi commodo,
                    pellentesque erat eget, accumsan justo. Etiam sed placerat
                    felis. Proin non rutrum ligula.
                  </p>
                </div>
                <div className="product_item_quantity_container">
                  <span>Quantity</span>
                  <div className="product_quantity clearfix">
                    <input id="quantity_input" type="text" pattern="[0-9]*" />
                    <div className="quantity_buttons">
                      <div
                        id="quantity_inc_button"
                        className="quantity_inc quantity_control"
                      >
                        <i className="fa fa-caret-up" aria-hidden="true"></i>
                      </div>
                      <div
                        id="quantity_dec_button"
                        className="quantity_dec quantity_control"
                      >
                        <i className="fa fa-caret-down" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product_item_size_container">
                  <span>Size</span>
                  <div className="product_size">
                    <ul className="d-flex flex-row align-items-start justify-content-start">
                      <li>
                        <input
                          type="radio"
                          id="radio_1"
                          name="product_radio"
                          className="regular_radio radio_1"
                        />
                        <label htmlFor="radio_1">XS</label>
                      </li>
                      <li>
                        <input
                          type="radio"
                          id="radio_2"
                          name="product_radio"
                          className="regular_radio radio_2"
                        />
                        <label htmlFor="radio_2">S</label>
                      </li>
                      <li>
                        <input
                          type="radio"
                          id="radio_3"
                          name="product_radio"
                          className="regular_radio radio_3"
                        />
                        <label htmlFor="radio_3">M</label>
                      </li>
                      <li>
                        <input
                          type="radio"
                          id="radio_4"
                          name="product_radio"
                          className="regular_radio radio_4"
                        />
                        <label htmlFor="radio_4">L</label>
                      </li>
                      <li>
                        <input
                          type="radio"
                          id="radio_5"
                          name="product_radio"
                          className="regular_radio radio_5"
                        />
                        <label htmlFor="radio_5">XL</label>
                      </li>
                    </ul>
                  </div>
                  <div className="button cart_button_item">
                    <a href="#">add to cart</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="reviews">
                <div className="reviews_title">reviews</div>
                <div className="reviews_container">
                  <ul>
                    <li className=" review clearfix">
                      <div className="review_image">
                        <img src={review1} alt="" />
                      </div>
                      <div className="review_content">
                        <div className="review_name">
                          <a href="#">Maria Smith</a>
                        </div>
                        <div className="review_date">Nov 29, 2017</div>
                        <div className="review_text">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nulla quis quam ipsum. Pellentesque consequat
                            tellus non tortor tempus, id egestas elit iaculis.
                            Proin eu dui porta, pretium metus vitae, pharetra
                            odio. Sed ac mi commodo, pellentesque erat eget,
                            accumsan justo. Etiam sed placerat felis. Proin non
                            rutrum ligula.{" "}
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className=" review clearfix">
                      <div className="review_image">
                        <img src={review2} alt="" />
                      </div>
                      <div className="review_content">
                        <div className="review_name">
                          <a href="#">Maria Smith</a>
                        </div>
                        <div className="review_date">Nov 29, 2017</div>
                        <div className="review_text">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nulla quis quam ipsum. Pellentesque consequat
                            tellus non tortor tempus, id egestas elit iaculis.
                            Proin eu dui porta, pretium metus vitae, pharetra
                            odio. Sed ac mi commodo, pellentesque erat eget,
                            accumsan justo. Etiam sed placerat felis. Proin non
                            rutrum ligula.{" "}
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="review_form_container">
                <div className="review_form_title">leave a review</div>
                <div className="review_form_content">
                  <form action="#" id="review_form" className="review_form">
                    <div className="d-flex flex-md-row flex-column align-items-start justify-content-between">
                      <input
                        type="text"
                        className="review_form_input"
                        placeholder="Name"
                        required="required"
                      />
                      <input
                        type="email"
                        className="review_form_input"
                        placeholder="E-mail"
                        required="required"
                      />
                      <input
                        type="text"
                        className="review_form_input"
                        placeholder="Subject"
                      />
                    </div>
                    <textarea
                      className="review_form_text"
                      name="review_form_text"
                      placeholder="Message"
                    ></textarea>
                    <button type="submit" className="review_form_button">
                      leave a review
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
