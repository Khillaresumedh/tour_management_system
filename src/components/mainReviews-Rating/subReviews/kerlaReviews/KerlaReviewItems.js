import React, { useState } from "react";
import KerlaData from "./KerlaData";

export default function KerlaReviewItems() {
  const [kerlaDetails] = useState(KerlaData);
  return (
    <>
      {kerlaDetails.map((item) => {
        const { id, heading, url, details } = item;
        return (
          <article className="container-items" key={id}>
            <table>
              <tr>
                <th>
                  <p className="title"> {heading}</p>
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
          </article>
        );
      })}
    </>
  );
}
