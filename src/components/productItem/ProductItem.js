import React from "react";
import { useParams } from "react-router-dom";
import { useGetDataQuery } from "../../api/api";

import BreadCrumbs from "../breadCrumbs/BreadCrumbs";
import Spinner from "../spinner/Spinner";
const ProductItem = () => {
  const { data, isLoading } = useGetDataQuery("productItem");
  const { id } = useParams();
  if (isLoading) {
    return <Spinner />;
  }
  let getDataByid;
  getDataByid = data.filter((item) => item.id === id);
  const { src, name, price, about, size } = getDataByid[0];
  return (
    <>
      <BreadCrumbs />
      <div className="product_item">
        <div className="container">
          <div className="row product_row">
            <div className="col-lg-7">
              <div className="product_image">
                <div className="product_image_large">
                  <img src={src} alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="product_content">
                <div className="product_name">{name}</div>
                <div className="product_price">{price} &#8381;</div>
                <div className="product_text">
                  <p>{about}</p>
                </div>
                <div className="product_item_quantity_container">
                  <span>Количество</span>
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
                  <span>Размер</span>
                  <div className="product_size">
                    <ul className="d-flex flex-row align-items-start justify-content-start">
                      <li>
                        <input
                          type="radio"
                          name="product_radio"
                          className="regular_radio radio_1"
                        />
                        <label>{size}</label>
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
        </div>
      </div>
    </>
  );
};

export default ProductItem;
