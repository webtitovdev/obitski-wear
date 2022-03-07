import React from "react";
import { useDispatch } from "react-redux";
import { clearedCart } from "../../slice/productSlice";
import TotalProductItem from "../totalProductItem/TotalProductItem";

const TotalProductList = ({ store, title }) => {
  const dispatch = useDispatch();
  const emptyCart = <div className="emptyCart">Корзина пуста</div>;
  const emptyFavorite = <div className="emptyCart">Избранного нет</div>;
  const renderItem = store.map((item, i) => (
    <TotalProductItem
      key={i}
      id={item.id}
      name={item.name}
      price={item.price}
      image={item.src}
      title={title}
    />
  ));
  const cartOrFavorit = title === "Корзина" ? emptyCart : emptyFavorite;
  const render = store.length === 0 ? cartOrFavorit : renderItem;
  return (
    <>
      <div className="row">
        <div className="col">
          <div className="cart_bar d-flex flex-row align-items-center justify-content-start">
            <div className="cart_bar_title_name">Товар</div>
            <div className="cart_bar_title_content ml-auto">
              <div className="cart_bar_title_content_inner d-flex flex-row align-items-center justify-content-end">
                <div className="cart_bar_title_price">Цена</div>
                <div className="cart_bar_title_quantity">Количество</div>
                <div className="cart_bar_title_total">Всего</div>
                <div className="cart_bar_title_button"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">{render}</div>
      </div>
      <div className="row">
        <div className="col">
          <div className="cart_control_bar d-flex flex-md-row flex-column align-items-start justify-content-start">
            <button
              onClick={() => dispatch(clearedCart())}
              className="button_clear cart_button"
            >
              Очистить
            </button>
            <button className="button_update cart_button_2 ml-md-auto">
              Продолжить покупки
            </button>
            <button className="button_update cart_button_2 ml-md-auto">
              Купить
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TotalProductList;
