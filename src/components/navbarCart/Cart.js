

import React from 'react';

const Cart = ({ name, link, backgroundImage }) => {
  const cardStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <a href={link} className="card" style={cardStyle}>
      <h3 className="card-title">{name}</h3>
    </a>
  );
};

export default Cart;

