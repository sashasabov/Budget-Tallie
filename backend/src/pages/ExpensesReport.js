import React from 'react'
import ExpensesDetails from '../components/ExpensesDetails'
import { setToken } from '../utils/tokenServices'
import { useNavigate, Link } from 'react-router-dom'
import Balance from '../components/Balance'


const ExpensesReport = ({expenses}) => {

  const navigate = useNavigate()

  function logout(){
    setToken()
    navigate('/login')
}
  return (
    <div>
        <div style={{ display: "flex",margin:"0", justifyContent:"space-between", height:"5%" }}>
        <Link to={"/expenses"}>
          <button
            style={{
              width: "6rem",
              height: "40px",
              margin: "4rem 2rem",
              background: "transparent",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Home
          </button>
        </Link>
        <h1><Balance expenses = {expenses}/> </h1>
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
            alt="logout btn"
          />
    
        </div>
       
        <br/><hr/>
        <ExpensesDetails expenses = {expenses}/>   
        
    </div>
  )
}

export default ExpensesReport