import React from "react";
import { useGetDataQuery } from "../../api/api";
import NewsItem from "../newsItem/NewsItem";
import { isLoadingSpinner } from "./../../services/isLoadingSpinner";

const NewsList = () => {
  const { data = [], isLoading } = useGetDataQuery("news");
  isLoadingSpinner(isLoading);
  const render = data.map((item, i) => (
    <NewsItem
      index={i}
      key={item.id}
      image={item.src}
      title={item.name}
      text={item.text}
      link={item.link}
      discount={item.procent}
    />
  ));
  return <div className="extra clearfix">{render}</div>;
};

export default NewsList;
