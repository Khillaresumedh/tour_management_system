import React, { useState } from "react";
import "./Navbar.css";
// import NavbarItems from "./NavbarItems";
import { AiFillHome } from "react-icons/ai";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import { Outlet, Link } from "react-router-dom";
import NavbarList from "../second-navbar/NavbarList";

export default function Navbar() {
  const [active, setActive] = useState("nav-menu");
  // function to open navbar
  const showNav = () => {
    setActive("nav-menu activeNavMenu");
  };

  // function to close navbar
  const closeNav = () => {
    setActive("nav-menu");
  };

  return (
    <div>
      <nav className="NavbarItems">
        <h1 className="navbar-logo">
          <b>Explore Your World!</b>
        </h1>

        <ul className={active}>
          <li>
            <Link
              className="nav-links active" // active
              aria-current="page"
              to="/"
            >
              <AiFillHome />
            </Link>
          </li>
          <li>
            <Link className="nav-links" to="/LoginForm">
              <FaSignInAlt />
            </Link>
          </li>
          <li>
            <Link className="nav-links" to="/SignupForm">
              <FaSignOutAlt />
            </Link>
          </li>
        </ul>

        <div onClick={showNav} className="openNavbar">
          <HiMenu className="icon" />
        </div>

        <div onClick={closeNav} className="closeNavbar">
          <CgClose className="icon" />
        </div>
      </nav>

      <div>
        <NavbarList />
      </div>
      <Outlet />
    </div>
  );
}
