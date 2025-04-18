import React, { useState } from "react";
import Heading from "./components/Heading";
import CreateTask from "./components/CreateTask";
import TaskList from "./components/TaskList";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Buy groceries",
      completed: false,
    },
    {
      id: 2,
      title: "Finish React project",
      completed: true,
    },
    {
      id: 3,
      title: "Read 10 pages of a book",
      completed: false,
    },
  ]);

  const addNewTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="flex flex-col items-center justify-center p-5 w-[430px] bg-gray-200 mx-auto mt-10 rounded-lg shadow-lg">
      <Heading />
      <CreateTask addNewTask={addNewTask} />
      <TaskList deleteTask={deleteTask} tasks={tasks} />
    </div>
  );
};

export default App;
