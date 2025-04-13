import React from 'react'

const Footer = () => {

    const date = new Date();

  return (
    <footer className='w-full mt-auto flex justify-center items-center bg-gray-800 text-white h-12'>
            <p>Copyright &copy; {date.getFullYear()}</p>
    </footer>
  )
}

export default Footer