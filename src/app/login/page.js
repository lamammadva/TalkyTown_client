"use client"
import React, { useState } from 'react'
import Login from '../../../components/Auth/Login'
import "../../../static/login.css"
import { login } from '../api/authServices'
import { useRouter } from 'next/navigation'
const LoginPage = () => {
   const router = useRouter()
   const [user, setUser] = useState("")  
   const handleLogin = async (e) => {
    const {value , name} = e.target
    setUser({...user,[name]:value})

   }
   const loginSubmit = async (e)=>{
    e.preventDefault();
    try {
      const response = await login(user)
      console.log("login success", response)
      router.push("/home")
    } catch (error) {
      console.log(error.message)
    }
   }

  
  return (
    <>
    <Login loginSubmit={loginSubmit} handleLogin={handleLogin}/>
     </>
  )
}

export default LoginPage