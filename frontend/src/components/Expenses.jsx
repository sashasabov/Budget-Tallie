import React from 'react'
import Expense from './Expense'
import axios from 'axios'
// import styled from 'styled-components'



// const AddButton = styled.button`
//  background: transparent;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-around;
//     align-items: center;
//     border: 2px solid darkgreen;
//     border-radius: 5%;
//     height: 300px;
//     width: 300px;
//     margin: 2rem 2rem;
//     padding: 0.25rem 1rem 0.25rem 1rem;
//     ul#btns li{
//         display: inline;
//     }
//     `


const Expenses = ({expenses, updateExpensesList}) => {

const deleteExpense = (id) => {
    axios.delete(`http://localhost:4000/expenses/${id}`)
    .then(res => {
        console.log(res);
        updateExpensesList(id)
    })
    }

// let  length = expenses.length

  return (
    <div>
     
        {/* {expenses[length-1] != null ? expenses.push( <AddExpenseBtn/>) : expenses.pop(<AddExpenseBtn/>)} */}
        
        { 
        expenses.map(expense => {           
        return <Expense key = {expense._id}  expense={expense} deleteExpense={deleteExpense} />})
        }
      
    </div>
  )
}

export default Expenses