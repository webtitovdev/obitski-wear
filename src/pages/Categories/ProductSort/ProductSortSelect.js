const ProductSortSelect = ({ title, button, sortf }) => {
  const buttonRender = button.map((item, i) => {
    return (
      <li key={i} className="product_sorting_btn">
        <span onClick={() => sortf(item.lable)}>{item.name}</span>
      </li>
    );
  });
  return (
    <li>
      <span className="sorting_text">{title}</span>
      <i className="fa fa-caret-down" aria-hidden="true"></i>
      <ul>{buttonRender}</ul>
    </li>
  );
};

export default ProductSortSelect;
