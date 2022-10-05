import React from "react";
import Links from "./Links";
import logo from "./images/logo.png";
import Bar from "./Bar";
import { useState, useEffect } from "react";
import menuIcon from "./images/menu-icon.png";


const Header = () => {
  const [menu, setMenu] = useState(window.innerWidth > 590);

  return (
    <div className="Header-div">
      <div className="Header-left">
        <img src={logo} alt="" className="logo" />
      </div>
      <div className="Header-right">
        {/* <Bar /> */}
        <div
          className="Bar"
          onClick={() => {
            setMenu(!menu)
            console.log(menu);
          }}
        >
          <img src={menuIcon} alt="" />
        </div>
      </div>
      <Links menuState = {menu} />
    </div>
  );
};

export default Header;
