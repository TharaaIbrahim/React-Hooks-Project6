import React from "react";
import { useState } from "react/cjs/react.development";
import dresses from "../Shop/dresses.json";
import { Link } from "react-router-dom";
import "./Checkout.css";

function Checkout() {
  const logged = localStorage.getItem("logged");
  const dressID = localStorage.getItem("selectedDress");
  const selectedDress = dresses.find((dress) => dress.id === dressID);
  const [checkoutData, setCheckoutData] = useState({
    userName: "",
    email: logged,
    phone: "",
    newPrice: selectedDress.price,
  });
  const [discountValue, setDiscountValue] = useState("");
  const [cauponError, setCauponError] = useState("");
  const changeHandler = (e) => {
    const { value, name } = e.target;
    setCheckoutData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const valueHandle = (e) => {
    setDiscountValue(e.target.value);
  };
  const priceDiscount = () => {
    console.log(discountValue);
    const price = selectedDress.price;
    if (discountValue === "KAL5" && price <= 20) {
      setCauponError("");
      setCheckoutData((prev) => {
        return {
          ...prev,
          newPrice: price - price * 0.1,
        };
      });
    } else if (discountValue === "DRESS10" && price > 20) {
      setCauponError("");
      setCheckoutData((prev) => {
        return {
          ...prev,
          newPrice: price - price * 0.3,
        };
      });
    } else setCauponError("You Can't Apply This Caupon for this Dress");
  };

  const submitHandle = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <div className="bread-crump">
        <Link to="/">Home</Link> / <Link to="/shop">Shop</Link> /{" "}
        <Link to="/cart">Cart</Link> / Checkout
      </div>
      <div className="checkout-container">
        <form className="checkout-form" onSubmit={submitHandle}>
          <h1>Your Order</h1>
          <label htmlFor="userName">User Name:</label>
          <input
            type="text"
            value={checkoutData.userName}
            name="userName"
            id="userName"
            onChange={changeHandler}
            placeholder="Your Name"
            required
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            value={checkoutData.email}
            name="email"
            id="email"
            onChange={changeHandler}
            placeholder="eg: name@gmail.com"
            disabled
          />
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            value={checkoutData.phone}
            name="phone"
            id="phone"
            onChange={changeHandler}
            placeholder="077 XXXX XXX"
            required
          />
          <button className="card-btn checkout">Checkout</button>
        </form>

        <div className="order-summary">
          <h2>Order Summary :</h2>
          <img src={selectedDress.img} alt={selectedDress.alt} />
          <h3>
            {selectedDress.title} - {selectedDress.color} - Dress
          </h3>
          <p>{checkoutData.newPrice} JD</p>
          <label>Apply Caupon: </label>
          <select value={discountValue} onChange={valueHandle}>
            <option value="">Discount</option>
            <option value="DRESS10">DRESS10</option>
            <option value="KAL5">KAL5</option>
          </select>
          <button onClick={priceDiscount} className="apply">
            Apply
          </button>
          <p className="caupon-error">{cauponError}</p>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
