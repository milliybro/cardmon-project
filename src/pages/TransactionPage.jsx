import React from "react";
import TransactionCard from "../components/card/TransactionCard";

const TransactionsPage = ({ debts }) => {
  const expenses = [
    {
      category: "Inter Nation",
      amount: "110",
      description: `Payment for "Inter Nation"`,
      time: "2023-09-15",
    },
    {
      category: "Apartment",
      amount: "80",
      description: "apartment fee",
      time: "2023-09-10",
    },
    {
      category: "Najot Ta'lim",
      amount: "110",
      description: `Payment for "Najot ta'lim"`,
      time: "2023-09-01",
    },
  ];
  const getDebtsAmount = () => {
    let sum = 0;
    let totalSum;
    for (let debt of debts) {
      totalSum = sum += debt.amount;
    }
    return totalSum;
  };
  const totalExpenses = () => {
    let sum = 0;
    for (let el of expenses) {
      sum += +el.amount;
    }
    return sum;
  };

  let total = getDebtsAmount() + totalExpenses();
  return (
    <section className="">
      <div className="container">
        <div className="mx-auto d-flex text-center justify-content-center gap-3">
          <h2 className="transaction-title pt-5 text-center text-danger">
            Expenses
          </h2>
          <h2 className="transaction-title pt-5 text-center text-success">
            Income
          </h2>
        </div>
        <div className="transaction-total">
          <p className="alert alert-info mt-3">
            Total Expenses:{" "}
            <span className="text-danger">${total}</span>
          </p>
        </div>
        <div className="transaction-card-row">
          <h3 className="text-success">September</h3>
          {expenses.map((expense) => (
            <TransactionCard {...expense} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransactionsPage;
