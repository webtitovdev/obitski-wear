import { ErrorBoundary } from "react-error-boundary";
import BreadCrumbs from "../../components/breadCrumbs";
import LeftSideBar from "./LeftSideBar/LeftSideBar";
import ProductSort from "./ProductSort/ProductSort";
import ProductList from "./ProductList";

const Categories = () => {
  return (
    <ErrorBoundary
      fallbackRender={() => (
        <div style={{ textAlign: "center", fontSize: "24px" }}>
          Ошибка в данном компоненте , перезагрузите страницу
        </div>
      )}
    >
      <BreadCrumbs />
      <div className="products">
        <div className="container">
          <div className="row">
            <LeftSideBar />
            <ProductSort />
          </div>
          <ProductList />
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default Categories;
