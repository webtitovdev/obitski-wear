import React from "react";
import { useSelector } from "react-redux";
import { useGetDataQuery } from "../../api/api";
import Product from "../product/Product";
import Spinner from "./../spinner/Spinner";

const ProductList = () => {
  const filters = useSelector((state) => state.categoriesfilter.filters);

  const { data, isLoading } = useGetDataQuery("productItem");
  if (isLoading) {
    return <Spinner />;
  }
  const dataCopied = [...data];
  // let newData = data;
  let newData = [];
  switch (filters.orderBy) {
    case "priceAsc":
      newData = dataCopied.sort((a, b) => a.price - b.price);
      break;
    case "priceDesc":
      newData = dataCopied.sort((a, b) => b.price - a.price);
      break;
    default:
      newData = data;
      break;
  }

  const render = newData.map((item) => (
    <Product
      key={item.id}
      image={item.src}
      name={item.name}
      price={item.price}
    />
  ));
  return (
    <div className="row products_container">
      <div className="col">
        <div className="product_grid">{render}</div>
      </div>
    </div>
  );
};

export default ProductList;
