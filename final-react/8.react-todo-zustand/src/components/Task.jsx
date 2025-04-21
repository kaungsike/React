import React, { useContext } from 'react'
import TaskContext from '../context/TaskContext'
import useTaskStore from '../store/useTaskStore'

const Task = ({task : {id, title, completed}}) => {

  // const {deleteTask,doneTask} = useContext(TaskContext);\

  const {removeTask,doneTask} = useTaskStore();

  const handleDeleteBtn = () => {
    // deleteTask(id)
    removeTask(id)
  }

  const handleCheckBox = () => {
    // doneTask(id)
    doneTask(id)
  }

  return (
    <div className='border border-gray-400 px-3 rounded w-full flex items-center justify-between py-2'>
        <div className='flex  items-center gap-2'>
        <input type="checkbox" checked={completed} onChange={handleCheckBox} />
        <p>{title}</p>
        </div>
        <div className='flex items-center gap-2'>
          <button onClick={handleDeleteBtn} className='border border-gray-400 bg-white px-3 py-1 text-red-500 rounded'>Delete</button>
        </div>
    </div>
  )
}

export default Task