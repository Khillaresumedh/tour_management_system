import React from "react";
import { PiStarFill } from "react-icons/pi";
import { PiStar } from "react-icons/pi";
import { PiStarHalfFill } from "react-icons/pi";
import "./MainReviews.css";

export default function Rating1({ stars }) {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;

    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <PiStarFill />
        ) : stars >= number ? (
          <PiStarHalfFill />
        ) : (
          <PiStar />
        )}
      </span>
    );
  });

  return (
    <div className="rating-star">
      <div>{ratingStar}</div>
    </div>
  );
}
