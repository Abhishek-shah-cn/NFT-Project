import React from "react";
import "./Navbar.css";
import logo from "./logo.png";

function Navbar() {
  return (
    <div>
      <div className="head-menu">
        <img src={logo} alt="" />

        <div className="topnav-right">
          <a href="">Contact</a>
          <a href="">EcoSystem</a>
          <a href="">Features</a>
          <a href="">Overview</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
