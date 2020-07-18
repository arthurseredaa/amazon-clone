import React from "react";
import ShoppingBasketOutlinedIcon from "@material-ui/icons/ShoppingBasketOutlined";
import s from "./TotalPrice.module.css";

export const TotalPrice = ({ totalPrice }) => {
  return (
    <div className={s.totalPrice}>
      <div className={s.totalPriceCard}>
        <h3>Total price:</h3>
        <h1>{totalPrice}₴</h1>
        <button className={s.buyButton}>
          Buy <ShoppingBasketOutlinedIcon />
        </button>
      </div>
    </div>
  );
};
