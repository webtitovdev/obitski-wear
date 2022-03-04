import React from "react";

import HeadSlider from "../components/headSlider/HeadSlider";
import PromoDiscountList from "../components/promoDiscountList/PromoDiscountList";
import PreviewShopList from "../components/previewShopList/PreviewShopList";
import NewsList from "../components/newsList/NewsList";
import InstaFeed from "../components/instaFeed/InstaFeed";
import Reviews from "../components/reviews/Reviews";

const Main = () => {
  return (
    <>
      <HeadSlider />
      <PromoDiscountList />
      <PreviewShopList />
      <NewsList />
      <InstaFeed />
      <Reviews />
    </>
  );
};

export default Main;
