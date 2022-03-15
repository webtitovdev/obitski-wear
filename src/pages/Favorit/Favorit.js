import { useSelector } from "react-redux";

import BreadCrumbs from "../../components/breadCrumbs";
import TotalProductList from "../../components/totalProduct/TotalProductList";

const Favorit = () => {
  const { favorits } = useSelector((state) => state.productFunc);

  return (
    <>
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
    </>
  );
};

export default Favorit;
