import React from "react";
import "./Background.css";

export default function Background() {
  return (
    <div>
      <div className="offers-bg">
        <img
          className="offers-img"
          src="images/assets/offer-bg.jpg"
          alt="bg-img"
        />
        <div className="bg_text">
          <h1>Jackpot Deals on Top Selling Packages</h1>
          <p>Save extra with our exclusive deals!</p>
        </div>
      </div>
    </div>
  );
}
