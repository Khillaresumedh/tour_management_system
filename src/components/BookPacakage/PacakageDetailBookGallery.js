import React, { useState } from "react";
// import PacakageDetailBookData from "./PacakageDetailBookData";
import "./PackageDetailBookGallery.css";

export default function PackageDetailBookGallery(props) {
  const [inclusionOpen, setInclusionOpen] = useState(false);
  const [exclusionOpen, setExclusionOpen] = useState(false);

  const toggleInclusion = () => setInclusionOpen(!inclusionOpen);
  const toggleExclusion = () => setExclusionOpen(!exclusionOpen);

  return (
    <div className="pckg_book_main">
      <div className="main_pkg">
        <img src={props.image} className="pkg-img" alt="..." />
        <div className="pckg">
          <h2 className="card-title" style={{ textAlign: "center" }}>
            {props.destname}
          </h2>
          <p className="card-text">
            {props.Overview}
            {props.price}
          </p>
          <h4>{props.price}</h4>
        </div>
        <ul
          className="list-group list-group-flush"
          style={{ textAlign: "center" }}
        >
          <h3>Itinerary</h3>
          <li className="list-group-item">{props.Iternary.Day1.join(", ")}</li>
          <li className="list-group-item">{props.Iternary.Day2.join(", ")}</li>
          <li className="list-group-item">{props.Iternary.Day3.join(", ")}</li>
          <li className="list-group-item">{props.Iternary.Day4.join(", ")}</li>
        </ul>

        <div className="pckg" style={{ textAlign: "center" }}>
          <div className="inex-btn">
            <button
              className="inclusion-btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#inclusionCollapse${props.id}`}
              aria-expanded={inclusionOpen}
              aria-controls={`inclusionCollapse${props.id}`}
              onClick={toggleInclusion}
            >
              Inclusion
            </button>
            <button
              className="exclusion-btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#exclusionCollapse${props.id}`}
              aria-expanded={exclusionOpen}
              aria-controls={`exclusionCollapse${props.id}`}
              onClick={toggleExclusion}
            >
              Exclusion
            </button>
          </div>

          <div className="row">
            <div className="col">
              <div
                className={`collapse multi-collapse ${
                  inclusionOpen ? "show" : ""
                }`}
                id={`inclusionCollapse${props.id}`}
              >
                <div className="exclusion-data">
                  <ul>
                    {props.Inclusion.include &&
                      Array.isArray(props.Inclusion.include) &&
                      props.Inclusion.include.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className={`collapse multi-collapse ${
                  exclusionOpen ? "show" : ""
                }`}
                id={`exclusionCollapse${props.id}`}
              >
                <div className="exclusion-data">
                  <ul>
                    {props.Exclusion.exclude &&
                      Array.isArray(props.Exclusion.exclude) &&
                      props.Exclusion.exclude.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
