import React, { Children } from 'react'

const Container = ({children,className}) => {
  return (
    <div className={`w-full md:w-[720px] lg:w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
        {children}
    </div>
  )
}

export default Container