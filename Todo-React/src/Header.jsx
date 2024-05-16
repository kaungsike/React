import React from 'react'

export const Header = (props) => {
  return (
    <h1 className="text-teal-800 text-4xl mb-7">{props.text}</h1>
  )
}

export default Header;