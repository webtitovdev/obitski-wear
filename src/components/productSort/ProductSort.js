import React from "react";

const ProductSort = () => {
  return (
    <div className="col-12">
      <div className="product_sorting clearfix">
        <div className="sorting">
          <ul className="item_sorting">
            <li>
              <span className="sorting_text">Show all</span>
              <i className="fa fa-caret-down" aria-hidden="true"></i>
              <ul>
                <li
                  className="product_sorting_btn"
                  data-isotope-option='{ "sortBy": "original-order" }'
                >
                  <span>Show All</span>
                </li>
                <li
                  className="product_sorting_btn"
                  data-isotope-option='{ "sortBy": "price" }'
                >
                  <span>Price</span>
                </li>
                <li
                  className="product_sorting_btn"
                  data-isotope-option='{ "sortBy": "stars" }'
                >
                  <span>Stars</span>
                </li>
              </ul>
            </li>
            <li>
              <span className="sorting_text">Show</span>
              <span className="num_sorting_text">12</span>
              <i className="fa fa-caret-down" aria-hidden="true"></i>
              <ul>
                <li className="num_sorting_btn">
                  <span>3</span>
                </li>
                <li className="num_sorting_btn">
                  <span>6</span>
                </li>
                <li className="num_sorting_btn">
                  <span>12</span>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductSort;
