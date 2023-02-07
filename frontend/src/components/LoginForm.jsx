import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useState } from 'react'
import {setToken,getUserFromPayload} from '../utils/tokenServices'
import { useNavigate, Link } from 'react-router-dom'

let FormBox = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20vh;
    height: 40vh; 
ul{
    list-style-type:none;
}
li{
    margin: 2rem;
}
input{
    width: 15vw;
    height: 5vh;
    border: 3px solid lightgreen;
    font-size: large;
    font-style: italic;
    border-radius: 5px;    
}
.loginBtn{
    width: 5vw;
    height: 40px;
    margin: 2rem 2rem;
    background: transparent;
    border-radius: 5px;
    cursor: pointer;
    font-size: large;
}
`

const LoginForm = ({setUser}) => {

    const navigate = useNavigate()


    const [formData, setFormData] = useState()
    const [errorMsg,setErrorMsg] = useState({})

    const handleChange =(e) => {
        setFormData({...formData, [e.target.id] :e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('https://budget-tallie-backend.onrender.com/auth/login', formData)
        // axios.post('http://localhost:4000/auth/login', formData)
        .then(res =>{
            if(res.status === 200){
                setToken(res.data.access)
                setUser(getUserFromPayload())
                navigate('/expenses')
            }
        }).catch(err=>{
            const res = err.response
            if(res.status === 400){
                setErrorMsg(res.data)
            }
        })
}


  return (
    <div>        
        <img  style={{marginTop:"2%"}} src='/static/WelcomeTo.png' alt="Welcome to"/>
    
        <FormBox onSubmit={handleSubmit}>     
            <ul>            
                <img src='/static/BudgetTallie.png' alt="Welcome to"/>
                <li><input type="email" id="email" placeholder=' Email' onChange={handleChange}/></li>
                <li><input type="password" id="password" placeholder=' Password' onChange={handleChange}/></li>
                <li>
                {Object.entries(errorMsg).map((keyName,keyIndex) =>{
                    return <label>{keyName[1]}</label>
                })} 
                </li>
                <button className="loginBtn" type="submit">Log In</button>
                <li>No account?<Link to="/signup"> Create one</Link></li>
            </ul>
            
        </FormBox>
    </div>
  )
}

export default LoginForm