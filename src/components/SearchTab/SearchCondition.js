import React from "react";
import { useParams } from "react-router-dom";
import AndamanList from "../Explore/AndamanList";
import KeralaList1 from "../Explore/KeralaList";
import ShimalaList from "../Explore/ShimalaList";
import HimachalList from "../Explore/HimachalList";
import ThailandList from "../Explore/ThailandList";
import UttarakhandList from "../Explore/UttarakhandList";
import GoaList from "../Explore/GoaList";
import RajasthanList from "../Explore/RajasthanList";

const SearchCondition = () => {
  let { destinationId } = useParams();

  const render = () => {
    // console.log(destinationId);
    switch (destinationId) {
      case "1":
        return <KeralaList1 />;
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
      <div className="render">{render()}</div>
    </div>
  );
};
export default SearchCondition;
