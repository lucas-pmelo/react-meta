import React from "react";
import Logo from "../assets/icons_assets/logo.png";
import "../style/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <img className="footer-image" src={Logo} alt="Little Lemon logo"></img>
      <ul className="footer-list">
        <li>Doormat Navigation</li>
        <br />
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Menu</a>
        </li>
        <li>
          <a href="reservations">Reservations</a>
        </li>
        <li>
          <a href="/">Order Online</a>
        </li>
        <li>
          <a href="/">Login</a>
        </li>
      </ul>
      <ul className="footer-list">
        <li>Contact</li>
        <br />
        <li>
          <a href="/">Adress</a>
        </li>
        <li>
          <a href="/">Phone Number</a>
        </li>
        <li>
          <a href="/">Email</a>
        </li>
      </ul>
      <ul className="footer-list">
        <li>Social Media Links</li>
        <br />
        <li>
          <a href="/">Adress</a>
        </li>
        <li>
          <a href="/">Phone Number</a>
        </li>
        <li>
          <a href="/">Email</a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
