import React from "react";
// import { Outlet, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function PackageItems(props) {
  // const navigate = useNavigate();
  return (
    <>
      <div className="main-card">
        <div className="card">
          <img className="main-image" src={props.url} alt="product" />
          <HashLink
            className="main-button" // active
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
