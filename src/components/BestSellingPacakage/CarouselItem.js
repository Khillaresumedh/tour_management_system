import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./CarouselItem.css";

export default function CarouselItem(props) {
  return (
    <>
      <div className="main-card">
        <div className="card">
          <img src={props.url} className="main-image" alt="product" />
          <div className="card-body">
            <div className="card-text1">
              <p>244+ packges</p>
              <p>Starting From: Rs:10,000</p>
            </div>
            <Link className="package-btn" to={props.link}>
              {props.name}
            </Link>
          </div>
        </div>
        <Outlet />
      </div>
    </>
  );
}
