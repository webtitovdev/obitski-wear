import Breadcrumbs from "../components/breadCrumbs/breadCrumbs";
import TotalProductList from "../components/totalProductList/TotalProductList";

const Cart = () => {
  return (
    <>
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
    </>
  );
};

export default Cart;
