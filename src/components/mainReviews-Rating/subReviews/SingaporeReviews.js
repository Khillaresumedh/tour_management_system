import React, { useState } from "react";
import "./KerlaReviews.css";
import SingaporeData from "./SingaporeData";

export default function KerlaReviews() {
  const [singaporeDetails] = useState(SingaporeData);
  return (
    <div className="main-container">
      <h4 className="title">Gurpreet's Honeymoon In Singapore And Bali</h4>
      <hr />
      <div className="container1">
        {singaporeDetails.map((item) => {
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
