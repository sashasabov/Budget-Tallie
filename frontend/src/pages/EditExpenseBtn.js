import React from 'react'
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const ExpenseBox = styled.div`
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

  #editBtn{
    height: 70px;
    width: 70px;
}
.input{
margin: 2rem;
}
`

const EditExpenseBtn = ({setExpenses}) => {

    let { id } = useParams()
    let navigate = useNavigate()
    
    const initialState = {
        title: '',
        image: '',
    }

    const [formData, setFormData] = useState(initialState)

    const handleChange = (e) => {
        console.log(e.target)
        setFormData({...formData, [e.target.id] : e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        axios.put(`http://localhost:4000/expenses/${id}`, formData )
        .then(res =>  {
            setFormData(initialState)
            setExpenses(res.data)
            navigate('/', { replace: true })
        })
    }

    useEffect(()=> {
        axios.get(`http://localhost:4000/expenses/${id}`)
        .then(res => {
            setFormData(res.data)
        })
    }, [])

  return (
    // <div>
    <ExpenseBox>
        <form onSubmit={ handleSubmit }>
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
    // </div>
  )
}

export default EditExpenseBtn