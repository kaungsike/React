import React from 'react'

export const EmptyList = () => {
  return (
    <div className="hidden flex-col items-center gap-2 first:flex">
    <img className="w-[250px]" src="./src/undraw_empty_re_opql (1).svg"/>
    <p>There is no list</p>
  </div>
  )
}

export default EmptyList;
