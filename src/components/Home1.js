import React from "react";
import Navbar from "./navbar/Navbar";
import Background from "./background/Background";
import NationalPackages from "./Offers/national-packages/NationalPackages";
import InternationalPackages from "./Offers/international-packages/InternationalPackages";
import MainReviews from "./mainReviews-Rating/MainReviews";
import NavbarList from "./second-navbar/NavbarList";
import Footer1 from "./footer/Footer1";
import Carouselnew from "./BestSellingPacakage/Carouselnew";
import Navbar3 from "./navbarCart/Navbar3";
// import SliderGallery from "./imageSlider/SliderGallery";

export default function Home1() {
  return (
    <div>
      <Navbar />
      <NavbarList />
      <Background />
      <Carouselnew />
      <Navbar3 />
      <NationalPackages />
      <InternationalPackages />
      <MainReviews />
      {/* <SliderGallery /> */}
      <Footer1 />
    </div>
  );
}
