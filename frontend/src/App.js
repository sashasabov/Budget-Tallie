import './App.css';
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import EditExpenseBtn from './pages/EditExpenseBtn';
import NewExpense from './pages/NewExpense';
import ExpensesReport from './pages/ExpensesReport';
import LoginSignupPage from './pages/LoginSignupPage';
// import { getUserFromPayload } from "../utils/tokenServices";

function App() {

const [ expenses, setExpenses ] = useState([])
const [user, setUser] = useState()

useEffect(() =>{
  fetch('http://localhost:4000/expenses')
  .then(res => res.json())
  .then(data => setExpenses(data))
},[])

const updateExpensesList = (id) => {
  setExpenses(expenses.filter(expense => expense._id !== id))
}

const addExpense = (expense) => {
  setExpenses([...expenses, expense])
}
// const user = getUserFromPayload()

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home expenses={expenses} updateExpensesList={updateExpensesList} setExpenses={setExpenses}/>}/>
        <Route path='/expense/edit/:id' element={<EditExpenseBtn expenses={expenses} setExpenses={setExpenses}/>}/>
        <Route path='/expense/new' element={<NewExpense addExpense={addExpense}/>}/>
        <Route path='/expenses/report' element={<ExpensesReport expenses={expenses} />}/>
        <Route path='/login' element={<LoginSignupPage setUser={setUser} page="login"/>}/>
        <Route path='/signup' element={<LoginSignupPage setUser={setUser} page="signup"/>}/>

      </Routes>
    </div>
  );
}

export default App;
