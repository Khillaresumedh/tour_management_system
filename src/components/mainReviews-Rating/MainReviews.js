import React, { useState, useEffect } from "react";
import "./MainReviews.css";
import mainReviewsData from "./mainReviewsData";
import { Link } from "react-router-dom";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Rating1 from "./Rating1";

import Rating from "./Rating";

export default function Slider() {
  // const { singleProduct } = useContext();
  // const { stars } = singleProduct;

  const [reviewDetails] = useState(mainReviewsData);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = reviewDetails.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, reviewDetails]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);

    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section className="section">
      <div className="title">
        <h3 className="package-title">
          Real travelers. Real stories. Real opinions to help you make the right
          choice.
        </h3>
      </div>
      <div>
        <Rating />
      </div>

      <div className="section-center">
        {reviewDetails.map((item, index1) => {
          const { id, heading, url, details, link, stars } = item;
          let position = "nextSlide";
          if (index1 === index) {
            position = "activeSlide";
          }
          if (
            index1 === index - 1 ||
            (index === 0 && index1 === reviewDetails.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article className={position} key={id}>
              <p className="title"> {heading}</p>
              <img src={url} alt={url} className="person-img" />
              <Rating1 stars={stars} />
              <p className="text"> {details}</p>
              <Link className="view-more-btn" to={link}>
                View More
              </Link>
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <AiOutlineLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <AiOutlineRight />
        </button>
      </div>
    </section>
  );
}
