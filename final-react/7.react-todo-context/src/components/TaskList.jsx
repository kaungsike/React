import React, { useContext } from "react";
import Task from "./Task";
import TaskContext from "../context/TaskContext";

const TaskList = ({}) => {

  const {tasks} = useContext(TaskContext);

  console.log(tasks);


  return (
    <div className="w-full mt-7">
        <div className="w-full flex items-center justify-between">
        <h1 className="text-lg font-bold">Lists</h1>
        <p>( {tasks.filter(tasks => tasks.completed).length} / {tasks.length} )</p>
        </div>
      <div className="w-full flex flex-col gap-2 mt-5 bg-white p-3 rounded">
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
        <p className="w-full text-center hidden first:flex items-center justify-center">There is no taks</p>
      </div>
    </div>
  );
};

export default TaskList;
