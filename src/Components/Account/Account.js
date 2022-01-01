import React from "react";
import "./Account.css";
import { FaUser } from "react-icons/fa";
import dresses from "../Shop/dresses.json";

function Account() {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const logged = localStorage.getItem("logged");
  const loggedUserData = userData.find((user) => user.email === logged);
  const orders = loggedUserData.orders;
  return (
    <div>
      <div className="account-hero ">
        <h1>My Account</h1>
      </div>
      <div className="user-data">
        <FaUser className="usericon" />
        <h2>{loggedUserData.userName}</h2>
        <p>Email: {loggedUserData.email}</p>
      </div>
      <div className="orders-container">
        <h2>Your Orders</h2>
        {orders.map((order, id) => {
          return (
            <div className="order-info" key={id}>
              <img src={dresses[order.id].img} alt={dresses[order.id].img} />
              <div className="disciption-info">
                <h2>{dresses[order.id].alt} </h2>
                <p>
                  <b>The recipient's name:</b> {order.userName}
                </p>
                <p>
                  <b>Phone number:</b> {order.phone}
                </p>
                <p>
                  <b>Price:</b> {order.newPrice} JD
                </p>
                <p>
                  <b>From:</b> {order.date} at 12PM
                </p>
                <p>
                  <b>To:</b> {order.nextDate} at 12PM
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Account;
