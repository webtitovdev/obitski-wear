import BreadCrumbs from "../../components/breadCrumbs";
import LeftSideBar from "./LeftSideBar/LeftSideBar";
import ProductSort from "./ProductSort/ProductSort";
import ProductList from "./ProductList";

const Categories = () => {
  return (
    <>
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
    </>
  );
};

export default Categories;
