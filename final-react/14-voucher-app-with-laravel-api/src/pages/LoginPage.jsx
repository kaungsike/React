import React from 'react'
import LoginForm from '../components/template/LoginForm'
import { Toaster } from 'sonner'

const LoginPage = () => {
  return (
    <div>
        <LoginForm/>
        <Toaster/>
    </div>
  )
}

export default LoginPage