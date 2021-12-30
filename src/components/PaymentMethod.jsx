import React from 'react';
import masterCard from '../assets/img/master-card.jpg';
import paypal from '../assets/img/paypal.jpg';

import '../styles/payment-method.css';

const PaymentMethod = ({ btnText }) => {
  return (
    <div>
      <div className="payment">
        <label htmlFor="" className=" d-flex align-items-center gap-2">
          <input type="radio" /> Direct Bank Transfer
        </label>
        <p className="section__description mt-3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
          molestias aspernatur quisquam fugit eius quas exercitationem
          laboriosam praesentium illum similique!
        </p>
      </div>

      <div className="payment mb-3">
        <label htmlFor="" className=" d-flex align-items-center gap-2">
          <input type="radio" /> Cheque Payment
        </label>
      </div>

      <div className="payment mb-3 d-flex align-items-center justify-content-between">
        <label htmlFor="" className=" d-flex align-items-center gap-2">
          <input type="radio" /> Credit Card
        </label>

        <img src={masterCard} alt="" />
      </div>

      <div className="payment mb-3 d-flex align-items-center justify-content-between">
        <label htmlFor="" className=" d-flex align-items-center gap-2">
          <input type="radio" /> Paypal
        </label>
        <img src={paypal} alt="" />
      </div>

      <div className="payment text-end mt-5">
        <button>{btnText}</button>
      </div>
    </div>
  );
};

export default PaymentMethod;
