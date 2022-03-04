import React from "react";

import { useGetDataQuery } from "../../api/api";
import PromoDiscountItem from "../promoDiscountItem/PromoDiscountItem";
import Spinner from "../spinner/Spinner";

const PromoDiscountList = () => {
  const { data, isLoading } = useGetDataQuery("promoDiscount");
  // console.log(data[0].turn);

  if (isLoading) {
    return <Spinner />;
  }
  if (!isLoading || data[0].turn === false) {
    return null;
  }
  const render = data[0].item.map((item, i) => (
    <PromoDiscountItem
      key={i}
      src={item.src}
      subtitle={item.subtitle}
      title={item.title}
    />
  ));

  return (
    <div className="promo">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="section_title_container text-center">
              <div className="section_subtitle">{data[0].subtitle}</div>
              <div className="section_title">{data[0].title}</div>
            </div>
          </div>
        </div>
        <div className="row promo_container">{render}</div>
      </div>
    </div>
  );
};

export default PromoDiscountList;
