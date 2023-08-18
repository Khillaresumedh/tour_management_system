import React, { useState } from "react";
import "./Rating.css";
import { FaStar } from "react-icons/fa";

// const colors = {
//   orange: "#ffe234",
//   gray: "#a9a9a9",
// };

export default function Rating() {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div className="rating-container">
      <h5 className="experience">Rate Your Experience </h5> 
      {[...Array(5)].map((star, index) => {
        const currentRating = index + 1;
        return (
          <label>
            <input
              type="radio"
              name="rating"
              value={currentRating}
              onClick={() => setRating(currentRating)} 
            />
            <FaStar
              className="star"
              size={30}
              color={currentRating <= (hover || rating) ? "#ffe234" : "#e4e5e9"}
              onMouseEnter={() => setHover(currentRating)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
      <button className="rating-btn" type="submit"> Submit </button>
    </div>
  );
}
