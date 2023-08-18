import React from 'react';
import HillstationCart from './HillstationCart';
import HillstationData from './HillstationData';
import './HillstationPage.css';

const HillstationPage = () => {
  return (
    <div className="hillstation-page">
      <h1 className="hillstation-heading">Hillstation Places</h1>
      <div className="hillstation-carts">
        {HillstationData.map((cityData, index) => (
          <HillstationCart key={index} {...cityData} />
        ))}
      </div>
    </div>
  );
};

export default HillstationPage;
