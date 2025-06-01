import React from 'react'
import { Outlet } from 'react-router-dom'
import PublicHeader from './PublicHeader'
import PublicFooter from './PublicFooter'

const PublicLayout = () => {
  return (
    <div className='flex flex-col min-h-screen gap-5'>
        <PublicHeader/>
        <Outlet/>
        <PublicFooter/>
    </div>
  )
}

export default PublicLayout