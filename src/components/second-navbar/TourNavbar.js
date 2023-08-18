import React from 'react'
import {Link,Outlet } from 'react-router-dom'
import GoaList from './GoaList.js'
import KeralaList from './KeralaList.js'
import HimachalList from './HimachalList.js'
import ShimalaList from './ShimalaList.js'
import RajasthanList from './RajasthanList.js'
import UttarakhandList from './UttarakhandList.js'
import AndamanList from './AndamanList.js'
import ThailandList from './ThailandList.js'
import MaldivesList from './MaldivesList.js'

export default function TourNavbar() {
  return (
    <div>
      <nav>
        <ul>
            <li>
                <Link to="/indian/GoaList">{GoaList}</Link>
            </li>
            <li>
                <Link to="/indian/KeralaList">{KeralaList}</Link>
            </li>
            <li>
                <Link to="/indian/HimachalList">{HimachalList}</Link>
            </li>
       
            <li>
                <Link to="/indian/ShimalaList">{ShimalaList}</Link>
            </li>
       
            <li>
                <Link to="/indian/RajasthanList">{RajasthanList}</Link>
            </li>
            <li>
                <Link to="/indian/UttarakhandList">{UttarakhandList}</Link>
            </li>
            <li>
                <Link to="/international/AndamanList">{AndamanList}</Link>
            </li>
            <li>
                <Link to="/internatinal/ThailandList">{ThailandList}</Link>
            </li>
            <li>
                <Link to="/internatinal/MaldivesList">{MaldivesList}</Link>
            </li>
        </ul>
      </nav>
      <Outlet/>
      </div>
  )
}
