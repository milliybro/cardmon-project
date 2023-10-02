import React from "react";

import "./Home.css";
import up from "../assets/up.png";
import down from "../assets/down.png";

const HomePage = ({ debts }) => {
  const getDebtsAmount = () => {
    let sum = 0;
    let totalSum;
    for (let debt of debts) {
      totalSum = sum += debt.amount;
    }
    return totalSum;
  };
  let totalDebts = getDebtsAmount();
  let income = 16254;
  let balance = income - totalDebts;
  return (
    <section className="py-5 my-5">
      <div className="container">
        <h5 className="text-center mb-4 text-primary">October</h5>
        <div className="exin">
          <div className="ex">
            <img src={up} alt="" />
            <div>
              <h4>EXPENSES</h4>
              <p>-{totalDebts} USD</p>
            </div>
          </div>
          <div className="in">
            <img src={down} alt="" />
            <div>
              <h4>INCOME</h4>
              <p>{income} USD</p>
            </div>
          </div>
        </div>
        <div className="balance mx-auto text-center">
          <h5 className="">BALANCE: {balance} USD</h5>
        </div>
        <h4 className="text-center my-3">All</h4>
        <div className="circle">
          <div className="circle-around">
            <div className="around-text">
              <h5>Unspecified</h5>
              <h5 className="text-danger">{totalDebts} USD</h5>   
            </div>
          </div>
          <h6 className="percent text-white">100%</h6>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
