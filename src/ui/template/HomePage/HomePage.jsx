import React from "react";
import s from "./Home.module.css";
import AmazonBanner from "./assets/homepage-banner.jpg";
import { ProductsHolder } from "../../organisms/ProductsHolder/ProductsHolder";

export const Home = ({ onAddToCart }) => {
  return (
    <div className={s.homepage}>
      <div className={s.homepageBannerWrapper}>
        <img className={s.homepageBanner} src={AmazonBanner} alt="" />
      </div>
      <ProductsHolder onAddToCart={onAddToCart} />
    </div>
  );
};
