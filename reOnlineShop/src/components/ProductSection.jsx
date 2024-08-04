import React from 'react'
import Container from './Container'
import Products from './Products'

const ProductSection = () => {
  return (
    <section>
        <Container>
        <p className='text-xl mt-7 mb-3 text-gray-600'>Available Product Lists</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 gap-5'>
                <Products />
            </div>
        </Container>
    </section>
  )
}

export default ProductSection