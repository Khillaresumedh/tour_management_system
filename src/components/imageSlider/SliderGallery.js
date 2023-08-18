import { useState } from "react";
import slides from "./Slider.js";
import "./SliderGallery.css"

export default function SliderGallery(){

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    
        <div className="carousel">
          <div className="carousel__slide" style={{ backgroundImage: `url(${slides[currentSlide].image})` }}>
            <div className="carousel__content">
              <h2>{slides[currentSlide].title}</h2>
              <p>{slides[currentSlide].description}</p>
            </div>
          </div>
          <div className="carousel__controls">
  <button disabled={currentSlide === 0} className="carousel__button carousel__button-left" onClick={prevSlide}>
    &#9664;
  </button>
  <button disabled={currentSlide === (slides.length - 1)} className="carousel__button carousel__button-right" onClick={nextSlide}>
    &#9654;
  </button>
</div>

        </div>
      );
    };

  