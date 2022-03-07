import React, { useState } from "react";
import trash from "../../images/trash.png";
import { useDispatch } from "react-redux";
import { deletFromCart, deletFromFavorits } from "../../slice/productSlice";

const TotalProductItem = ({ image, name, price, id, title }) => {
  const dispatch = useDispatch();
  // const fndelete = title === "Корзина" ? deletFromCart : deletFromFavorits;
  const [countItem, setCountItem] = useState(1);
  const totalPrice = price * +countItem;
  console.log(title);

  const fndelete = (id) => {
    if (title === "Корзина") {
      dispatch(deletFromCart(id));
    } else {
      dispatch(deletFromFavorits(id));
    }
  };

  return (
    <div className="cart_products">
      <ul>
        <li className=" cart_product d-flex flex-md-row flex-column align-items-md-center align-items-start justify-content-start">
          <div className="cart_product_image">
            <img src={image} alt="" />
          </div>

          <div className="cart_product_name">
            <a href="product.html">{name}</a>
          </div>
          <div className="cart_product_info ml-auto">
            <div className="cart_product_info_inner d-flex flex-row align-items-center justify-content-md-end justify-content-start">
              <div className="cart_product_price">{price} &#8381;</div>

              <div className="product_quantity_container">
                <div className="product_quantity clearfix">
                  <input
                    id="quantity_input"
                    type="text"
                    value={countItem}
                    readOnly
                  />
                  <div className="quantity_buttons">
                    <div
                      onClick={() => setCountItem(countItem + 1)}
                      id="quantity_inc_button"
                      className="quantity_inc quantity_control"
                    >
                      <i className="fa fa-caret-up" aria-hidden="true"></i>
                    </div>
                    <div
                      onClick={() => setCountItem(countItem - 1)}
                      id="quantity_dec_button"
                      className="quantity_dec quantity_control"
                    >
                      <i className="fa fa-caret-down" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cart_product_total">{totalPrice} &#8381;</div>
              <div className="cart_product_button">
                <button
                  onClick={() => fndelete(id)}
                  className="cart_product_remove"
                >
                  <img src={trash} alt="" />
                </button>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default TotalProductItem;
