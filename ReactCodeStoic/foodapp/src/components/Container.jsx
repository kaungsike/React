import React from 'react'

const Container = ({children}) => {
  return (
    <div className='border w-full grid grid-cols-1
     md:grid-cols-2 xl:grid-col-3 2xl:grid-cols-3'>
        {children}
    </div>
  )
}

export default Container