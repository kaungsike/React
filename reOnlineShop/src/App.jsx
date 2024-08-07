import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import CategorySection from './components/CategorySection'
import ProductSection from './components/ProductSection'

const App = () => {
  return (
    <div className='flex flex-col h-screen px-[20px]'>
      <Header/>
      <CategorySection/>
      <ProductSection/>
      <Footer/>
    </div>
  )
}

export default App
