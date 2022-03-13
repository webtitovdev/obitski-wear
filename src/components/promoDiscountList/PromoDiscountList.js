import React from "react";

import { useGetDataQuery } from "../../api/api";
import PromoDiscountItem from "../promoDiscountItem/PromoDiscountItem";
import { isLoadingSpinner } from "./../../services/isLoadingSpinner";

const PromoDiscountList = () => {
  const { data = [], isLoading } = useGetDataQuery("promoDiscount");
  isLoadingSpinner(isLoading);
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
