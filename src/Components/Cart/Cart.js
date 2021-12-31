import React, { useState } from "react";
import { Link } from "react-router-dom";
import dresses from "../Shop/dresses.json";
import "./Cart.css";

function Cart() {
  const dressID = localStorage.getItem("selectedDress");
  const selectedDress = dresses.find((dress) => dress.id === dressID);
  const date = new Date();
  const today = date.toISOString().split("T")[0];
  console.log(today);
  const [bookingInfo, setBookingInfo] = useState({
    id: dressID,
    date: today,
  });
  const dateHandler = (e) => {
    setBookingInfo((prev) => {
      return { ...prev, date: e.target.value };
    });
  };
  return (
    <div>
      <div className="bread-crump">
        <Link to="/">Home</Link> / <Link to="/shop">Shop</Link> / View deal
      </div>
      <div className="cart-container">
        <div className="dress-info">
          <h3>Book this Dress</h3>
          <p>
            You can rent the dress for 24 hours from 12AM to 12AM from the next
            day
          </p>
          <img src={selectedDress.img} alt={selectedDress.alt} />
          <h3>
            {selectedDress.title} - {selectedDress.color} - Dress
          </h3>
          <p>{selectedDress.price} JD</p>
          <div className="date">
            <label>Pick date: </label>
            <input
              type="date"
              value={bookingInfo.date}
              min={today}
              onChange={dateHandler}
              required
            />
          </div>

          <button className="card-btn book">Book Now</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
