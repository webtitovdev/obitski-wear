import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearedCart, clearedFavorit } from "../../slice/productSlice";
import { useGetDataQuery } from "../../api/api";

import TotalProductItem from "./TotalProductItem";
import Spinner from "../Spinner";

const TotalProductList = ({ title }) => {
  const { data = [], isLoading } = useGetDataQuery("productItem");
  const { favorits, cartItem } = useSelector((state) => state.productFunc);
  const dispatch = useDispatch();

  const emptyCart = <div className="emptyCart">Корзина пуста</div>;
  const emptyFavorite = <div className="emptyCart">Избранного нет</div>;
  const item = title === "Корзина" ? cartItem : favorits;

  if (isLoading) {
    return <Spinner />;
  }

  let renderItems = [];
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < item.length; j++) {
      if (data[i].id === item[j]) {
        renderItems.push(data[i]);
      }
    }
  }

  const renderItem = renderItems.map((item) => (
    <TotalProductItem
      isLoading={isLoading}
      key={item.id}
      props={item}
      title={title}
    />
  ));
  const sellItems = renderItems.map((item) => item.name).join(" ,");

  const cartOrFavorit = title === "Корзина" ? emptyCart : emptyFavorite;
  const render = renderItems.length === 0 ? cartOrFavorit : renderItem;

  return (
    <>
      <div className="row">
        <div className="col">
          <div className="cart_bar d-flex flex-row align-items-center justify-content-start">
            <div className="cart_bar_title_name">Товар</div>
            <div className="cart_bar_title_content ml-auto">
              <div className="cart_bar_title_content_inner d-flex flex-row align-items-center justify-content-end">
                <div className="cart_bar_title_price">Цена</div>
                <div className="cart_bar_title_total">Удалить</div>
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
              onClick={
                title === "Корзина"
                  ? () => dispatch(clearedCart())
                  : () => dispatch(clearedFavorit())
              }
              className="button_clear cart_button"
            >
              Очистить
            </button>
            <button
              to="categories"
              className="button_update cart_button_2 ml-md-auto"
            >
              <Link to="/categories">Продолжить покупки</Link>
            </button>
            <button className="button_update cart_button_2 ml-md-auto">
              <a
                href={`https://wa.me/+79515284271?text=Добрый день, интересуют товары: ${sellItems}`}
                target="_blank"
                rel="noreferrer"
              >
                Купить
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TotalProductList;
