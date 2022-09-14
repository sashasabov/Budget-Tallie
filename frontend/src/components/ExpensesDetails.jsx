import React from "react";
import ExpenseDetails from "./ExpenseDetails";
import axios from "axios";

const ExpensesDetails = ({ expenses }) => {
  const deleteEntry = (id, entryId) => {
    axios
      .delete(`http://localhost:4000/expenses/${id}/entries/${entryId}`)
      .then((res) => {
        console.log(res);
        window.location.reload(true);
      });
  };
  return (
    <div>
      {
        expenses.map((expense) => {
          return (
            <ExpenseDetails
              key={expense._id}
              expense={expense}
              deleteEntry={deleteEntry}
            />
          );
        })
        //
      }
    </div>
  );
};

export default ExpensesDetails;
