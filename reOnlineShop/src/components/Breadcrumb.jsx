import React from 'react'
import { Link } from 'react-router-dom'

const Breadcrumb = ({currentPageTitle}) => {
  return (
    <div className='flex gap-3 w-full mb-5'>
        <Link to={"/"} className='text-gray-500'>Home</Link>
        <span>/</span>
        <p className='text-black'>{currentPageTitle}</p>
    </div>
  )
}

export default Breadcrumb