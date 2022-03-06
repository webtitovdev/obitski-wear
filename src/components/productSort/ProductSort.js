import React from "react";
import ProductSortSelect from "../productSortSelect/ProductSortSelect";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { ofsetFiltered, orderByFiltered } from "../../slice/filtersSLice";

const ProductSort = () => {
  const dispatch = useDispatch();
  const ofset = useSelector((state) => state.categoriesfilter.filters.ofset);
  const orderBy = useSelector(
    (state) => state.categoriesfilter.filters.orderBy
  );
  const orderByArr = [
    {
      title: "По популярности",
      button: [
        {
          name: "По популярности",
          lable: "ByPopular",
        },
        {
          name: "Сначала дешевые",
          lable: "priceAsc",
        },
        {
          name: "Сначала дорогие",
          lable: "priceDesc",
        },
      ],
    },
  ];
  const ofsetArr = [
    {
      title: "Показывает ",
      button: [
        {
          name: "3",
          lable: "3",
        },
        {
          name: "6",
          lable: "6",
        },
        {
          name: "12",
          lable: "12",
        },
      ],
    },
  ];
  let orderByName;
  if (orderBy === "ByPopular") {
    orderByName = "По популярности";
  } else if (orderBy === "priceAsc") {
    orderByName = "Сначала дешевые";
  } else if (orderBy === "priceDesc") {
    orderByName = "Сначала дорогие";
  } else if (orderBy === "") {
    orderByName = "По популярности";
  }

  const ofsetFiltering = (ofset) => {
    dispatch(ofsetFiltered(ofset));
  };
  const orderByFiltering = (orderBy) => {
    dispatch(orderByFiltered(orderBy));
  };

  const renderByOrder = orderByArr.map((item, i) => (
    <ProductSortSelect
      title={orderByName}
      key={i}
      button={item.button}
      sortf={(orderBy) => orderByFiltering(orderBy)}
    />
  ));
  const renderOfset = ofsetArr.map((item, i) => (
    <ProductSortSelect
      title={ofset === "" ? `${item.title} 12` : `Показывает   ${ofset}`}
      key={i}
      button={item.button}
      sortf={(ofset) => ofsetFiltering(ofset)}
    />
  ));
  return (
    <div className="col-12">
      <div className="product_sorting clearfix">
        <div className="sorting">
          <ul className="item_sorting">
            <>
              {renderByOrder}
              {renderOfset}
            </>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductSort;
