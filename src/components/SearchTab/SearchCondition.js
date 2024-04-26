import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AndamanList from "../Explore/AndamanList";
import KeralaList from "../Explore/KeralaList";
import ShimalaList from "../Explore/ShimalaList";
import HimachalList from "../Explore/HimachalList";
import ThailandList from "../Explore/ThailandList";
import UttarakhandList from "../Explore/UttarakhandList";
import GoaList from "../Explore/GoaList";
import RajasthanList from "../Explore/RajasthanList";
import "./SearchCondition.css";

const SearchCondition = ({}) => {
  let { destinationId } = useParams();

  const navigate = useNavigate();

  const handlebuttondest = () =>
    navigate(`/BookPacakageCondition/${destinationId}`);

  const render = () => {
    console.log(destinationId);
    switch (destinationId) {
      case "1":
        return <KeralaList />;
        break;
      case "2":
        return <ShimalaList />;
        break;
      case "3":
        return <HimachalList />;
        break;
      case "4":
        return <AndamanList />;
        break;
      case "5":
        return <ThailandList />;
        break;
      case "6":
        return <UttarakhandList />;
        break;
      case "7":
        return <GoaList />;
        break;
      case "8":
        return <RajasthanList />;
        break;

      default:
        break;
    }
  };
  return (
    <div>
      <div className="package-title1">
        <h2>Explore Your Holiday Pacakages Here!!</h2>
        <h3>Showing Tour Pacakages for :</h3>
      </div>
      <hr />

      <div>
        <div className="package-details">{render()}</div>
      </div>

      <div className="package-details-btn1">
        <button
          className="package-details-btn"
          value={destinationId}
          onClick={() => handlebuttondest()} >
          Pacakage Details
        </button>
      </div>
    </div>
  );
};
export default SearchCondition;
