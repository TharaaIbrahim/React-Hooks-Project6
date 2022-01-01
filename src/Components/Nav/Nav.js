import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import { BsFillCartFill } from "react-icons/bs";
import { HiMenu } from "react-icons/hi";
import { useHistory } from "react-router-dom";

const Nav = ({ logged, setLogged }) => {
  const history = useHistory();
  const [menuClick, setMenuClick] = useState(false);
  const handlerMenuClick = () => {
    if (menuClick) setMenuClick(false);
    else setMenuClick(true);
  };
  const logoutHandle = () => {
    localStorage.removeItem("logged");
    setLogged(localStorage.getItem(logged));
  };
  const cartdirect = () => {
    history.push("./cart");
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
          <Link to="/shop">Shop</Link>
        </li>
        {logged ? (
          <li>
            <Link to="/account">Account</Link>
          </li>
        ) : null}
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
          <BsFillCartFill className="cart" onClick={cartdirect} />
          <li>
            {logged ? (
              <Link to="/" onClick={logoutHandle}>
                Logout
              </Link>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </li>
        </div>
        <HiMenu className="menu" onClick={handlerMenuClick} />
      </nav>
      <div className={menuClick ? "burger_Menu" : "hide_Menu"}>{list()}</div>
    </React.Fragment>
  );
};
export default Nav;
