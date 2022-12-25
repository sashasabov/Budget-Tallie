import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Balance from './Balance'
import { useNavigate } from 'react-router-dom'
import { setToken } from "../utils/tokenServices";


const ExpenseInput = styled.input`
  width: 20vw;
  height: 100px;
  color: black;
  font-size: x-large;
  background-color: lightgreen;
  text-align: center;
  margin: 2rem 0 2rem 10%;
  border-radius: 5%;
`;


const ExpenseLog = ({ handleChange,  expenses}) => {
console.log(expenses)
    const navigate = useNavigate()

    function logout(){
      setToken()
      navigate('/login')
  }


// let balanceReset=()=>{
// for(let i=0; i<expenses.length-1; i++){
//   expenses[i].cost.map((entry) => {if(entry){deleteEntry(expenses[i].cost._id, entry._id)} })
// };



  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center", alignItems:'center'}}>
        <Link to={"/expense/new"}>
          <button
            style={{
              width: "auto",
              height: "40px",
              margin: "3rem 2rem",
              background: "transparent",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Add Expense
          </button>
        </Link>
        <Link to={"/expenses/report"}>
          <button
            style={{
              width: "auto",
              height: "40px",
              margin: "4rem 2rem",
              background: "transparent",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Expense Report
          </button>
        </Link>
        {/* Working on implementing Reset Button
        <button>
            style={{
              width: "auto",
              height: "40px",
              margin: "4rem 2rem",
              background: "transparent",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={balanceReset}
          >
            Reset Balance
          </button> */}

        <ExpenseInput
          type="text"
          id="amount"
          name="amount"
          placeholder="ENTER  $  SPENT"
          onChange={handleChange}
        />
        <div style={{ width: "auto", height: "40px", margin: "5vh 10vw", fontSize:"larger" }}>
          <Balance expenses={expenses}/>        
        </div>
          <img
          onClick={logout}
            style={{
              width: "auto",
              height: "50px",
              margin: "4rem 2rem",
              background: "transparent",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            src="https://cdn-icons-png.flaticon.com/512/126/126467.png"
            alt="logout btn"
          />
      </div>
      <hr />
    </div>
  );
};


export default ExpenseLog;
