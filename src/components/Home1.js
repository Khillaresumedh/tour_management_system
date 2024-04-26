import React from "react";
import Navbar from "./navbar/Navbar";
import Background from "./background/Background";
// import DestinationRoute from "./SearchTab/DestinationRoute";
// import SearchFormMain from "./SearchTab/SearchFormMain";
import NationalPackages from "./Offers/national-packages/NationalPackages";
import InternationalPackages from "./Offers/international-packages/InternationalPackages";
import MainReviews from "./mainReviews-Rating/MainReviews";
import NavbarList from "./second-navbar/NavbarList";
import Footer1 from "./footer/Footer1";
import Carouselnew from "./BestSellingPacakage/Carouselnew";
import Navbar3 from "./navbarCart/Navbar3";

export default function Home1() {
  return (
    <div>
      <Navbar />
      <NavbarList />
      <Background />
      {/* <DestinationRoute />
      <SearchFormMain /> */}
      <Carouselnew />
      <Navbar3 />
      <NationalPackages />
      <InternationalPackages />
      <MainReviews />
      <Footer1 />
    </div>
  );
}
