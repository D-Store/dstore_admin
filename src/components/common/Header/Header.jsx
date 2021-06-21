import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = {
    "border-bottom": "2px solid white",
    "border-width": "3px",
  };

  return (
    <div className="Header">
      <div className="Header-template">
        <div className="Header-main">D'store</div>
        <div className="Header-items">
          <div className="Header-items-option">
            <NavLink
              to="/UserInfo"
              className="Header-items-option-link"
              activeStyle={activeStyle}
            >
              {" "}
              userInfo{" "}
            </NavLink>
            <NavLink
              to="/"
              className="Header-items-option-link"
              // activeStyle={activeStyle}
            >
              {" "}
              aaaa{" "}
            </NavLink>
            <NavLink
              to="/banner"
              className="Header-items-option-link"
              activeStyle={activeStyle}
            >
              {" "}
              bbbbb{" "}
            </NavLink>
          </div>
          <div className="Header-items-log">logs</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
