import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transactions) => transactions.amount);

  const income = amounts
    .filter((amount) => amount >= 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+&#x20B9;{income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">-&#x20B9;{expense}</p>
      </div>
    </div>
  );
};
