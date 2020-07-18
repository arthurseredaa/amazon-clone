import React from "react";
import s from "./Input.module.css";

export const Input = () => {
  const onChangeHandler = (char) => console.log(char);

  return (
    <input
      type="text"
      className={s.searchBar}
      onChange={(e) => onChangeHandler(e.target.value)}
    />
  );
};
