import React from "react";

import Spinner from "../../components/spinner/Spinner";
import { useGetDataQuery } from "../../api/api";
import SideBarSection from "../sideBarSection/SideBarSection";

const SizeSideBar = ({ onSizeFilter }) => {
  const { data, isLoading } = useGetDataQuery("size");

  if (isLoading) {
    return <Spinner />;
  }
  const render = data.map((item) => (
    <SideBarSection
      key={item.id}
      lable={item.lable}
      name={item.name}
      onHandleFilters={(name) => onSizeFilter(item.name)}
    />
  ));
  return (
    <div className="sidebar_section">
      <div className="sidebar_title">{"Размер"}</div>
      <div className="sidebar_section_content">
        <ul>{render}</ul>
      </div>
    </div>
  );
};

export default SizeSideBar;
