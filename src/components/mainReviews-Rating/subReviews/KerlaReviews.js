import React, { useState } from "react";
import "./KerlaReviews.css";
import KerlaData from "./KerlaData";

export default function KerlaReviews() {
  const [kerlaDetails] = useState(KerlaData);
  return (
    <div className="main-container">
      <h4 className="title">Vivek's Fun-Filled Family Trip To Hong Kong</h4>
      <hr />
      <div className="container1">
        {kerlaDetails.map((item) => {
          const { id, heading, url, details } = item;
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
                    <img src={url} alt={url} className="review-image" />
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
