import React from "react";

const Balance = ({ expenses }) => {
    
  let total = expenses.reduce((sum, el) => {
    const arrSum = el.cost.reduce((sum, e) => sum + e.amount, 0);
    return sum + arrSum;
  }, 0);

  return (
    <h1 style={{ display: "inline", color: "lightgreen" }}>
      <div>Balance: {total}</div>
    </h1>
  );
};

export default Balance;
