import React from 'react';
import './WaterActivityCart.css';

const WaterActivityCart = ({ city, rate, flights, hotels, activities, transfers, imageSrc }) => {
  return (
    <div className="wateractivity-cart">
      <div>
        <img src={imageSrc} alt={city} className="city-image" />
      </div>
      <div className="city-details">
        <h2>{city}</h2>
        <div className="city-detail-box">
          <div className="city-detail-item">
            <i className="fas fa-money-bill"></i>
            <div className="rate">RS {rate}</div>
          </div>
          <div className="city-detail-item">
            <i className="fas fa-plane"></i>
            <p>{flights}</p>
          </div>
          <div className="city-detail-item">
            <i className="fas fa-hotel"></i>
            <p>{hotels}</p>
          </div>
          <div className="city-detail-item">
            <i className="fas fa-swimmer"></i>
            <p>{activities}</p>
          </div>
          <div className="city-detail-item">
            <i className="fas fa-bus"></i>
            <p>{transfers}</p>
          </div>
        </div>
        <button className="book-now-button">Book Now</button>
      </div>
    </div>
  );
};

export default WaterActivityCart;
