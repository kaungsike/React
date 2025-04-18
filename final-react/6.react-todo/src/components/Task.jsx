import React from 'react'

const Task = ({task : {id, title, completed}, deleteTask}) => {

  const handleDeleteBtn = () => {
    deleteTask(id)
  }

  return (
    <div className='border border-gray-400 px-3 rounded w-full flex items-center justify-between py-2'>
        <p>{title}</p>
        <div className='flex items-center gap-2'>
          <button onClick={handleDeleteBtn} className='border border-gray-400 bg-white px-3 py-1 text-red-500 rounded'>Delete</button>
        </div>
    </div>
  )
}

export default Task