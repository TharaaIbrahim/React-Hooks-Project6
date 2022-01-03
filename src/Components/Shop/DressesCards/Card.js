import React from "react";
import { useHistory } from "react-router-dom";
import "./Card.css";

function Card({ title, src, alt, price, color, size, id, key }) {
  const history = useHistory();
  const selectHandle = (id) => {
    localStorage.setItem("selectedDress", id);
    history.push("./cart");
  };
  return (
    <div className="card-container" key={key}>
      <img src={src} alt={alt} />
      <div className="card-info">
        <h3>{title} Dress</h3>
        <p>Color: {color}</p>
        <p>Size: {size}</p>
        <p>Rent Price: {price} JD</p>
      </div>
      <button className="card-btn" onClick={() => selectHandle(id)}>
        View deal
      </button>
    </div>
  );
}

export default Card;
