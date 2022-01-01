import React, { useEffect, useState } from "react";
import "./Register.css";
import { useHistory } from "react-router-dom";

function Registration() {
  const [userData, setUserData] = useState({
    userName: "",
    email: "",
    password: "",
    cpassword: "",
    orders: [],
  });
  const dressID = localStorage.getItem("selectedDress");
  const dataArr = [];
  const history = useHistory();

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  useEffect(() => {
    if (userData.password !== userData.cpassword) {
      document.getElementById("passwordError").innerText =
        "Password Dosen`t Match";
    } else {
      document.getElementById("passwordError").innerText = "";
    }
  }, [userData.cpassword]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (userData.password === userData.cpassword) {
      if (localStorage.getItem("userData")) {
        const newData = JSON.parse(localStorage.getItem("userData"));
        newData.push(userData);
        localStorage.setItem("userData", JSON.stringify(newData));
      } else {
        dataArr.push(userData);
        localStorage.setItem("userData", JSON.stringify(dataArr));
      }
      history.push({
        pathname: "./login",
      });
    }
  };
  return (
    <div className="register-Form">
      <h1>Join Us</h1> <h3>Not our registered customer yet? </h3>
      <p>
        While you register,you will be able to rent any dress you like and get
        special discount
      </p>
      <form className="register-form_Fields" onSubmit={submitHandler}>
        <label htmlFor="userName">User Name:</label>
        <input
          type="text"
          value={userData.userName}
          name="userName"
          id="userName"
          onChange={changeHandler}
          placeholder="Your Name"
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          value={userData.email}
          name="email"
          id="email"
          onChange={changeHandler}
          placeholder="eg: name@gmail.com"
          required
        />

        <label htmlFor="password">Passwrod:</label>
        <input
          type="password"
          value={userData.password}
          name="password"
          id="password"
          onChange={changeHandler}
          placeholder="eg: rr202"
          required
        />

        <label htmlFor="cpassword">Passwrod Confirm:</label>
        <input
          type="password"
          value={userData.cpassword}
          name="cpassword"
          id="cpassword"
          onChange={changeHandler}
          placeholder="eg: rr202"
          required
        />

        <p id="passwordError"></p>

        <button className="register-form_btn" type="submit">
          Join
        </button>
      </form>
    </div>
  );
}

export default Registration;
