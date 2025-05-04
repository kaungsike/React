import React from "react";
import Task from "./Task";

const TaskList = ({ data, deleteTask, doneTask, isLoading }) => {
  return (
    <>
      {isLoading ? (
        "Loading"
      ) : (
        <div className="w-full mt-7">
          <div className="w-full flex items-center justify-between">
            <h1 className="text-lg font-bold">Lists</h1>
            <p>
              ( {data.filter((tasks) => tasks.completed).length} /{" "}
              {data.length} )
            </p>
          </div>
          <div className="w-full flex flex-col gap-2 mt-5 bg-white p-3 rounded">
            {data.map((task) => (
              <Task
                doneTask={doneTask}
                deleteTask={deleteTask}
                task={task}
                key={task.id}
              />
            ))}
            <p className="w-full text-center hidden first:flex items-center justify-center">
              There is no taks
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default TaskList;
