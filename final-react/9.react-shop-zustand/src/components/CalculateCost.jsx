import React from 'react'
import useCartsStore from '../store/useCartsStore'
import useProductStore from '../store/useProductsStore';

const CalculateCost = () => {

  const {carts} = useCartsStore();
  const {products} = useProductStore();

  const totalCost = carts.reduce((pv,cv) => {
    const cost = products.find((products) => products.id==cv.productId).price*cv.quantity;

    return pv+cost;
  },0)

  return (
    <div className='mt-auto border-t border-gray-400 w-full'>
        <div className='flex w-full justify-between md:justify-end md:gap-16 items-end py-5'>
            <p>Total : $ <span className='text-lg font-bold'>{totalCost.toFixed(2)}</span> </p>
            <p>Tax 5% : $ <span className='text-lg font-bold'>{(totalCost*0.05).toFixed(2)}</span> </p>
            <p>Grand Total : $ <span className='text-lg font-bold'>{(totalCost*1.05).toFixed(2)}</span> </p>
        </div>
        <div className='w-full flex justify-end items-end py-5'>
        <button className='border active:scale-95 duration-150 border-black rounded px-4 py-2'>Order Now</button>
        </div>
    </div>
  )
}

export default CalculateCost