// import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import EditExpenseBtn from './pages/EditExpenseBtn';
import NewExpense from './pages/NewExpense';


function App() {

  const [ expenses, setExpenses ] = useState([])


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

console.log(expenses)

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home expenses={expenses} updateExpensesList={updateExpensesList}/>}/>
        <Route path='/expense/edit/:id' element={<EditExpenseBtn expenses={expenses} setExpenses={setExpenses}/>}/>
        <Route path='/expense/new' element={<NewExpense addExpense={addExpense}/>}/>
      </Routes>
    </div>
  );
}

export default App;
