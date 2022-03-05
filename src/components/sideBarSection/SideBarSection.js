import React from "react";

const SideBarSection = ({ lable, onHandleFilters }) => {
  return <li onClick={onHandleFilters}>{lable}</li>;
};

export default SideBarSection;
