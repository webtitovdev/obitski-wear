import React from "react";
import { useDispatch } from "react-redux";
import { useGetDataQuery } from "../../api/api";
import bagShopW from "../../images/shopping-bag-white.svg";
import { addToFavorit, addToCart } from "../../slice/productSlice";

const Product = ({ image, name, price, id }) => {
  const dispatch = useDispatch();
  const { data } = useGetDataQuery("productItem");

  const onHandleFavorit = (id) => {
    const favoritItem = data.filter((item) => item.id === id);
    dispatch(addToFavorit(favoritItem[0]));
  };
  const onHandleCartItems = (id) => {
    const cartItems = data.filter((item) => item.id === id);
    dispatch(addToCart(cartItems[0]));
  };

  return (
    <div className="product">
      <div className="product_image">
        <img src={image} alt="" />
      </div>
      <div className="product_content clearfix">
        <div className="product_info">
          <div className="product_name">
            <a href="product.html">{name}</a>
          </div>
          <div className="product_price">{price} &#8381;</div>
        </div>
        <div className="product_options">
          <div
            onClick={() => onHandleCartItems(id)}
            className="product_buy product_option"
          >
            <img src={bagShopW} alt="Добавить в корзину" />
          </div>
          <div
            onClick={() => onHandleFavorit(id)}
            className="product_fav product_option"
          >
            +
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
