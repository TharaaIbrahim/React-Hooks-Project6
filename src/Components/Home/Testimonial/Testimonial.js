import React from "react";
import "./Testimonial.css";

function Testimonial({ testimonial, customerName }) {
  return (
    <div className="testimonails">
      <h3 className="customer-name">{customerName}</h3>
      <p>{testimonial}</p>
    </div>
  );
}

export default Testimonial;
