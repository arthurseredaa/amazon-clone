import React from "react";
import "./Preloader.css";

export const Preloader = ({ bgcolor }) => {
  let styles = {
    backgroundColor: bgcolor,
  };
  return (
    <div className="lds-ellipsis">
      <div style={styles}></div>
      <div style={styles}></div>
      <div style={styles}></div>
      <div style={styles}></div>
    </div>
  );
};
