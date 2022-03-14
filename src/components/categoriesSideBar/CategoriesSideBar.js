import React from "react";

import { useDispatch } from "react-redux";
import { useGetDataQuery } from "../../api/api";
import SideBarSection from "../sideBarSection/SideBarSection";
import { clearFilter } from "../../slice/filtersSLice";
import Spinner from "../spinner/Spinner";

const CategoriesSideBar = ({ onCategoriesFilter }) => {
  const dispatch = useDispatch();
  const { data = [], isLoading } = useGetDataQuery("categories");
  if (isLoading) {
    return <Spinner />;
  }

  const render = data.map((item) => (
    <SideBarSection
      onHandleFilters={(name) => onCategoriesFilter(item.name)}
      key={item.id}
      lable={item.text}
      name={item.name}
    />
  ));
  return (
    <>
      <div className="sidebar_section">
        <div className="sidebar_title">{"Категории"}</div>
        <div className="sidebar_section_content">
          <ul>{render}</ul>
        </div>
      </div>
      <button
        onClick={() => dispatch(clearFilter())}
        className="button_update cart_button_2 ml-md-auto"
      >
        Очистить
      </button>
    </>
  );
};

export default CategoriesSideBar;
