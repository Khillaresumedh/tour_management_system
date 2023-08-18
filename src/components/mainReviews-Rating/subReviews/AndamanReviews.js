import React, { useState } from "react";
import "./AndamanReviews.css";
import AndamanData from "./AndamanData";

export default function AndamanReviews() {
  const [jaisalmerDetails] = useState(AndamanData);
  return (
    <div className="main-container">
      <h4 className="title">A Memorable Trip With Friends To Andaman</h4>
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
