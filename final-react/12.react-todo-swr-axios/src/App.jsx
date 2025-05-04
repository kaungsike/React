import React, { useState } from "react";
import Heading from "./components/Heading";
import CreateTask from "./components/CreateTask";
import TaskList from "./components/TaskList";
import useSWR, { useSWRConfig } from "swr";

const App = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  console.log(import.meta.env.VITE_BASE_URL);

  // const [tasks, setTasks] = useState([]);

  const { data, error, isLoading } = useSWR(
    `${import.meta.env.VITE_BASE_URL}/tasks`,
    fetcher
  );

  const {mutate} = useSWRConfig();

  const addNewTask = async (newTask) => {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    });

    const data = await response.json();

    mutate(`${import.meta.env.VITE_BASE_URL}/tasks`);
  };

  const deleteTask = async (id) => {

    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/tasks/${id}`, {
      method: "DELETE",
    });

    mutate(`${import.meta.env.VITE_BASE_URL}/tasks`);
  };

  const doneTask = async (id,current) => {

    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/tasks/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ completed:!current  }),
    });
    const data = await response.json();

    mutate(`${import.meta.env.VITE_BASE_URL}/tasks`);

  };

  return (
    <div className="flex flex-col items-center justify-center p-5 w-[430px] bg-gray-200 mx-auto mt-10 rounded-lg shadow-lg">
      <Heading />
      <CreateTask addNewTask={addNewTask} />
      <TaskList
        isLoading={isLoading}
        doneTask={doneTask}
        deleteTask={deleteTask}
        data={data}
      />
    </div>
  );
};

export default App;
