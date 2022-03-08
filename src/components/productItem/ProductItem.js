import React from "react";
import { useParams } from "react-router-dom";
import { useGetDataQuery } from "../../api/api";

import BreadCrumbs from "../breadCrumbs/BreadCrumbs";
import Spinner from "../spinner/Spinner";
const ProductItem = () => {
  const { data, isLoading } = useGetDataQuery("productItem");
  if (isLoading) {
    <Spinner />;
  }
  const { id } = useParams();
  let getDataByid = [];
  if (isLoading === false) {
    getDataByid = data.filter((item) => item.id === id);
  }
  const renderSize = getDataByid[0].size.map((item, i) => (
    <li key={i}>
      <input
        type="radio"
        id={`radio_${i + 1}`}
        name="product_radio"
        className={`regular_radio radio_${i + 1}`}
      />
      <label htmlFor={`radio_${i + 1}`}>{item}</label>
    </li>
  ));

  return (
    <>
      <BreadCrumbs />
      <div className="product_item">
        <div className="container">
          <div className="row product_row">
            <div className="col-lg-7">
              <div className="product_image">
                <div className="product_image_large">
                  <img src={getDataByid[0].src} alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="product_content">
                <div className="product_name">{getDataByid[0].name}</div>
                <div className="product_price">{getDataByid[0].price}</div>
                <div className="product_text">
                  <p>{getDataByid[0].about}</p>
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
                      {renderSize}
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
