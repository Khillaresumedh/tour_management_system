import React from "react";
import "./InPackages.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { InPackageData, responsive } from "./data";
import InPackageItems from "./InPackageItems.js";

export default function InPackages() {
  const product = InPackageData.map((item) => (
    <InPackageItems name={item.name} url={item.imageurl} link={item.link} />
  ));
  return (
    <div className="container" id="InPackages">
      <div className="carousel">
        <h5>International Destinations!</h5>
        <Carousel responsive={responsive}>{product}</Carousel>
      </div>
    </div>
  );
}
