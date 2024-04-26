import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./login-signup/LoginForm";
import SignupForm from "./login-signup/SignupForm";
import Home1 from "./Home1";
import Navbar from "./navbar/Navbar";
import KerlaReviews from "./mainReviews-Rating/subReviews/KerlaReviews";
import JaisalmerReviews from "./mainReviews-Rating/subReviews/JaisalmerReviews";
import AndamanReviews from "./mainReviews-Rating/subReviews/AndamanReviews";
import SingaporeReviews from "./mainReviews-Rating/subReviews/SingaporeReviews";

import GoaList from "./Explore/GoaList"
import KeralaList from "./Explore/KeralaList.js";
import HimachalList from "./Explore/HimachalList.js";
import RajasthanList from "./Explore/RajasthanList.js";
import UttarakhandList from "./Explore/UttarakhandList.js";
import ShimalaList from "./Explore/ShimalaList.js";
import ThailandList from "./Explore/ThailandList.js";
import AndamanList from "./Explore/AndamanList.js";
import MaldivesList from "./Explore/MaldivesList.js";

import SearchCondition from "./SearchTab/SearchCondition";
import BookPacakageCondition from "./SearchTab/BookPacakageCondition";
import BookNowCondition from "./SearchTab/BookNowCondition";
import PaymentPage from "./BookPacakage/PaymentPage";

import AdventurePage from "./navbarCart/AdventurePage";
import NaturePage from "./navbarCart/NavData3";
import HillstationPage from "./navbarCart/HillstationPage";
import ReligiousPage from "./navbarCart/ReligiousPage";
import WaterActivityPage from "./navbarCart/WaterActivityPage";
import EuropeOffer from "./BookPacakage/EuropeOffer";
import KerlaOffer from "./BookPacakage/KerlaOffer";

export default function Home() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home1 />} />
            <Route path="/LoginForm" element={<LoginForm />} />
            <Route path="/SignupForm" element={<SignupForm />} />
            
            <Route path="/KerlaReviews" element={<KerlaReviews />} />
            <Route path="/JaisalmerReviews" element={<JaisalmerReviews />} />
            <Route path="/AndamanReviews" element={<AndamanReviews />} />
            <Route path="/SingaporeReviews" element={<SingaporeReviews />} />

            <Route path="/indian/GoaList" element={<GoaList />} />
            <Route path="/KeralaList" element={<KeralaList />} />
            <Route path="/indian/HimachalList" element={<HimachalList />} />
            <Route path="/indian/ShimalaList" element={<ShimalaList />} />
            <Route path="/indian/RajasthanList" element={<RajasthanList />} />
            <Route path="/indian/UttarakhandList" element={<UttarakhandList />} />
            <Route path="/international/ThailandList" element={<ThailandList />} />
            <Route path="/international/AndamanList" element={<AndamanList />} />
            <Route path="/international/MaldivesList" element={<MaldivesList />} />

            <Route path="/SearchCondition/:destinationId" element={<SearchCondition />}/>
            <Route path='/BookPacakageCondition/:destinationId' element={<BookPacakageCondition />} />
            <Route path='/BookNowCondition' element={<BookNowCondition />} />
            <Route path='/PaymentPage' element={<PaymentPage/>} />
            <Route path='/EuropeOffer' element={<EuropeOffer />} />
            <Route path='/KerlaOffer' element={<KerlaOffer/ >} />

            <Route path="/adventure" element={<AdventurePage />} />
            <Route path="/nature" element={<NaturePage />} />
            <Route path="/hillstation" element={<HillstationPage />} />
            <Route path="/religious" element={<ReligiousPage />} />
            <Route path="/water-activity" element={<WaterActivityPage />} />



          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
