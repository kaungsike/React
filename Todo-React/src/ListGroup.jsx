import React from "react";
import EmptyList from "./EmptyList";
import List from "./List";
import toast, { Toaster } from 'react-hot-toast';


export const ListGroup = (props) => {
  return (
    <div id="listGroup" className="w-full h-full">
      {/* {tests.map((test) => (
        <div key={test.id} className={`border border-teal-500 p-2 mb-3 ${test.isDone && 'opacity-40 scale-95' }`}>
          <p>
            {test.id} | {test.isDone ? "Done" : "Undone"}
          </p>
          <p>{test.job}</p>
        </div>
      ))} */}

      {props.tasks.map((task) => (
        <List
          job={task.job}
          key={task.id}
          id={task.id}
          isDone={task.isDone}
          checkTask={props.checkTask}
          deleteTask={props.deleteTask}
          editTask={props.editTask}
        />
      ))}

      <EmptyList />
    </div>
  );
};

export default ListGroup;
