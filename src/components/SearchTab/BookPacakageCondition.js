import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import KeralaPacakage from "../BookPacakage/KeralaPacakage";
import ShimlalPacakage from "../BookPacakage/ShimlalPacakage";
import HimachalPacakage from "../BookPacakage/HimachalPacakage";
import AndamanPacakage from "../BookPacakage/AndamanPacakage";
import ThailandPacakage from "../BookPacakage/ThailandPacakage";
import EuropePackage from "../BookPacakage/EuropeOffer";
import "./BookPacakageCondition.css";

const BookPacakageCondition = () => {
  let { destinationId } = useParams();

  const navigate = useNavigate();

  const handlebuttonbook = () => {
    navigate(`/BookNowCondition`);
  };

  const render1 = () => {
    console.log(destinationId);
    switch (destinationId) {
      case "1":
        return <KeralaPacakage />;
        break;

      case "2":
        return <ShimlalPacakage />;
        break;

      case "3":
        return <HimachalPacakage />;
        break;

      case "4":
        return <AndamanPacakage />;
        break;

      case "5":
        return <ThailandPacakage />;
        break;

      default:
        return console.log("not any package");
    }
  };

  return (
    <div>
      <div className="package-title1">
        <h3>Explore the Details of Pacakages!!</h3>
      </div>

      <div className="package-details">
        <div>{render1()}</div>
      </div>

      <div className="book-now-btn1">
        <button
          type="button"
          onClick={() => handlebuttonbook()}
          className="book-now-btn"
        >
          Book Now!
        </button>
      </div>
    </div>
  );
};
export default BookPacakageCondition;
