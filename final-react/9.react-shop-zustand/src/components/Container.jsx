import React from 'react'

const Container = ({children}) => {
  return (
    <section className='w-full xl:w-4/5 mx-auto pt-5 px-5 min-h-screen flex flex-col'>{children}</section>
  )
}

export default Container