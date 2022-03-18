import { Link } from "react-router-dom";

import React, { useState, useEffect } from "react";
import "./index.css";
import logo from "../image/logo.png";
import Navbarmenu from "../image/menu.png";

const navbarContainerForAll = (props) => {
  window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });

  return (
    <div className="navbar-for-all_container">
      <header>
        <a href="/" className="logo">
          <img src={logo} width="350" />
        </a>
        <input type="checkbox" id="click"></input>
        <label for="click" className="navbar_menu">
          <img src={Navbarmenu} />
        </label>
        <ul>
          <li>
            <a href="/shoppingpage">SHOP</a>
          </li>
          <li>
            <a href="/contactpage">CONTACT</a>
          </li>
          <li>
            <a href="/aboutpage">ABOUT</a>
          </li>
          <li>
            <a href="/loginpage">ACCOUNT</a>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default navbarContainerForAll;
