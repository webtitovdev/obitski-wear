import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useGetDataQuery, useDeleteByIdMutation } from "../../api/api";
import { ErrorBoundary } from "react-error-boundary";

import ChangedItem from "./ChangedItem";
import ChangeItemForm from "./ChangeItemForm";
import Spinner from "../../components/Spinner";

import Button from "@mui/material/Button";

const ChangeItem = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
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
          props={item}
          deleteById={(id) => deleteById(`${getDataParams}/${id}`).unwrap()}
        />
      )
  );

  return (
    <ErrorBoundary
      fallbackRender={() => (
        <div style={{ textAlign: "center", fontSize: "24px" }}>
          Ошибка в данном компоненте , перезагрузите страницу
        </div>
      )}
    >
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
        <ChangeItemForm
          Change={"add"}
          getDataParams={getDataParams}
          open={open}
          handleClose={handleClose}
          props={data[0]}
        />
      </div>
    </ErrorBoundary>
  );
};

export default ChangeItem;
