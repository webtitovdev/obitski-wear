import React from "react";

const Pagination = () => {
  return (
    <div className="row page_num_container">
      <div className="col text-right">
        <ul className="page_nums">
          <li>
            <a href="#">01</a>
          </li>
          <li className="active">
            <a href="#">02</a>
          </li>
          <li>
            <a href="#">03</a>
          </li>
          <li>
            <a href="#">04</a>
          </li>
          <li>
            <a href="#">05</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Pagination;
