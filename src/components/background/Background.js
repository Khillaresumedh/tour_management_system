import React from "react";
import "./Background.css";
import SearchFormMain from "../SearchTab/SearchFormMain";
import DestinationRoute from "../SearchTab/DestinationRoute";

export default function Background() {
  return (
    <div>
      <div className="bg">
        <img className="bg-image" src="images/assets/background.jpg" alt="bg-img" />
        <div className="bg_text">
          <h1>We are Here To Make your Trip More Memorable</h1>
          <p>customize and book best holiday package</p>
        </div>
      </div>
      <DestinationRoute />
      <SearchFormMain />
    </div>
  );
}
