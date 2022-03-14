import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorit, addToCart } from "../../slice/productSlice";
import { priceCorrector } from "../../services/priceCorrector";

import bagShopW from "../../images/shopping-bag-white.svg";

const SingleProduct = ({ image, name, price, id, notCategories }) => {
  const { favorits, cartItem } = useSelector((state) => state.productFunc);
  const dispatch = useDispatch();

  const link = notCategories ? `categories/products/${id}` : `products/${id}`;

  const onHandleFavorit = (id) => {
    let ifArr = favorits.filter((item) => item === id);
    if (ifArr.length <= 0) {
      dispatch(addToFavorit(id));
    } else {
      throw new Error("Уже есть в избранном");
    }
  };

  const onHandleCartItems = (id) => {
    let ifArr = cartItem.filter((item) => item === id);
    if (ifArr.length <= 0) {
      dispatch(addToCart(id));
    } else {
      throw new Error("Уже есть в корзине");
    }
  };

  return (
    <div className="product">
      <div className="product_image">
        <img src={image} alt="" />
      </div>
      <div className="product_content clearfix">
        <div className="product_info">
          <div className="product_name">
            <Link to={link}>{name}</Link>
          </div>
          <div className="product_price">{priceCorrector(price)} &#8381;</div>
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

export default SingleProduct;
