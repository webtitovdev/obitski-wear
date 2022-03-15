import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ErrorBoundary } from "react-error-boundary";

import Button from "@mui/material/Button";

const ControlPanel = () => {
  const { auth } = useSelector((state) => state.login);

  const component = (
    <>
      <Button variant="contained">
        <Link to="headsliderimagechange">Картинки слайдера</Link>
      </Button>
      <Button variant="contained">
        <Link to="promodiscountchange">Акции</Link>
      </Button>
      <Button variant="contained">
        <Link to="productitemchange">Товар</Link>
      </Button>
      <Button variant="contained">
        <Link to="newschange">Новости</Link>
      </Button>
      <Button variant="contained">
        <Link to="categorieschange">Категории</Link>
      </Button>
      <Button variant="contained">
        <Link to="logindatachange">Пароль/Логин</Link>
      </Button>
    </>
  );

  const render = auth ? component : "Авторизируйтесь";

  return (
    <ErrorBoundary
      fallbackRender={() => (
        <div style={{ textAlign: "center", fontSize: "24px" }}>
          Ошибка в данном компоненте , перезагрузите страницу
        </div>
      )}
    >
      <div className="container h-50vh">
        <div className="mt-200">
          <div className="list-button">{render}</div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default ControlPanel;
