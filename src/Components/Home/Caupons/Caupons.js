import React from "react";
import "./Caupons.css";

function Caupons() {
  return (
    <div className="caupons-container">
      <div className="caupon-20">
        <img src="../assest/img/caupon20.png" alt="caupon off 20%" />
        <p>
          Apply <span>"DRESS10"</span> Caupon To Get 20% OFF On Dresses Over 100
          JD
        </p>
      </div>
      <div className="caupon-10">
        <img src="../assest/img/caupon10.jpg" alt="caupon off 10%" />
        <p>
          Apply <span>"KAL5"</span> Caupon To Get 10% OFF On Dresses Over 50 JD
        </p>
      </div>
    </div>
  );
}

export default Caupons;
