import React from 'react'
import ProductCard from './ProductCard'
import { products } from '../data/products'

const ProductSection = () => {

  return (
    <section className='my-5'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {products.map((product) => <ProductCard key={product.id} product={product}/> )}
        </div>
    </section>
  )
}

export default ProductSection