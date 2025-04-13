import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import CartSection from '../components/CartSection'
import CalculateCost from '../components/CalculateCost'

const MyCart = () => {
  return (
    <div className='flex flex-grow flex-col gap-2 h-full'>
        <Breadcrumb current={"My Cart"}/>
        <CartSection/>
        <CalculateCost/>
    </div>
  )
}

export default MyCart