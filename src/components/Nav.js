import React from "react";
import Logo from "../assets/icons_assets/Logo.svg";
import "../style/Nav.css";

const Nav = () => {
  return (
    <div>
      <img src={Logo} alt="Little Lemon logo"></img>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Menu</a>
        </li>
        <li>
          <a href="#">Reservations</a>
        </li>
        <li>
          <a href="#">Order Online</a>
        </li>
        <li>
          <a href="#">Log In</a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
