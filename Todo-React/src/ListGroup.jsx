import React from "react";
import EmptyList from "./EmptyList";
import List from "./List";

export const ListGroup = () => {
  const tasks = [
    {
      id: 1,
      job: "read js book",
      isDone: true,
    },
    {
      id: 2,
      job: "meet with client",
      isDone: false,
    },
    {
      id: 3,
      job: "prepare for interview",
      isDone: true,
    },
    {
      id: 4,
      job: "read react doc",
      isDone: false,
    },
  ];
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

      {tasks.map((task) => <List job={task.job} isDone={task.isDone}/>)}

      <EmptyList />
    </div>
  );
};

export default ListGroup;
