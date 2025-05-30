import React, { useContext, useState } from 'react'
import TaskContext from '../context/TaskContext';

const CreateTask = ({}) => {

    const {addNewTask} = useContext(TaskContext);

    const [task, setTask] = useState('');

    const handleOnChange = (e) => {
        setTask(e.target.value);
    }

    const hamdleAddTaskBtn = () => {
        console.log(task);
        const newTask = {

            id : Date.now(),
            title : task,
            completed : false
        }
        addNewTask(newTask);
        setTask('');
    }

  return (
    <div className='flex mt-5 items-center justify-between w-full'>
        <input onChange={handleOnChange} value={task} className='flex-grow bg-white outline-none h-[42px] px-5' type="text" />
        <button onClick={hamdleAddTaskBtn} className='border border-gray-400 bg-white px-3 h-[42px] rounded'>Add</button>
    </div>
  )
}

export default CreateTask