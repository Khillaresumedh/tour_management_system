import React from "react";
import { Outlet, Link } from "react-router-dom";
import { BsFillAirplaneFill } from "react-icons/bs";
import { FaHotel } from "react-icons/fa";
import { FaPeopleCarry } from "react-icons/fa";
import { AiFillCar } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";

export default function InternationalPackageItems(props) {
  let { destinationId } = useParams();
  return (
    <>
      <div className="international-card">
        <div className="card">
          {/* <h5 className="package-name">{props.name}</h5> */}
          <img
            className="international-image"
            src={props.url}
            alt="international"
          />
          <div className="international-facility">
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
          <h5 className="international-days">{props.days}</h5>
          <div className="price">
            <h5 className="old-price">{props.old_price}</h5>
            <h5 className="new-price">{props.new_price}</h5>
          </div>
          <p>
          <Link
              className="international-btn" // active
              value={destinationId}
              to={props.link}
            >
              {props.name}
            </Link>
          </p>
          <Outlet />
        </div>
      </div>
    </>
  );
}
