import { useSelector } from "react-redux";
import { ErrorBoundary } from "react-error-boundary";

import BreadCrumbs from "../../components/breadCrumbs";
import TotalProductList from "../../components/totalProduct/TotalProductList";

const Favorit = () => {
  const { favorits } = useSelector((state) => state.productFunc);

  return (
    <ErrorBoundary
      fallbackRender={() => (
        <div style={{ textAlign: "center", fontSize: "24px" }}>
          Ошибка в данном компоненте , перезагрузите страницу
        </div>
      )}
    >
      <BreadCrumbs />
      <div className="cart_container">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="cart_title">Избранное</div>
            </div>
          </div>
          <TotalProductList store={favorits} title={"Избранное"} />
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default Favorit;
