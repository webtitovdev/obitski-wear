import React from "react";
import { useDispatch } from "react-redux";
import CategoriesSideBar from "./../categoriesSideBar/CategoriesSideBar";
import ColorSideBar from "./../colorSideBar/ColorSideBar";
import SizeSideBar from "./../sizeSideBar/SizeSideBar";
import {
  categoriesfiltered,
  colorFiltered,
  sizeFiltered,
} from "../../slice/filtersSLice";

const LeftSideBar = () => {
  const dispatch = useDispatch();
  const onCategoriesFilter = (name) => {
    dispatch(categoriesfiltered(name));
  };
  const onColorFilter = (name) => {
    dispatch(colorFiltered(name));
  };
  const onSizeFilter = (name) => {
    dispatch(sizeFiltered(name));
  };
  return (
    <div className="col-12">
      <div className="sidebar_left clearfix">
        <>
          <CategoriesSideBar onCategoriesFilter={onCategoriesFilter} />
          <ColorSideBar onColorFilter={onColorFilter} />
          <SizeSideBar onSizeFilter={onSizeFilter} />
        </>
      </div>
      <div className="current_page">Woman's Fashion</div>
    </div>
  );
};

export default LeftSideBar;
