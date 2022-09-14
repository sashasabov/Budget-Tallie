import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import {setToken, getUserFromPayload} from '../utils/tokenServices'

let FormBox = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10vh;
    height: 60vh;    
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
.signupBtn{
    width: 6vw;
    height: 40px;
    margin: 2rem 2rem;
    background: transparent;
    border-radius: 5px;
    cursor: pointer;
    font-size: large;
}
`

const SignupForm = ({setUser}) => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState()
    const [errorMsg,setErrorMsg] = useState({})

    const handleChange =(e) => {
        setFormData({...formData, [e.target.id] :e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:4000/auth/signup', formData)
        .then(res =>{
            if(res.status === 200){
                setToken(res.data.access)
                setUser(getUserFromPayload())
                navigate('/')
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
        <FormBox onSubmit={handleSubmit}>
            <ul>
            <li><h1 style={{color:"grey"}}>Sign Up</h1></li>
            <li><input type="text" id="name" placeholder='Name' onChange={handleChange}/></li>
            <li><input type="email" id="email" placeholder='Email'  onChange={handleChange}/></li>
            <li><input type="password" id="pass1" placeholder='Password'  onChange={handleChange}/></li>
            <li><input type="password" id="pass2" placeholder='Confirm Password' onChange={handleChange}/></li>
            <li>
                {Object.entries(errorMsg).map((keyName,keyIndex) =>{
                    return <label>{keyName[1]}</label>
                })}
            </li>
            <button className="signupBtn" type="submit">Sign Up</button>
            <li>Already have an account? <Link to="/login">Login</Link></li>
            </ul>

      
        </FormBox>
    </div>
  )
}

export default SignupForm