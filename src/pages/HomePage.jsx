import React from "react";

import "./Home.css"

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
  return (
    <section className="py-5 my-5">
      <div className="container">
        <div className="home-card">
          <p className="home-card-text">
            Total Number of Debtholders: <span className="bg-success p-2 my-0 py-0 rounded text-white">{debts.length}</span>
          </p>
          <p className="home-card-text">Total Amount of Debts: <span className="bg-info p-2 my-0 py-0 rounded text-white">{totalDebts}$</span></p>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
