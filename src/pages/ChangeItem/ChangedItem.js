import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Button from "@mui/material/Button";
import ChangeItemForm from "./ChangeItemForm";

import trash from "../../images/trash.png";

const ChangedItem = ({ getDataParams, deleteById, props }) => {
  const { src, name, price, id, procent, text, categories } = props;
  const isAuth = useSelector((state) => state.login.auth);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  if (!isAuth) {
    return "Авторизируйтесь";
  }

  return (
    <div className="cart_products">
      <ul>
        <li className=" cart_product d-flex flex-md-row flex-column align-items-md-center align-items-start justify-content-start">
          <div className="cart_product_image">
            <img src={src} alt={name} />
          </div>

          <div className="cart_product_name">
            <Link to={`../categories/products/${id}`}>
              {name} {procent} {price} {text} {categories}
            </Link>
          </div>
          <div className="cart_product_info ml-auto">
            <div className="cart_product_info_inner d-flex flex-row align-items-center justify-content-md-end justify-content-start">
              <div className="product_quantity_container">
                <div className="  clearfix">
                  <Button onClick={handleOpen} variant="contained">
                    Изменить
                  </Button>
                </div>
              </div>
              <div className="cart_product_button">
                <button
                  onClick={() => deleteById(id)}
                  className="cart_product_remove"
                >
                  <img src={trash} alt="" />
                </button>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <ChangeItemForm
        getDataParams={getDataParams}
        change={"change"}
        open={open}
        handleClose={handleClose}
        props={props}
      />
    </div>
  );
};

export default ChangedItem;
