import React from 'react';
import WaterActivityCart from './WaterActivityCart';
import WaterActivityData from "./WaterActivityData.js";
import './WaterActivityPage.css';

const WaterActivityPage = () => {
  return (
    <div className="wateractivity-page">
      <h1 className="wateractivity-heading">Water Activity Places </h1>
      <div className="wateractivity-carts">
        {WaterActivityData.map((cityData, index) => (
          <WaterActivityCart key={index} {...cityData} />
        ))}
      </div>
    </div>
  );
};

export default WaterActivityPage;
