import React from 'react';
import NatureCart from './NatureCart';
import NatureData from './NatureData';
import './NaturePage.css';

const NaturePage = () => {
  return (
    <div className="nature-page">
      <h1 className="nature-heading">Nature Places</h1>
      <div className="nature-carts">
        {NatureData.map((cityData, index) => (
          <NatureCart key={index} {...cityData} />
        ))}
      </div>
    </div>
  );
};

export default NaturePage;


