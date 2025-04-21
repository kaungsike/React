import React, { useState } from "react";
import TaskContext from "./TaskContext";

const TaskProvider = ({ children }) => {
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

  const doneTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id == id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <TaskContext.Provider value={{ tasks, addNewTask, deleteTask, doneTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
