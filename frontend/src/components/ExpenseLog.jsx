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

const ExpenseLog = ({ handleChange, expenses }) => {

    const navigate = useNavigate()

    function logout(){
      setToken()
      navigate('/login')
  }

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Link to={"/expense/new"}>
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

        <Link to={"/login"}>
          <button
            style={{
              width: "5vw",
              height: "40px",
              margin: "4rem 2rem",
              background: "transparent",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
           LOG IN
          </button>
        </Link>

        <Link to={"/signup"}>
          <button
            style={{
              width: "5vw",
              height: "40px",
              margin: "4rem 2rem",
              background: "transparent",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
           SIGN UP
          </button>
        </Link>

        <ExpenseInput
          type="text"
          id="amount"
          name="amount"
          placeholder="Enter $ amount"
          onChange={handleChange}
        />
        <div style={{ width: "auto", height: "40px", margin: "4rem 20rem" }}>
          <Balance expenses={expenses}/>
        </div>
          <img
          onClick={logout}
            style={{
              width: "auto",
              height: "40px",
              margin: "4rem 2rem",
              background: "transparent",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            src="https://cdn-icons-png.flaticon.com/512/126/126467.png"
            alt="edit btn"
          />
      </div>
      <hr />
    </div>
  );
};

export default ExpenseLog;
