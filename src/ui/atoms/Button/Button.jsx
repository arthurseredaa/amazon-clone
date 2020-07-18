import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import s from "./Button.module.css";

export const Button = ({
  background = "transparent",
  border = "none",
  width,
  icon,
}) => {
  let styles = {
    background,
    border,
    outline: "none",
    width,
  };

  return (
    <button style={styles} className={s.button}>
      <SearchIcon />
    </button>
  );
};
