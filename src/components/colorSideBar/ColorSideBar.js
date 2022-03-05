import React from "react";

import Spinner from "../../components/spinner/Spinner";
import { useGetDataQuery } from "../../api/api";
import SideBarSection from "../sideBarSection/SideBarSection";

const ColorSideBar = ({ onColorFilter }) => {
  const { data, isLoading } = useGetDataQuery("color");

  if (isLoading) {
    return <Spinner />;
  }
  const render = data.map((item) => (
    <SideBarSection
      key={item.id}
      lable={item.lable}
      name={item.name}
      onHandleFilters={(name) => onColorFilter(item.name)}
    />
  ));
  return (
    <div className="sidebar_section">
      <div className="sidebar_title">{"Цвет"}</div>
      <div className="sidebar_section_content">
        <ul>{render}</ul>
      </div>
    </div>
  );
};

export default ColorSideBar;
