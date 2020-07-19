import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { Logo } from "../../atoms/Logo/Logo";
import { Cart } from "../../molecules/Cart/Cart";
import { SearchBar } from "../../molecules/SearchBar/SearchBar";
import AmazonLogo from "./assets/amazon-logo.png";
export const Header = ({ goodsCount, login }) => {
  return (
    <div className={s.header}>
      <Logo logoIcon={AmazonLogo} width="100" margin="0px 0px -15px 20px" />
      <SearchBar />
      <div className={s.headerLinks}>
        <NavLink
          exact
          className={s.linkItem}
          activeClassName={s.active}
          to={"/returns-and-orders"}
        >
          <p>Returns &</p>
          Orders
        </NavLink>
        <NavLink
          className={s.linkItem}
          activeClassName={s.active}
          to={"/prime"}
        >
          <p>Your</p> Prime
        </NavLink>
        {login ? (
          <div className={s.loginBox}>
            <p className={s.userLoginDetail}>You loggined as</p>
            <p className={s.userLogin}>{login}</p>
          </div>
        ) : (
          <NavLink
            className={s.linkItem}
            activeClassName={s.active}
            to={"/sign-in"}
          >
            <p>Hello, </p>
            Sign in
          </NavLink>
        )}
      </div>
      <Cart goodsCount={goodsCount} />
    </div>
  );
};
