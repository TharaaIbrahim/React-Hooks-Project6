import React from "react";
import "./Footer.css";
import { AiFillInstagram, AiFillFacebook, AiFillMail } from "react-icons/ai";
import { BsFillTelephoneFill, BsFillPinMapFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer">
        <ul id="about">
          <li>
            <h4> About Us:</h4>
          </li>
          <li>
            We specialize in renting all kinds of dresses, and hepls you to
            shine in all occasions
          </li>
        </ul>
        <ul className="contactus">
          <li>
            <h4>Contact Us:</h4>
          </li>
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
          <ul className="icons-footer">
            <li>
              <a href="tharaa9@live.com">
                <AiFillMail />
              </a>
            </li>
            <li>
              <Link to="https://www.instagram.com/">
                <AiFillInstagram />
              </Link>
            </li>
            <li>
              <Link to="https://www.facebook.com/">
                <AiFillFacebook />
              </Link>
            </li>
          </ul>
        </ul>
      </div>
      <div className="copyright">
        Copyright &copy; 2022 | DressUp Online Shop
      </div>
    </div>
  );
}

export default Footer;
