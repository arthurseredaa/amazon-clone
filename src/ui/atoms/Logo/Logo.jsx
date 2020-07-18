import React from "react";
import s from "./Logo.module.css";
import { NavLink } from "react-router-dom";

export const Logo = ({ logoIcon, width, margin }) => {
  let styles = {
    margin: margin,
  };
  return (
    <NavLink exact to="/">
      <div className={s.headerLogo} style={styles}>
        <img src={logoIcon} alt="logoIcon" width={width} />
      </div>
    </NavLink>
  );
};
