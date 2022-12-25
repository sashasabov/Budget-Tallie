import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ExpenseBox = styled.div` 
  border: 2px solid darkgreen;
  border-radius: 5%;
  height: 300px;
  width: 300px; 
  margin: 2rem 2rem; 
  img {
    height: 150px;
    width: 150px;
    bottom: 2rem;
  }
  #Btn {
    height: 30px;
    width: 30px;
    margin: 1rem;
  }
  #Btn:hover {
    border-radius: 10%;
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
  .delete-edit {
    display: flex;
    justify-content: space-between;
  }
  .submitBtn{
    background: transparent;
    cursor: pointer;
    color: lightgreen;
    margin-top: -1rem; 
  }
`;

function Expense({
  expense,
  deleteExpense,
  handleSubmit,
}) {


  return (
    <ExpenseBox>    
      <div className="delete-edit">
        <img
          onClick={() => deleteExpense(expense._id)}
          id="Btn"
          src="https://cdn-icons-png.flaticon.com/512/1345/1345874.png"
          alt="delete btn"
        />
        <Link to={`/expense/edit/${expense._id}`}>
          <img
            id="Btn"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Edit_icon_%28the_Noun_Project_30184%29.svg/1024px-Edit_icon_%28the_Noun_Project_30184%29.svg.png"
            alt="edit btn"
          />
        </Link>
      </div>
      <div className="submitBtn" type="submit" onClick={() => { handleSubmit(expense._id)}}>
      <h1>{expense.title}</h1>
      <img src={expense.image} alt={expense.title} />
    </div>
    </ExpenseBox>
  );
}

export default Expense;
