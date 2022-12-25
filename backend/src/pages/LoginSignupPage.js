import React, {useEffect, useState} from 'react'
import LoginForm from '../components/LoginForm'
import SignupForm from '../components/SignupForm'
import { useNavigate} from 'react-router-dom'
import { getToken } from '../utils/tokenServices'



const LoginSignupPage = ({ page}) => {

    const navigate = useNavigate()
    const [user, setUser] = useState()

    useEffect(() => {
        if (getToken()) navigate('/')
    }, [])

  return (
    <div>
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
        

       
        </div>
        <div>
              {page === 'login' ? <LoginForm setUser={setUser}/> : <SignupForm setUser={setUser}/>} 
          </div>
          
    </div>
  )
}

export default LoginSignupPage