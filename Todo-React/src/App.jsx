import React from "react";
import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';

import ListCreateForm from "./ListCreateForm";
import Header from "./Header";
import ListStatus from "./ListStatus";
import ListGroup from "./ListGroup";

export const App = () => {
  const [tasks, setTask] = useState([
    // {
    //   id: 1,
    //   job: "read js book",
    //   isDone: true,
    // },
    // {
    //   id: 2,
    //   job: "meet with client",
    //   isDone: false,
    // },
    // {
    //   id: 3,
    //   job: "prepare for interview",
    //   isDone: true,
    // },
    // {
    //   id: 4,
    //   job: "read react doc",
    //   isDone: false,
    // },
  ]);

  const addTask = (job) => {
    const newTask = {
      id: Date.now(),
      job,
      isDone: false,
    };
    setTask([...tasks, newTask]);
  };

  const checkTask = (id) => {
    setTask(
      tasks.map((task) => {
        if (id === task.id) {
          task.isDone = !task.isDone;
        }
        return task;
      })
    );
  };

  const deleteTask = (id) => {
    setTask(tasks.filter((task) => task.id !== id));
  };

  const editTask = (newJob, id) => {
    setTask(
      tasks.map((task) => {
        if (id === task.id) {
          task.job = newJob;
        }
        return task;
      })
    );
  };

  return (
    <section
      id="container"
      className="border bg-teal-200 border-teal-400 w-[500px] mx-auto mt-10 p-10"
    >
      <Header text="Create Your List" />
      <ListCreateForm addTask={addTask} />

      <ListStatus tasks={tasks} />

      <ListGroup
        deleteTask={deleteTask}
        tasks={tasks}
        id={tasks.id}
        checkTask={checkTask}
        editTask={editTask}
      />
    <Toaster />
    </section>
  );
};

export default App;
