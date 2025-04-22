import React from 'react'
import CategoriesSection from '../components/CategoriesSection'
import ProductSection from '../components/ProductSection'

const Home = () => {
  return (
    <div className='flex-grow'>
        <CategoriesSection/>
        <ProductSection/>
    </div>
  )
}

export default Home