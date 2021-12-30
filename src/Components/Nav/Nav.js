import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import { BsFillCartFill } from "react-icons/bs";
import { HiMenu } from "react-icons/hi";

const Nav = () => {
  const [menuClick, setMenuClick] = useState(false);
  const handlerMenuClick = () => {
    if (menuClick) setMenuClick(false);
    else setMenuClick(true);
  };

  const list = () => {
    return (
      <React.Fragment>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="#">About us</Link>
        </li>
        <li>
          <Link to="#">Shop</Link>
        </li>
      </React.Fragment>
    );
  };
  return (
    <React.Fragment>
      <nav className="nav_Bar">
        <Link to="/">
          <div className="Logo">
            <img src="./assest/img/Logo.png" alt="dress up logo" />
          </div>
        </Link>
        <ul className="nav_List">{list()}</ul>
        <div className="nav_Icons">
          <BsFillCartFill className="cart" />
          <li>
            <Link to="/login">Login</Link>
          </li>
        </div>
        <HiMenu class="menu" onClick={handlerMenuClick} />
      </nav>
      <div className={menuClick ? "burger_Menu" : "hide_Menu"}>{list()}</div>
    </React.Fragment>
  );
};
export default Nav;
