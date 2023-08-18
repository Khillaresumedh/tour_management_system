import React, { useState } from 'react';
import './PaymentPage.css';


const PaymentPage = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [name, setName] = useState('');

  const handlePayment = () => {
    // Here, you would typically integrate with a real payment gateway
    // and handle the payment process, including validation and processing.

    // For demonstration purposes, we'll just log the payment details.
    console.log('Payment Details:', {
     cardNumber,
      expiryDate,
      cvv,
      name,
    });
  };

  return (
    <div className="payment-container">
      <h1>Payment Page</h1>
      <div className="payment-form">
        <label htmlFor="cardNumber">Card Number</label>
        <input
          type="text"
          id="cardNumber"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />

        <label htmlFor="expiryDate">Expiry Date</label>
        <input
          type="text"
          id="expiryDate"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
        />

        <label htmlFor="cvv">CVV</label>
        <input
          type="number"
          id="cvv"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
        />

        <label htmlFor="name">Name on Card</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button className='submitpay' onClick={handlePayment}>Submit Payment</button>
      </div>
    </div>
  );
};

export default PaymentPage;
