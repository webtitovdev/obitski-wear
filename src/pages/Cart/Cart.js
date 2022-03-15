import { ErrorBoundary } from "react-error-boundary";
import Breadcrumbs from "../../components/breadCrumbs";
import TotalProductList from "../../components/totalProduct/TotalProductList";

const Cart = () => {
  return (
    <ErrorBoundary
      fallbackRender={() => (
        <div style={{ textAlign: "center", fontSize: "24px" }}>
          Ошибка в данном компоненте , перезагрузите страницу
        </div>
      )}
    >
      <Breadcrumbs />
      <div className="cart_container">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="cart_title">Корзина</div>
            </div>
          </div>
          <TotalProductList title={"Корзина"} />
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default Cart;
