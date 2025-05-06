import React from 'react'
import { ThemeProvider } from '@/components/theme/theme-provider'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import { Toaster } from "@/components/ui/sonner"


const Layout = () => {
  return (
    <>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <div className='flex flex-col min-h-screen'>
            <Header/>
            <Outlet/>
            <Footer/>
            </div>
            <Toaster />
        </ThemeProvider>
    </>
  )
}

export default Layout