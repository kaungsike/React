import React, { useState } from 'react'

const Form = ({todo,todos,setTodo,setTodos}) => {


  return (
    <form className='flex items-center gap-2'
    action=""
    onSubmit={(e) => {
      e.preventDefault();
      const newList = {
        id : Date.now(),
        job : todo,
        isDone : false,
      }
      setTodos([...todos, newList]);
      setTodo("");
    }}
  >
    <input required
      type="text"
      onChange={(e) => setTodo(e.target.value)}
      value={todo}
      className="rounded-lg outline-none h-[40px] w-[230px] px-[10px]" placeholder='Enter your list...'
    />

    <button className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
      Primary
    </button>
  </form>
  )
}

export default Form