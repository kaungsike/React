import React from 'react'

const FoodItem = ({foodData}) => {
  return (
    <div className='border w-[312px] p-2 mb-3 rounded-2xl overflow-hidden flex flex-col items-center'>
        <img className='rounded-xl mb-2
        ' src={foodData.image} alt="" />
        <h1 className='text-xl font-bold line-clamp-1 mb-2'>{foodData.title}</h1>
        <button className='border rounded-lg  border-black px-4 py-1 active:scale-95 duration-200'>View Recipe</button>
    </div>
  )
}

export default FoodItem