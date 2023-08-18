import React from "react";
import { Outlet, Link } from "react-router-dom";
import { BsFillAirplaneFill } from "react-icons/bs";
import { FaHotel } from "react-icons/fa";
import { FaPeopleCarry } from "react-icons/fa";
import { AiFillCar } from "react-icons/ai";

export default function KerlaPackageItems(props) {
  return (
    <>
      <div className="kerla-card">
        <div className="card">
          {/* <h5 className="package-name">{props.name}</h5> */}
          <img className="product-image" src={props.url} alt="product" />
          <div className="kerla-facility">
            <h5>
              <BsFillAirplaneFill />
              {props.facility1}
            </h5>
            <h5>
              <FaHotel />
              {props.facility2}
            </h5>
            <h5>
              <FaPeopleCarry />
              {props.facility3}
            </h5>
            <h5>
              <AiFillCar />
              {props.facility4}
            </h5>
          </div>
          <h5 className="kerla-days">{props.days}</h5>
          <p>
            <Link
              className="button" // active
              to="/"
            >
              {props.price}
            </Link>
          </p>
          <Outlet />
        </div>
      </div>
    </>
  );
}
