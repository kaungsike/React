import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todos,handleDeleteList}) => {
  return (
    <div className='w-[378px] p-[20px] border rounded-2xl flex flex-col gap-1 '>
    {todos.map((todo) => {
      return <TodoItem handleDeleteList={handleDeleteList} todo={todo} key={todo.id} keys={todo.id} />;
    })}
  </div>
  )
}

export default TodoList