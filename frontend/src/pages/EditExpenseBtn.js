import React from 'react'
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import { setToken } from '../utils/tokenServices'

const ExpenseBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border: 2px solid darkgreen;
    background-color: whitesmoke;
    border-radius: 5%;
    height: 400px;
    width: 400px;
    margin: 2rem 2rem;
    padding: 0.25rem 1rem 0.25rem 1rem;

  #editBtn{
    height: 80px;
    width: 80px;
    /* background: transparent; */
}
.input{
margin: 4rem;
}
`

const EditExpenseBtn = ({setExpenses}) => {

    let { id } = useParams()
    let navigate = useNavigate()

    function logout(){
        setToken()
        navigate('/login')
    }
    
    
    const initialState = {
        title: '',
        image: '',
        // cost:[],
        // note:''
    }

    const [formData, setFormData] = useState(initialState)

    const handleChange = (e) => {
        console.log(e.target)
        setFormData({...formData, [e.target.id] : e.target.value})
    }

    const processSubmit = (e) => {
        e.preventDefault()
        axios.put(`https://budget-tallie-backend.onrender.com/expenses/${id}`, formData )
        // axios.put(`http://localhost:4000/expenses/${id}`, formData )
        .then(res =>  {
            setFormData(initialState)
            console.log(formData)
            setExpenses(res.data)
            navigate('/expenses', { replace: true })
        })
    }

    useEffect(()=> {
        axios.get(`https://budget-tallie-backend.onrender.com/expenses/${id}`)
        // axios.get(`http://localhost:4000/expenses/${id}`)
        .then(res => {
            setFormData(res.data)
        })
    }, [])

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
        <h1>EDIT EXPENSE CATEGORY HERE</h1>
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
    <div style={{display:'flex', flexDirection:"column", justifyContent:"center", alignItems:"center", backgroundColor:'lightgreen', height:"70vh"}}>
  
    <ExpenseBox>
        <form onSubmit={ processSubmit }>
            <div className='input'>
                <label htmlFor="title">Title: </label>
                <input type="text" value={ formData?.title } name='title' id="title" onChange = {handleChange}/>
            </div>
            <div className='input'>
            <label htmlFor="image">Image: </label>
                <input type="text" value={ formData?.image } name='image' id="image" onChange = {handleChange}/>
            </div>            
            <button type="submit">
            <img id="editBtn"  src="https://www.iconpacks.net/icons/2/free-check-mark-icon-3279-thumb.png" alt="Save" />
            </button>
            
        </form>
    </ExpenseBox>
    </div>
    </div>
  )
}

export default EditExpenseBtn