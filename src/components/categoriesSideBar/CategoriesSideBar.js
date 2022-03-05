import React from "react";

import Spinner from "../../components/spinner/Spinner";
import { useGetDataQuery } from "../../api/api";
import SideBarSection from "../sideBarSection/SideBarSection";

const CategoriesSideBar = ({ onCategoriesFilter }) => {
  const { data, isLoading } = useGetDataQuery("categories");
  if (isLoading) {
    return <Spinner />;
  }

  const render = data.map((item) => (
    <SideBarSection
      onHandleFilters={(name) => onCategoriesFilter(item.name)}
      key={item.id}
      lable={item.lable}
      name={item.name}
    />
  ));
  return (
    <div className="sidebar_section">
      <div className="sidebar_title">{"Категории"}</div>
      <div className="sidebar_section_content">
        <ul>{render}</ul>
      </div>
    </div>
  );
};

export default CategoriesSideBar;
