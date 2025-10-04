import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import { Toaster } from 'react-hot-toast';

const Layout = () => {
  return (
    <main className='flex flex-col min-h-screen'>
        <Header/>
        <Outlet/>
        <Toaster />
    </main>
  )
}

export default Layout