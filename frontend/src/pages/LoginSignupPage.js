import React, {useEffect} from 'react'
import LoginForm from '../components/LoginForm'
import SignupForm from '../components/SignupForm'
import { useNavigate } from 'react-router-dom'
import { getToken } from '../utils/tokenServices'


const LoginSignupPage = ({setUser, page}) => {
    const navigate = useNavigate()

    useEffect(() => {
        if (getToken()) navigate('/')
    }, [])

  return (
    <div>
        <div>
              {page === 'login' ? <LoginForm setUser={setUser}/> : <SignupForm setUser={setUser}/>} 
          </div>
    </div>
  )
}

export default LoginSignupPage