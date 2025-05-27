import React from 'react'
import RegisterForm from '../components/template/RegisterForm'
import { Toaster } from 'sonner'

const RegisterPage = () => {
  return (
    <div>
        <RegisterForm/>
        <Toaster/>
    </div>
  )
}

export default RegisterPage