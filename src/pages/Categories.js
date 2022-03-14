import BreadCrumbs from "../components/breadCrumbs/breadCrumbs";
import ProductSort from "../components/productSort/ProductSort";
import LeftSideBar from "../components/leftSideBar/LeftSideBar";
import ProductList from "../components/productList/ProductList";

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
