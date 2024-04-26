
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchFormMain from './SearchTab/SearchFormMain'
import DestinationRoute from "./SearchTab/DestinationRoute";
import SearchCondition from "./SearchTab/SearchCondition";
// import PackageDetails from "./MK/package/PackageDetails";
// import PacakageDetailBook from './BookPacakage/PacakageDetailBookGallery'
import BookPacakageCondition from "./SearchTab/BookPacakageCondition";
import BookNowCondition from "./SearchTab/BookNowCondition";
import PaymentPage from "./BookPacakage/PaymentPage";

export default function SearchMainRoute() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<DestinationRoute />} >
                    <Route path='/SearchFormMain' element={<SearchFormMain />} />
                </Route>
                <Route path='/SearchCondition/:destinationId' element={<SearchCondition />} />
                <Route path='/BookPacakageCondition/:destinationId' element={<BookPacakageCondition/>} />
                <Route path='/BookNowCondition' element={<BookNowCondition/>} />
                <Route path='/PaymentPage' element={<PaymentPage/>} />
            </Routes>
        </BrowserRouter>
    )
}  