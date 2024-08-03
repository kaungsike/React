import React from 'react'
import products from '../data/products'
import Cart from './Cart'
import carts from '../data/carts'

const CartSection = () => {



  return (
    <div className='flex flex-col gap-3'>
        {
            carts.map((cart) => {
                return <Cart key={cart.id} cart={cart}/>
            })
        }
    </div>
  )
}

export default CartSection