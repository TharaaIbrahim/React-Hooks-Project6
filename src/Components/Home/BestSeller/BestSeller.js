import React from "react";
import "./BestSeller.css";

function BestSeller({ alt, img, collectionName, discription, id }) {
  return (
    <div className="collection-card" key={id}>
      <img src={img} alt={alt} />
      <div className="collection-info">
        <h3>{collectionName}</h3>
        <p>{discription}</p>
      </div>
    </div>
  );
}

export default BestSeller;
