import React from "react";
import { useLocation } from "react-router-dom";
import { useGetDataQuery, useDeleteByIdMutation } from "../api/api";
import ChangedItem from "../components/changedItem/ChangedItem";
import AddNewItemForm from "../components/addNewItemForm/AddNewItemForm";
import Spinner from "../components/spinner/Spinner";
import Button from "@mui/material/Button";

const ChangeItem = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  let getDataParams;
  switch (pathname) {
    case "/controlpanel/headsliderimagechange":
      getDataParams = "headSliderImages";
      break;
    case "/controlpanel/promodiscountchange":
      getDataParams = "promoDiscount";
      break;
    case "/controlpanel/productitemchange":
      getDataParams = "productItem";
      break;
    case "/controlpanel/newschange":
      getDataParams = "news";
      break;
    case "/controlpanel/faqchange":
      getDataParams = "faq";
      break;
    case "/controlpanel/categorieschange":
      getDataParams = "categories";
      break;
    case "/controlpanel/logindatachange":
      getDataParams = "loginData";
      break;
    default:
      console.log("Default");
  }
  const [deleteById] = useDeleteByIdMutation();
  const { data, isLoading } = useGetDataQuery(getDataParams);
  if (isLoading) {
    return <Spinner />;
  }
  const render = data.map(
    (item) =>
      item && (
        <ChangedItem
          getDataParams={getDataParams}
          key={item.id}
          id={item.id}
          name={item.name}
          image={item.src}
          procent={item.procent}
          price={item.price}
          title={item.title}
          text={item.text}
          props={item}
          deleteById={(id) => deleteById(`${getDataParams}/${id}`).unwrap()}
        />
      )
  );
  return (
    <>
      <div className="container">
        <div className="row mt-200">
          <div className="col">
            <div className="cart_bar d-flex flex-row align-items-center justify-content-start">
              <div className="cart_bar_title_name">Информация</div>
              <div className="cart_bar_title_content ml-auto">
                <div className="cart_bar_title_content_inner d-flex flex-row align-items-center justify-content-end">
                  <div className="cart_bar_title_quantity">Изменить</div>
                  <div className="cart_bar_title_total">Удалить</div>
                  <div className="cart_bar_title_button"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">{render}</div>
        </div>
        <div className="row">
          <Button
            onClick={handleOpen}
            sx={{ margin: "20px auto" }}
            variant="contained"
          >
            Добавить еще
          </Button>
        </div>
        <AddNewItemForm
          getDataParams={getDataParams}
          open={open}
          handleClose={handleClose}
          props={data[0]}
        />
      </div>
    </>
  );
};

export default ChangeItem;
