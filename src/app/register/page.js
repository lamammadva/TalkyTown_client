"use client"
import React, { useState } from 'react'
import { useRouter } from "next/navigation"; // Correct hook for App Router
import Register from '../../../components/Auth/Register';
import { register } from '../api/authServices';
const RegisterPage = () => {
    const router = useRouter()

  const [registerData, setRegisterData] = useState({
    email: "",
    password: "",
    username: "",
    firstname: "",
    lastname: "",
    birthDate: "",
    gender: "",
  })
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target.value);
    setRegisterData({...registerData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(registerData)
      console.log("Registered successfully");
      router.push("/login")
      
    } catch (error) {
      console.log(error.message);
    }

  }
 

  return (
    <Register handleInputChange={handleInputChange} handleSubmit={handleSubmit}/>
  )
}

export default RegisterPage