import React from "react";
import "./InternationalPackages.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { InternationalPackagesData, responsive } from "./InternationalPackagesData";
import InternationalPackageItems from "./InternationalPackageItems.js";

export default function InternationalPackages() {
  const product = InternationalPackagesData.map((item) => (
    <InternationalPackageItems
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
    <div className="container">
      <div className="carousel">
        <h3 className="package-title">International Package Offers!</h3>
        <Carousel responsive={responsive}>{product}</Carousel>
      </div>
    </div>
  );
}
