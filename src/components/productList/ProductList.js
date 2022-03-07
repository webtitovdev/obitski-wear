import React from "react";
import { useSelector } from "react-redux";
import { useGetDataQuery } from "../../api/api";
import Product from "../product/Product";
import Spinner from "./../spinner/Spinner";

const ProductList = () => {
  const { categories, ofset, orderBy } = useSelector(
    (state) => state.categoriesfilter.filters
  );
  const { data, isLoading } = useGetDataQuery("productItem");
  if (isLoading) {
    return <Spinner />;
  }
  let dataCopied = [...data];

  switch (orderBy) {
    case "ByPopular":
      dataCopied = [...data];
      break;
    case "priceAsc":
      dataCopied = dataCopied.sort((a, b) => a.price - b.price);
      break;
    case "priceDesc":
      dataCopied = dataCopied.sort((a, b) => b.price - a.price);
      break;
    default:
      dataCopied = [...data];
  }
  dataCopied = dataCopied.slice(0, ofset);
  if (categories) {
    dataCopied = dataCopied.filter((item) => item.categories === categories);
  }
  const render = dataCopied.map((item) => (
    <Product
      key={item.id}
      image={item.src}
      name={item.name}
      price={item.price}
      id={item.id}
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
