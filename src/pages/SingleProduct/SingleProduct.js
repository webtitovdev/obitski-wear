import { Link, useParams } from "react-router-dom";
import { useGetDataQuery } from "../../api/api";
import { priceCorrector } from "../../services/priceCorrector";
import { useDispatch } from "react-redux";
import { addToCart } from "../../slice/productSlice";
import { ErrorBoundary } from "react-error-boundary";

import Spinner from "../../components/Spinner";
import BreadCrumbs from "../../components/breadCrumbs";

const SingleProduct = () => {
  const dispatch = useDispatch();
  const { data = [], isLoading } = useGetDataQuery("productItem");
  const { id } = useParams();

  if (isLoading) {
    return <Spinner />;
  }

  const getItemByid = data.filter((item) => item.id === id);
  const { src, name, price, about, size } = getItemByid[0];

  return (
    <ErrorBoundary
      fallbackRender={() => (
        <div style={{ textAlign: "center", fontSize: "24px" }}>
          Ошибка в данном компоненте , перезагрузите страницу
        </div>
      )}
    >
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
                <div className="product_price">
                  {priceCorrector(price)} &#8381;
                </div>
                <div className="product_text">
                  <p>{about}</p>
                </div>

                <div className="product_item_size_container">
                  <span>Размеры</span>
                  <div className="product_size">
                    <ul className="d-flex flex-row align-items-start justify-content-start">
                      <li>
                        <div className="size_productitem">{size}</div>
                      </li>
                    </ul>
                  </div>
                  <div className="button cart_button_item">
                    <Link onClick={() => dispatch(addToCart(id))} to={"/cart"}>
                      Добавить в корзину
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default SingleProduct;
