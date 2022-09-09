import React from 'react'
import Expenses from '../components/Expenses'
import ExpenseLog from '../components/ExpenseLog'



const Home = ({expenses, updateExpensesList}) => {
  return (
    <div>
        <ExpenseLog />
        <Expenses expenses = {expenses} updateExpensesList = {updateExpensesList} />       
    </div>
  )
}

export default Home