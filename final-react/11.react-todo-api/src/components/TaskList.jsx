import React from "react";
import Task from "./Task";

const TaskList = ({tasks,deleteTask,doneTask,deleteTaskLoading}) => {


  return (
    <div className="w-full mt-7">
        <div className="w-full flex items-center justify-between">
        <h1 className="text-lg font-bold">Lists</h1>
        <p>( {tasks.filter(tasks => tasks.completed).length} / {tasks.length} )</p>
        </div>
      <div className="w-full flex flex-col gap-2 mt-5 bg-white p-3 rounded">
        {tasks.map((task) => (
          <Task deleteTaskLoading={deleteTaskLoading} doneTask={doneTask} deleteTask={deleteTask} task={task} key={task.id} />
        ))}
        <p className="w-full text-center hidden first:flex items-center justify-center">There is no taks</p>
      </div>
    </div>
  );
};

export default TaskList;
