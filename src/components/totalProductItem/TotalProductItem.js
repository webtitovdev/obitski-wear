import { useDispatch } from "react-redux";
import { deletFromCart, deletFromFavorits } from "../../slice/productSlice";
import { priceCorrector } from "./../../services/priceCorrector";
import { Link } from "react-router-dom";

import Spinner from "../spinner/Spinner";

import trash from "../../images/trash.png";

const TotalProductItem = ({ image, name, price, id, title, isLoading }) => {
  const dispatch = useDispatch();

  if (isLoading) {
    <Spinner />;
  }

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
            <Link to={`/categories/products/${id}`}>{name}</Link>
          </div>
          <div className="cart_product_info ml-auto">
            <div className="cart_product_info_inner d-flex flex-row align-items-center justify-content-md-end justify-content-start">
              <div className="cart_product_price">
                {priceCorrector(price)} &#8381;
              </div>
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
