import React from "react";
import { useGetDataQuery } from "../../api/api";
import Spinner from "../spinner/Spinner";
import PreviewShopItem from "../previewShopItem/PreviewShopItem";

const PreviewShopList = () => {
  const { data, isLoading } = useGetDataQuery("promoDiscount");
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="arrivals">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="section_title_container text-center">
              <div className="section_subtitle">only the best</div>
              <div className="section_title">new arrivals</div>
            </div>
          </div>
        </div>
        <div className="row products_container">
          <PreviewShopItem />
        </div>
      </div>
    </div>
  );
};

export default PreviewShopList;
