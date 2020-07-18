import React from "react";
import { Input } from "../../atoms/Input/Input";
import { Button } from "../../atoms/Button/Button";
import s from "./SearchBar.module.css";
import SearchIcon from "@material-ui/icons/Search";

export const SearchBar = () => {
  return (
    <div className={s.searchBarWrapper}>
      <Input />
      <Button icon={SearchIcon} background="#F79B34" width="10%" />
    </div>
  );
};
