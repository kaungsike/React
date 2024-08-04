import React from 'react'
import categories from '../data/categoryData'

const Categories = () => {
  return (
    <>
        {categories.map((category) => {
            return (
                <button key={category} className='border border-gray-600 px-6 py-2'>{category}</button>
            )
        })}
    </>
  )
}

export default Categories