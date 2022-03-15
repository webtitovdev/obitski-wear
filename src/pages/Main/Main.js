import { ErrorBoundary } from "react-error-boundary";

import HeadSlider from "./HeadSlider";
import PromoDiscountList from "./promoDiscount/PromoDiscountList";
import PreviewShopList from "./PreviewShopList";
import NewsList from "./news/NewsList";

const Main = () => {
  return (
    <>
      <ErrorBoundary
        fallbackRender={() => (
          <div style={{ textAlign: "center", fontSize: "24px" }}>
            Ошибка в данном компоненте , перезагрузите страницу
          </div>
        )}
      >
        <HeadSlider />
      </ErrorBoundary>
      <ErrorBoundary
        fallbackRender={() => (
          <div style={{ textAlign: "center", fontSize: "24px" }}>
            Ошибка в данном компоненте , перезагрузите страницу
          </div>
        )}
      >
        <PromoDiscountList />
      </ErrorBoundary>
      <ErrorBoundary
        fallbackRender={() => (
          <div style={{ textAlign: "center", fontSize: "24px" }}>
            Ошибка в данном компоненте , перезагрузите страницу
          </div>
        )}
      >
        <PreviewShopList />
      </ErrorBoundary>
      <ErrorBoundary
        fallbackRender={() => (
          <div style={{ textAlign: "center", fontSize: "24px" }}>
            Ошибка в данном компоненте , перезагрузите страницу
          </div>
        )}
      >
        <NewsList />
      </ErrorBoundary>
    </>
  );
};

export default Main;
