import React from 'react'
import ProductCard from './ProductCard'
import useProductStore from '../store/useProductsStore';

const ProductSection = () => {

  const {products} = useProductStore();

  console.log(products);

  return (
    <section className='my-5'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4'>
            {products.map((product) => <ProductCard key={product.id} product={product}/> )}
        </div>
    </section>
  )
}

export default ProductSection