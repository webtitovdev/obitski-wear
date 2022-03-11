import React from "react";
import Button from "@mui/material/Button";
import ChangeItemForm from "../changeItemForm/ChangeItemForm";

import trash from "../../images/trash.png";

const ChangedItem = ({
  getDataParams,
  image,
  name,
  price,
  id,
  title,
  procent,
  text,
  deleteById,
  props,
}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="cart_products">
      <ul>
        <li className=" cart_product d-flex flex-md-row flex-column align-items-md-center align-items-start justify-content-start">
          <div className="cart_product_image">
            <img src={image} alt={name} />
          </div>

          <div className="cart_product_name">
            <a href="product.html">
              {name} {procent} {price} {text}
            </a>
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
        id={id}
        open={open}
        handleClose={handleClose}
        props={props}
      />
    </div>
  );
};

export default ChangedItem;
