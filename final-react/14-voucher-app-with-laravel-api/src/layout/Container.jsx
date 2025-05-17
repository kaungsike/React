import React from 'react'

const Container = ({children,className}) => {
  return (
    <div className={`mx-auto w-full h-full px-4 sm:px-6 lg:px-8 max-w-screen-xl ${className}`}>
        {children}
    </div>
  )
}

export default Container