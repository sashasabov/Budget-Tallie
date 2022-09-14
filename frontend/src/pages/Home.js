import React from "react";
import { useState } from "react";
import Expenses from "../components/Expenses";
import ExpenseLog from "../components/ExpenseLog";
import { getUserFromPayload } from "../utils/tokenServices";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const Home = ({
  expenses,
  updateExpensesList,
  setExpenses,
}) => {

  const user = getUserFromPayload()
  console.log(user)
    let [ balance, setBalance ] = useState(0)

    let handleBalanceAccrual = (num) => {
        balance = balance + num;
        setBalance(balance) 
    }

  let navigate = useNavigate();

  const initialState = {
    title: "",
    image: "",
    cost: [],
    note: "",
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
      setFormData({ ...formData, [e.target.id]: e.target.value });
  };


  const handleSubmit = (id) => {
    if(!formData.amount){alert("Enter amount spent first!"); return}
    else {
    axios
      .post(`http://localhost:4000/expenses/${id}/entries`, formData)
      .then((res) => {
        setFormData(initialState);
        setExpenses(res.data);        
        navigate("/", { replace: false}); 
        window.location.reload(false);        
      });
    } 
  };


  return (
    <div>
      <ExpenseLog handleChange={handleChange} balance={balance} handleBalanceAccrual={handleBalanceAccrual} expenses={expenses}/>
      <h1>Hello {user.name}</h1>
      <Expenses
        expenses={expenses}
        updateExpensesList={updateExpensesList}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default Home;
