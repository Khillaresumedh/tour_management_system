import React from "react";
import "./Footer.css";
import { FiInstagram, FiFacebook, FiTwitter } from "react-icons/fi";

export default function Footer1() {
  return (
    <div className="footer-container">
      <div className="item1">
        <div className="footer1">
          <b>Contact with us:</b>
          <div>
            <a className="icon1" href="https://www.google.com">
              <FiInstagram />
            </a>
            <a className="icon2" href="https://www.google.com">
              <FiFacebook />
            </a>
            <a className="icon3" href="https://www.google.com">
              <FiTwitter />
            </a>
          </div>
        </div>
      </div>

      <div className="item2">
        <div div className="footer2">
          <b>Office Address:</b>
          <h6>
            Kunal Plaza, Off mumbai-Pune Higyway, Pimpri Chinchwad, Maharashtra.
            411019
          </h6>
        </div>
      </div>

      <div className="item3">
        <div className="footer3">
          <b>Help us:</b>
          <h6>exploreyourworld@gmail.com 91+987654321</h6>
        </div>
      </div>
    </div>
  );
}
