import React from "react";
import Expense from "./Expense";
import axios from "axios";


const Expenses = ({ expenses, updateExpensesList, handleSubmit, userId}) => {

  const deleteExpense = (id, userId) => {
    // axios.delete(`http://localhost:4000/expenses/${id}`).then((res) => {
    axios.delete(`https://budget-tallie-backend.herokuapp.com/expenses/${id}`).then((res) => {
    // axios.delete(`http://localhost:4000/expenses/${id}/${userId}`).then((res) => {
      console.log(res);
      updateExpensesList(id);
    });
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ display: "flex", flexWrap: "wrap", width: "80%" }}>
        {/* {expenses[length-1] != null ? expenses.push(<AddExpenseBtn/>) : expenses.pop(<AddExpenseBtn/>)} */}
        {expenses.map((expense) => { 
          return (
            <Expense
              key={expense._id}
              expense={expense}
              deleteExpense={deleteExpense}
              handleSubmit={handleSubmit}
              userId={userId}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Expenses;
