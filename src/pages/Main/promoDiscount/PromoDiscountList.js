import { useGetDataQuery } from "../../../api/api";

import PromoDiscountItem from "./PromoDiscountItem";
import Spinner from "../../../components/spinner/Spinner";

const PromoDiscountList = () => {
  const { data = [], isLoading } = useGetDataQuery("promoDiscount");

  if (isLoading) {
    return <Spinner />;
  }

  const render = data.map((item, i) => (
    <PromoDiscountItem
      key={i}
      image={item.src}
      subtitle={item.procent}
      title={item.name}
    />
  ));

  return (
    <div className="promo">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="section_title_container text-center">
              <div className="section_subtitle">Акции</div>
              <div className="section_title">Акционные цены</div>
            </div>
          </div>
        </div>
        <div className="row promo_container">{render}</div>
      </div>
    </div>
  );
};

export default PromoDiscountList;
