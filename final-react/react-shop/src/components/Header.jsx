import React from 'react'

const Header = () => {
  return (
    <header className='w-full p-5 flex justify-between items-center '>
        <p className='text-3xl font-bold'>React - Shop</p>
        <button className='border rounded active:scale-95 relative duration-150 border-black px-6 py-2'>My Cart
            <span className='bg-red-500 text-white absolute -top-3 -right-3 rounded-full flex justify-center items-center w-6 h-6 -'>1</span>
        </button>
    </header>
  )
}

export default Header