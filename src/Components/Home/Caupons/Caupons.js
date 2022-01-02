import React from "react";
import "./Caupons.css";

function Caupons() {
  return (
    <div className="caupons-container">
      <div className="caupon-20">
        <img src="../assest/img/caupon20.jpg" alt="caupon off 20%" />
        <p>Apply "DRESS10" Caupon To Get 20% OFF On Dresses Over 50 JD</p>
      </div>
      <div className="caupon-10">
        <img src="../assest/img/caupon10.jpg" alt="caupon off 10%" />
        <p>
          Apply "KAL5" Caupon To Get 10% OFF On Dresses With 50 JD Price Or Less
        </p>
      </div>
    </div>
  );
}

export default Caupons;
