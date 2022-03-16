import { useDispatch, useSelector } from "react-redux";
import { useGetDataQuery } from "../../../api/api";
import { clearFilter } from "../../../slice/filtersSLice";
import Spinner from "../../../components/Spinner";

const CategoriesSideBar = ({ onCategoriesFilter }) => {
  const { categories } = useSelector((state) => state.categoriesfilter.filters);
  const dispatch = useDispatch();
  const { data = [], isLoading } = useGetDataQuery("categories");

  if (isLoading) {
    return <Spinner />;
  }

  const render = data.map((item) => {
    if (item.name === categories) {
      return (
        <li
          key={item.id}
          className="categories_li_active"
          onClick={(name) => onCategoriesFilter(item.name)}
        >
          {item.name}
        </li>
      );
    } else {
      return (
        <li
          key={item.id}
          className="categories_li"
          onClick={(name) => onCategoriesFilter(item.name)}
        >
          {item.name}
        </li>
      );
    }
  });

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
