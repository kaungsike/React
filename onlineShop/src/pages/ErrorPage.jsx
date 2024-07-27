import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center'>
        <div className='flex flex-col items-center gap-3'>
            <h1 className='text-4xl font-bold'>404 Not Found</h1>
            <Link to={'/'}>Return to home</Link>
        </div>
    </div>
  )
}

export default ErrorPage