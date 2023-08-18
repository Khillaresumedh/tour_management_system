
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./NavbarList.css"
import navbarData from "./NavbarData.js";

export default function NavbarList() {
  const [activeDropdown, setActiveDropdown] = useState(0);

  const handleDropdownToggle = (index) => {
    if (activeDropdown === index) {
      setActiveDropdown(0);
    } else {
      setActiveDropdown(index);
    }
  };

  const NavbarListItems = navbarData.map((navbar, index) => (
    <li key={navbar.id} className="navbar-item">
      <span onClick={() => handleDropdownToggle(index)}>
        {navbar.item}
      </span>
      {activeDropdown === index && (
        <ul className="dropdown-menu">
          <li>
            <h4>Indian Destinations:</h4>
            <ul>
              {navbar.destinations.indian.map((destination, destinationIndex) => (
                <li key={destinationIndex}>
                  <Link to={`/indian/${destination}`}>{destination}</Link>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <h4>International Destinations:</h4>
            <ul>
              {navbar.destinations.international.map((destination, destinationIndex) => (
                <li key={destinationIndex}>
                  <Link to={`/international/${destination}`}>{destination}</Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      )}
    </li>
  ));

  return (
    <div>
      <nav>
        <ul className="navbar-list">
          {NavbarListItems}
        </ul>
      </nav>
    </div>
  );
}





