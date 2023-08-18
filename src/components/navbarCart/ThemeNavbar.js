import React from "react";
import { Outlet, Link } from "react-router-dom";
import WaterActivityPage from "./WaterActivityPage";
import ReligiousPage from "./ReligiousPage";
import HillstationPage from "./HillstationPage";
import NaturePage from "./NaturePage";
import AdventurePage from "./AdventurePage";

export default function ThemeNavbar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/adventure">{AdventurePage}</Link>
          </li>
          <li>
            <Link to="/nature">{NaturePage}</Link>
          </li>
          <li>
            <Link to="/hillstation">{HillstationPage}</Link>
          </li>

          <li>
            <Link to="/religious">{ReligiousPage}</Link>
          </li>

          <li>
            <Link to="/water-activity">{WaterActivityPage}</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
}
