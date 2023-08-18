import React from "react";
import "./Packages.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { PackageData, responsive } from "./data";
import PackageItems from "./PackageItems.js";

export default function Packages() {
  const product = PackageData.map((item) => (
    <PackageItems
      name={item.name}
      url={item.imageurl}
      link={item.link}
    />
  ));
  return (
    <div className="container">
      <div className="carousel">
        <h5>Jackpot Deals on Top Selling Packages</h5>
        <h6>Save extra with our exclusive deals!</h6>
        <Carousel responsive={responsive}>{product}</Carousel>
      </div>
    </div>
  );
}
