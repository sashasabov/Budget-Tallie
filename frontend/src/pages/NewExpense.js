import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const NewExpenseForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border: 2px solid darkgreen;
    border-radius: 5%;
    height: 300px;
    width: 300px;
    margin: 2rem 2rem;
    padding: 0.25rem 1rem 0.25rem 1rem;

  #saveBtn{
    height: 70px;
    width: 70px;
}
.input{
margin: 2rem;
}
`

const NewExpense = ({addExpense}) => {

let navigate = useNavigate()
    
const initialState = {
    title: '',
    image: '',
}

const [formData, setFormData] = useState(initialState)

const handleChange = (e) => {
    setFormData({...formData, [e.target.id] : e.target.value})
}

const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    axios.post('http://localhost:4000/expenses', formData)
    .then(res => {
        setFormData(initialState)
        addExpense(res.data)
        navigate('/', { replace: true })
    }) 
}
  return (
    <NewExpenseForm onSubmit ={ handleSubmit }>
        {/* <form onSubmit={ handleSubmit }> */}
            <div className='input'>
                <label htmlFor="title">Title: </label>
                <input type="text"  name='title' id="title" onChange = {handleChange}/>
            </div>
            <div className='input'>
            <label htmlFor="image">Image: </label>
                <input type="text" name='image' id="image" onChange = {handleChange}/>
            </div>            
            <button type="submit">
            <img id="saveBtn"  src="https://www.iconpacks.net/icons/2/free-check-mark-icon-3279-thumb.png" alt="Save" />
            </button>
            
        {/* </form> */}
    </NewExpenseForm>
  )
}

export default NewExpense