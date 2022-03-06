import React from "react";
import { useGetDataQuery } from "../../api/api";
import Spinner from "../spinner/Spinner";
import PreviewShopItem from "../previewShopItem/PreviewShopItem";

const PreviewShopList = () => {
  const { data, isLoading } = useGetDataQuery("productItem");
  if (isLoading) {
    return <Spinner />;
  }
  const itemArray = data.map((item) => (
    <PreviewShopItem
      key={item.id}
      image={item.src}
      name={item.name}
      price={item.price}
    />
  ));

  return (
    <div className="arrivals">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="section_title_container text-center">
              <div className="section_subtitle">Только лучшее</div>
              <div className="section_title">Новая коллекция</div>
            </div>
          </div>
        </div>
        <div className="row products_container">
          {itemArray[itemArray.length - 1]}
          {itemArray[itemArray.length - 2]}
          {itemArray[itemArray.length - 3]}
        </div>
      </div>
    </div>
  );
};

export default PreviewShopList;