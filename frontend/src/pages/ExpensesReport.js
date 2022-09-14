import React from 'react'
import ExpensesDetails from '../components/ExpensesDetails'

const ExpensesReport = ({expenses}) => {
  return (
    <div>
        <ExpensesDetails expenses = {expenses}/>    
    </div>
  )
}

export default ExpensesReport