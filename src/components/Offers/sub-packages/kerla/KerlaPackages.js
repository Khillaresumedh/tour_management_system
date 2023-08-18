import React from "react";
import "./KerlaPackages.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { KerlaData, responsive } from "./kerlaData";
import KerlaPackageItems from "./KerlaPackageItems.js";

export default function KerlaPackages() {
  const product = KerlaData.map((item) => (
    <KerlaPackageItems
      key={item.id}
      name={item.name}
      url={item.imageurl}
      facility1={item.facility1}
      facility2={item.facility2}
      facility3={item.facility3}
      facility4={item.facility4}
      days={item.days}
      price={item.price}
    />
  ));
  return (
    <div className="container" id="KerlaPackages">
      <div className="carousel">
        <h5>Great Offers!</h5>
        <Carousel responsive={responsive}>{product}</Carousel>
      </div>
    </div>
  );
}
