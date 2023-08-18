// import React, { useState } from "react";
// import data from "./data";
import "./KerlaReviews.css";
import KerlaReviewItems from "./KerlaReviewItems";

export default function KerlaReviews() {
  return (
    <section className="main-container">
      <div className="title">
        <h2>Reviews</h2>
        <h4>
          Real travelers. Real stories. Real opinions to help you make the right
          choice.
        </h4>
      </div>

      <div className="container1">
        <KerlaReviewItems />
      </div>
    </section>
  );
}
