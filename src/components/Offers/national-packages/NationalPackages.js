import React from "react";
import "./NationalPackages.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { NationalPackagesData, responsive } from "./NationalPackagesData";
import KerlaPackageItems from "./NationalPackageItems.js";

export default function NationalPackages() {
  const product = NationalPackagesData.map((item) => (
    <KerlaPackageItems
      key={item.id}
      name={item.name}
      url={item.imageurl}
      facility1={item.facility1}
      facility2={item.facility2}
      facility3={item.facility3}
      facility4={item.facility4}
      days={item.days}
      old_price={item.old_price}
      new_price={item.new_price}
      link={item.link}
    />
  ));
  return (
    <div>
      <div className="container">
        <div className="carousel">
          <h3 className="package-title">National Package Offers!</h3>
          <Carousel responsive={responsive}>{product}</Carousel>
        </div>
      </div>
    </div>
  );
}
