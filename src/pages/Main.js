import React from "react";

import HeadSlider from "../components/headSlider/HeadSlider";
import PromoDiscount from "../components/promoDiscount/PromoDiscount";
import PreviewShopItem from "../components/previewShopItem/PreviewShopItem";
import News from "./../components/news/News";
import InstaFeed from "../components/instaFeed/InstaFeed";
import Reviews from "../components/reviews/Reviews";

const Main = () => {
  return (
    <>
      <HeadSlider />
      <PromoDiscount />
      <PreviewShopItem />
      <News />
      <InstaFeed />
      <Reviews />
    </>
  );
};

export default Main;
