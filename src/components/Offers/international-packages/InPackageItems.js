import React from "react";
// import { Outlet, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
// import { FaStar, FaStarHalfAlt } from "react-icons/fa";
// import { AiOutlineStar } from "react-icons/ai";

export default function InPackageItems(props) {
  return (
    <>
      <div className="in-card">
        <div className="card">
          <img className="in-image" src={props.url} alt="product" />
          <HashLink
            className="in-button" // active
            to={props.link}
          >
            {props.name}
          </HashLink>
          {/* <Outlet /> */}
        </div>
      </div>
    </>
  );
}
