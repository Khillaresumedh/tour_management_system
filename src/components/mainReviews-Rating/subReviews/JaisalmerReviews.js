import React, { useState } from "react";
import "./JaisalmerReviews.css";
import JaisalmerData from "./JaisalmerData";

export default function JaisalmerReviews() {
  const [jaisalmerDetails] = useState(JaisalmerData);
  return (
    <div className="main-container">
      <h4 className="title">Punita's Trip To The Golden City With Friends</h4>
      <hr />
      <div className="container1">
        {jaisalmerDetails.map((item) => {
          const { id, heading, details } = item;
          return (
            <div className="container-items" key={id}>
              <table>
                <tr>
                  <th>
                    <p className="heading"> {heading}</p>
                  </th>
                </tr>

                <tr>
                  <td>
                    {/* <img src={url} alt={url} className="review-image" /> */}
                  </td>
                </tr>

                <tr>
                  <td>
                    <p className="details"> {details}</p>
                  </td>
                </tr>
              </table>
            </div>
          );
        })}
      </div>
    </div>
  );
}
