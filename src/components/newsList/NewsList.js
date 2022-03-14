import React from "react";
import { useGetDataQuery } from "../../api/api";
import NewsItem from "../newsItem/NewsItem";
import Spinner from "../spinner/Spinner";

const NewsList = () => {
  const { data = [], isLoading } = useGetDataQuery("news");
  if (isLoading) {
    return <Spinner />;
  }
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
