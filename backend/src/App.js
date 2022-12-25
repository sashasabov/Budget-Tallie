import './App.css';
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import EditExpenseBtn from './pages/EditExpenseBtn';
import NewExpense from './pages/NewExpense';
import ExpensesReport from './pages/ExpensesReport';
import LoginSignupPage from './pages/LoginSignupPage';
import { getUserFromPayload } from "./utils/tokenServices";

// function defUser(user){
//     // let userId=0
//     if(user!==null){ return user.id }
//     else{return 2022}}


function App() {

const [ expenses, setExpenses ] = useState([])

let user = getUserFromPayload()
console.log(user)

// PLANNING TO MAKE THIS APP DYNAMIC FOR USERS

// let userId = user.id
// let userId = defUser(user)

// useEffect(()=> {
//   async function getdefaultExpenses(){    
//     try {    
//       // 
//       let res = await axios.get(`http://localhost:4000/auth/expenses/${userId}`)
//       let data = res.data
//       // console.log("expenses data ", data)
//       let arr = []
//       for(let i=0; i < data.length-1; i++){
//         try {
//       let res = await axios.get(`http://localhost:4000/expenses/${data[i]}`)
//       let expData = res.data
//       arr.push(expData)
//         } catch(err){
//         console.log(err.message)
//       }
//       }
//       setExpenses(arr)   
//     } catch (err){
//     console.log(err.message)
//     }  
//   }
//   getdefaultExpenses()
// }, [userId])

useEffect(() => {
  fetch('https://budget-tallie-backend.herokuapp.com/expenses')
  // fetch('http://localhost:4000/expenses')
  .then(res => res.json())
  .then(data => setExpenses(data))
},[])


console.log("my expenses", expenses)

const updateExpensesList = (id) => {
  setExpenses(expenses.filter(expense => expense._id !== id))
}

const addExpense = (expense) => {
  setExpenses([...expenses, expense])
}

  return (
    <div className="App">      
      <Routes>
        <Route path='/expenses' element={<Home  user={user}  expenses={expenses} updateExpensesList={updateExpensesList} setExpenses={setExpenses}/>}/>
        <Route path='/expense/edit/:id' element={<EditExpenseBtn expenses={expenses} setExpenses={setExpenses}/>}/>
        <Route path='/expense/new' element={<NewExpense addExpense={addExpense}/>}/>
        <Route path='/expenses/report' element={<ExpensesReport expenses={expenses} />}/>
        <Route path='/login' element={<LoginSignupPage  page="login"/>}/>
        <Route path='/signup' element={<LoginSignupPage  page="signup"/>}/>
        <Route exact path='/*' element={<LoginSignupPage  page="login"/>}/>
      </Routes>
    </div>
  );
}

export default App;
