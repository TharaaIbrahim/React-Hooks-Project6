import React from "react";
import { BsFillTelephoneFill, BsFillPinMapFill } from "react-icons/bs";
import "./Nav2.css";
function Nav2() {
  return (
    <div>
      <ul className="address-nav">
        <li>
          <BsFillTelephoneFill />
          <p>
            <a href="tel:0785708741">0785708741</a>
          </p>
        </li>
        <li>
          <BsFillPinMapFill />
          <p> Amman-Jordan-Makeh str-Building 10</p>
        </li>
      </ul>
    </div>
  );
}

export default Nav2;
