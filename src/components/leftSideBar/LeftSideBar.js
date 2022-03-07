import React from "react";
import { useDispatch } from "react-redux";
import CategoriesSideBar from "./../categoriesSideBar/CategoriesSideBar";
import { categoriesfiltered } from "../../slice/filtersSLice";

const LeftSideBar = () => {
  const dispatch = useDispatch();
  const onCategoriesFilter = (name) => {
    dispatch(categoriesfiltered(name));
  };
  return (
    <div className="col-12">
      <div className="sidebar_left clearfix">
        <>
          <CategoriesSideBar onCategoriesFilter={onCategoriesFilter} />
        </>
      </div>
    </div>
  );
};

export default LeftSideBar;
