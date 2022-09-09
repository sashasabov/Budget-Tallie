import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom'

const ExpenseInput = styled.input`
  width: 20%;
  height: 100px;
  color: grey;
  background-color: lightgreen;
  font-size: larger;
  text-align: center;
  margin: 2rem 0 2rem 30%;
  border-radius: 5%;
  
`


const ExpenseLog = () => {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "flex-start", }}>
        <Link to={ '/expense/new' }>
        <button style={{width:"auto", height:"40px", margin:"4rem 2rem", background:"transparent", borderRadius: "5px", cursor:"pointer"}}>Add Expense</button>
        </Link>

        <ExpenseInput type="text" placeholder="Enter $ amount" />
      </div>
      <hr />
    </div>
  );
};

export default ExpenseLog;
