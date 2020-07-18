import React from "react";
import s from "./Cart.module.css";
import { NavLink } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
export const Cart = ({ goodsCount }) => {
  return (
    <div className={s.headerCart}>
      <NavLink to={"/cart"} activeClassName={s.active}>
        <ShoppingCartOutlinedIcon />
        <h3 className={s.goodsCount}>{goodsCount}</h3>
      </NavLink>
    </div>
  );
};
