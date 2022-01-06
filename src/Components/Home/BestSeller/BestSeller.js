import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./BestSeller.css";

function BestSeller({ alt, img, collectionName, discription, id }) {
  const history = useHistory();
  const categorySelect = () => {
    if (collectionName === "Wedding") {
      localStorage.setItem("wedding", "on");
    } else localStorage.setItem("prom", "on");
    history.push({ pathname: "./shop" });
  };
  return (
    <div className="collection-card" key={id} onClick={categorySelect}>
      <img src={img} alt={alt} />
      <div className="collection-info">
        <h3>{collectionName} Dresses</h3>
        <p>{discription}</p>
      </div>
    </div>
  );
}

export default BestSeller;
