import React from 'react';
import ReligiousCart from './ReligiousCart';
import ReligiousData from './ReligiousData';
import './ReligiousPage.css';

const ReligiousPage = () => {
  return (
    <div className="religious-page">
      <h1 className="religious-heading">Religious Places </h1>
      <div className="religious-carts">
        {ReligiousData.map((cityData, index) => (
          <ReligiousCart key={index} {...cityData} />
        ))}
      </div>
    </div>
  );
};

export default ReligiousPage;

