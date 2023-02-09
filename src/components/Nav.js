import React, { useState } from "react";
import Logo from "../assets/icons_assets/Logo.svg";
import "../style/Nav.css";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Nav = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <header className="nav">
        <img className="nav-image" src={Logo} alt="Little Lemon logo"></img>
        <nav>
          <ul className={click ? "nav-list active" : "nav-list"}>
            <li>
              <a className="nav-item" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="nav-item" href="/">
                About
              </a>
            </li>
            <li>
              <a className="nav-item" href="/">
                Menu
              </a>
            </li>
            <li>
              <a className="nav-item" href="reservations">
                Reservations
              </a>
            </li>
            <li>
              <a className="nav-item" href="/">
                Order Online
              </a>
            </li>
            <li>
              <a className="nav-item" href="/">
                Log In
              </a>
            </li>
          </ul>
        </nav>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <AiOutlineClose size={20} style={{ color: "#333333" }} />
          ) : (
            <AiOutlineMenu
              size={30}
              style={{
                color: "#333333",
                borderLeft: "1px solid #333333",
                paddingLeft: "10px",
                height: "20px"
              }}
            />
          )}
        </div>
      </header>
    </>
  );
};

export default Nav;
