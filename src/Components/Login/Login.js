import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Home from "../Home/Home";
import "./Login.css";

function Login({ setLogged }) {
  const [storedData, setStoredData] = useState({
    email: "",
    password: "",
    loginError: "",
  });

  const [breakStatus, setBreakStatus] = useState(false);

  const history = useHistory();
  const userData = JSON.parse(localStorage.getItem("userData"));
  const dressID = localStorage.getItem("selectedDress");

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setStoredData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    userData.forEach((user) => {
      if (storedData.email === user.email) {
        if (storedData.password !== user.password) {
          setStoredData((prev) => {
            return { ...prev, loginError: "Incorrect Password" };
          });
        } else {
          setStoredData((prev) => {
            return { ...prev, loginError: "" };
          });
          localStorage.setItem("logged", storedData.email);
          setLogged(true);
          if (dressID) {
            history.push({
              pathname: "./checkout",
            });
          } else
            history.push({
              pathname: "./shop",
            });
        }
      } else {
        setBreakStatus(true);
      }
      if (storedData.email !== user.email && breakStatus) {
        setStoredData((prev) => {
          return { ...prev, loginError: "You are not registered" };
        });
        setBreakStatus(false);
      }
    });
  };
  if (!localStorage.getItem("logged")) {
    return (
      <div className="login-page">
        <img
          className="login-img"
          src="../assest/img/loginpic.jpg"
          alt="dresse's sketch"
        />
        <div className="Form">
          <h1>Login</h1>
          <form className="form_Fields" onSubmit={submitHandler}>
            <label htmlFor="loginEmail">Email:</label>
            <input
              type="email"
              value={storedData.email}
              name="email"
              id="loginEmail"
              onChange={changeHandler}
              placeholder="eg: name@gmail.com"
              required
            />

            <label htmlFor="loginPassword">Passwrod:</label>
            <input
              type="password"
              value={storedData.password}
              name="password"
              id="loginPassword"
              onChange={changeHandler}
              placeholder="eg: rr202"
              required
            />
            <p className="loginError">{storedData.loginError}</p>
            <button className="form_btn" type="submit">
              Login
            </button>
            <p>
              New User?
              <Link className="register-link" to="/register">
                Create Account Here
              </Link>
            </p>
          </form>
        </div>
      </div>
    );
  } else return <Home />;
}

export default Login;
