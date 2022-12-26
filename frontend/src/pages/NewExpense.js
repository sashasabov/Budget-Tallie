import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import { setToken } from '../utils/tokenServices'

const NewExpenseForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border: 2px solid darkgreen;
    background-color: whitesmoke;
    border-radius: 5%;
    height: 400px;
    width: 400px;
    /* margin: 2rem 2rem; */
    padding: 0.25rem 1rem 0.25rem 1rem;

  #saveBtn{
    height: 80px;
    width: 80px;
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
    cost:[],
    note:''
}

const [formData, setFormData] = useState(initialState)

const handleChange = (e) => {
    setFormData({...formData, [e.target.id] : e.target.value})
}

function logout(){
    setToken()
    navigate('/login')
}

const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('hhttps://budget-tallie-backend.onrender.com/expenses', formData)
    // axios.post('http://localhost:4000/expenses', formData)
    .then(res => {
        setFormData(initialState)
        addExpense(res.data)
        navigate('/expenses', { replace: true })
    }) 
}
  return (
    <div>
         <div style={{ display: "flex",margin:"0", justifyContent:"space-between",alignItems:"center", height:"5%" }}>
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
        <h1>ADD NEW EXPENSE CATEGORY HERE</h1>
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
    <div style={{display:'flex', justifyContent:"center", alignItems:"center", backgroundColor:'lightgreen', height:"70vh"}}>
   
    <NewExpenseForm onSubmit = { handleSubmit }>
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
    </NewExpenseForm>
    </div>
    </div>
  )
}

export default NewExpense