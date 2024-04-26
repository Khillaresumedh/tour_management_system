import React from "react";
import { Link } from "react-router-dom";
import navItems from "./NavData3";
import "./Navbar3.css";

const Navbar3 = () => {
  return (
    <nav className="navbar">
      <h3 className="package-title">Browse Package Through Holiday Themes</h3>
      <div className="cards-container">
        {navItems.map((item) => (
          <>
            <div className="card theme-card">
              <img
                key={item.id}
                className="theme-image"
                src={item.backgroundImage}
                alt="theme"
              />

              <Link
                className="theme-btn"
                to={item.link}

                // style={{ backgroundImage: `url(${item.backgroundImage})` }}
              >
                {item.name}
              </Link>
              
            </div>
          </>
        ))}
      </div>
    </nav>
  );
};

export default Navbar3;
