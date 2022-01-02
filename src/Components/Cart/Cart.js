import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import dresses from "../Shop/dresses.json";
import "./Cart.css";

function Cart() {
  const nextDateFunc = (selectedDate) => {
    const date = new Date(selectedDate);
    date.setDate(date.getDate() + 1);
    const nextdate = date.toISOString().split("T")[0];
    return nextdate;
  };

  const history = useHistory();
  const dressID = localStorage.getItem("selectedDress");
  const logged = localStorage.getItem("logged");
  const selectedDress = dresses.find((dress) => dress.id === dressID);
  const allOrders = JSON.parse(localStorage.getItem("allOrders"));
  const date = new Date();
  const tomorrow = nextDateFunc(date);
  const nextOfTomorrow = nextDateFunc(tomorrow);

  const [bookingInfo, setBookingInfo] = useState({
    id: dressID,
    date: tomorrow,
    nextDate: nextOfTomorrow,
  });
  const [dateError, setDateError] = useState();

  const dateHandler = (e) => {
    const next = nextDateFunc(e.target.value);
    setBookingInfo((prev) => {
      return { ...prev, date: e.target.value, nextDate: next };
    });
  };

  const bookhandle = () => {
    let ordered = false;
    if (allOrders) {
      allOrders.forEach((order) => {
        if (
          order.id === dressID &&
          (order.date === bookingInfo.date ||
            order.nextDate === bookingInfo.date)
        ) {
          ordered = true;
        }
      });
    }

    if (!ordered && logged) {
      setDateError("");
      history.push("./checkout");
      localStorage.setItem("bookingInfo", JSON.stringify(bookingInfo));
    } else if (ordered) {
      setDateError(`${bookingInfo.date} Is Not Available`);
    } else {
      history.push("./Login");
      localStorage.setItem("bookingInfo", JSON.stringify(bookingInfo));
    }
  };
  if (localStorage.getItem("selectedDress")) {
    return (
      <div>
        <div className="bread-crump">
          <Link to="/">Home</Link> / <Link to="/shop">Shop</Link> / Cart
        </div>
        <div className="cart-container">
          <div className="dress-info">
            <h3>Book this Dress</h3>
            <p>
              You can rent the dress for 24 hours from 12PM to 12PM from the
              next day
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
                min={tomorrow}
                onChange={dateHandler}
                required
              />
            </div>
            <p className="date-Error">{dateError}</p>
            <button className="card-btn book" onClick={bookhandle}>
              Book Now
            </button>
          </div>
          <div className="check-date">
            <h3>Unavailable Dates</h3>
            <div className="unavailableDates">
              {allOrders &&
                allOrders.map((order, id) => {
                  if (order.id === dressID) {
                    return (
                      <React.Fragment key={id}>
                        <p>{order.date}</p>
                        <p>{order.nextDate}</p>
                      </React.Fragment>
                    );
                  }
                })}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="empty-cart">
        <img src="../assest/img/cart.png" alt="empty cart" />
      </div>
    );
  }
}

export default Cart;
