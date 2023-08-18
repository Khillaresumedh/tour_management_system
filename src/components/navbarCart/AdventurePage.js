import React from 'react';
import AdventureCart from './AdventureCart';
import AdventureData from './AdventureData';
import './AdventurPage.css'

const AdventurePage = () => {
  return (
    <div className="adventure-page">
      <h1 className="adventure-heading">Adventure Places In & outside India</h1>
      <div className="adventure-carts">
        {AdventureData.map((cityData, index) => (
          <AdventureCart key={index} {...cityData} />
        ))}
      </div>
    </div>
  );
};

export default AdventurePage;


