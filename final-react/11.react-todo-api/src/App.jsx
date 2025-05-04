import React, { useEffect, useState } from "react";
import Heading from "./components/Heading";
import CreateTask from "./components/CreateTask";
import TaskList from "./components/TaskList";
import Loading from "./components/Loading";
import RotatingText from './RotatingText/RotatingText';
import Squares from './Squares/Squares';
import { div } from "framer-motion/client";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const [isLoading, setIsLoading] = useState();
  const [addTaskLoading, setAddTaskLoading] = useState(false);
  const [deleteTaskLoading, setDeleteTaskLoading] = useState(false);

  const addNewTask = async (newTask) => {
    console.log(newTask);

    setAddTaskLoading(true);

    const response = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    });

    const data = await response.json();

    setTasks([...tasks, data]);
    setAddTaskLoading(false);
  };

  const deleteTask = async (id) => {
    setDeleteTaskLoading(true);

    const response = await fetch("http://localhost:5000/tasks/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    setDeleteTaskLoading(false);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const doneTask = async (id, current) => {
    const response = await fetch("http://localhost:5000/tasks/" + id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ completed: !current }),
    });
    const data = await response.json();
    console.log(data);

    setTasks(tasks.map((task) => (task.id == id ? data : task)));
  };

  const fetchTasks = async () => {
    setIsLoading(true);
    const response = await fetch("http://localhost:5000/tasks");
    const data = await response.json();

    setTasks(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <>
            <Squares 
      speed={0.5} 
      squareSize={40}
      direction='diagonal' // up, down, left, right, diagonal
      borderColor='#999'
      hoverFillColor = "#222"
      bgColor='#999'
      />
             <div className="flex flex-col items-center justify-center p-5 w-[430px] bg-gray-200 mx-auto mt-10 rounded-lg shadow-lg">
      <Heading />
      <CreateTask addTaskLoading={addTaskLoading} addNewTask={addNewTask} />
      <TaskList
        deleteTaskLoading={deleteTaskLoading}
        doneTask={doneTask}
        deleteTask={deleteTask}
        tasks={tasks}
      />
      {isLoading && <Loading />}
      <RotatingText
        texts={["React", "Bits", "Is", "Cool!"]}
        mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
        staggerFrom={"last"}
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "-120%" }}
        staggerDuration={0.025}
        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
        transition={{ type: "spring", damping: 30, stiffness: 400 }}
        rotationInterval={2000}
      />
      </div>
    </>

  );
};

export default App;
