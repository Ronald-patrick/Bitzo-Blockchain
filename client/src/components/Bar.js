import React from "react";
import menuIcon from "./images/menu-icon.png";

const Bar = () => {
  return (
    <div className="Bar" onClick={() => console.log("Hello")}>
      <img src={menuIcon} alt="" />
    </div>
  );
};

export default Bar;
