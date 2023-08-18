import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavbarList from './NavbarList.js'
import GoaList from './GoaLourNavbar.js'
import KeralaList from './Kerist.js'
import TourNavbar from './TalaList.js'
import HimachalList from './HimachalList.js'
import RajasthanList from './RajasthanList.js'
import UttarakhandList from './UttarakhandList.js'
import ShimalaList from './ShimalaList.js'
import ThailandList from './ThailandList.js'
import AndamanList from './AndamanList.js'
import MaldivesList from './MaldivesList.js'

export default function TourRouter() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<TourNavbar/>}>
          <Route index element={<NavbarList/>}/>
          <Route path="/indian/Goa" element={<GoaList/>}/>
          <Route path="/indian/Kerala" element={<KeralaList/>}/>
          <Route path="/indian/Himachal" element={<HimachalList/>}/>
          <Route path="/indian/Shimala" element={<ShimalaList/>}/>
          <Route path="/indian/Rajasthan" element={<RajasthanList/>}/>
          <Route path="/indian/Uttarakhand" element={<UttarakhandList/>}/>
          <Route path="/international/Thailand" element={<ThailandList/>}/>
          <Route path="/international/Andaman" element={<AndamanList/>}/>
          <Route path="/international/Maldives" element={<MaldivesList/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}



