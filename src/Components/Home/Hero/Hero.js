import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./Hero.css";

export default function Hero() {
  const history = useHistory();

  const redirect = () => {
    history.push({ pathname: "./shop" });
  };
  return (
    <div>
      <div className="hero-bg">
        <div className="home-title">
          <h1>
            Welcome to DressUp Shop ! You can rent best dresses with best price
          </h1>
          <button className="hero-btn" onClick={redirect}>
            View Shop
          </button>
        </div>
      </div>
    </div>
  );
}
