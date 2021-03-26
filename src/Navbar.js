import React from "react";
import "./Navbar.css";
import logo from "./logo.png";

function Navbar() {
  return (
    <div>
      <div className="head-menu">
        <div className="logo">
          <img src={logo} alt="" />
        </div>

        <div className="topnav">
          <a href="">Contact</a>
          <a href="">Litepaper</a>
          <a href="">Team</a>
          <a href="">Overview</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
