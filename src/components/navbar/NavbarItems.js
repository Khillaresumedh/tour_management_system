import React from "react";
import { AiFillHome } from "react-icons/ai";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function NavbarItems() {
  return (
    <div>
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
    </div>
  );
}
