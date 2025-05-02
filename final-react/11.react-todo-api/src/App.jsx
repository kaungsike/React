import React, { useEffect, useState } from "react";
import Heading from "./components/Heading";
import CreateTask from "./components/CreateTask";
import TaskList from "./components/TaskList";
import Loading from "./components/Loading";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const [isLoading,setIsLoading] = useState()
  const [addTaskLoading,setAddTaskLoading] = useState(false)
  const [deleteTaskLoading,setDeleteTaskLoading] = useState(false)

  const addNewTask = async (newTask) => {
    console.log(newTask);

    setAddTaskLoading(true)

    const response = await fetch("http://localhost:5000/tasks"
      ,{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTask),
      }
    );

    const data = await response.json();

    setTasks([...tasks, data]);
    setAddTaskLoading(false)

  };

  const deleteTask = async (id) => {
    setDeleteTaskLoading(true)

    const response = await fetch('http://localhost:5000/tasks/'+id,{
      method : 'DELETE',
      headers : {
        "Content-Type" : "application/json"
      }
    })

    setDeleteTaskLoading(false)
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const doneTask = async (id,current) => {

    const response = await fetch('http://localhost:5000/tasks/'+id,{
      method : 'PATCH',
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify({completed : !current})
    })
    const data = await response.json();
    console.log(data);

    setTasks(tasks.map((task) => task.id == id ? data : task))
  } 

  const fetchTasks = async () => {
    setIsLoading(true)
    const response = await fetch("http://localhost:5000/tasks") ;
    const data = await response.json();

    setTasks(data);
    setIsLoading(false)
  }

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-5 w-[430px] bg-gray-200 mx-auto mt-10 rounded-lg shadow-lg">
      <Heading />
      <CreateTask addTaskLoading={addTaskLoading} addNewTask={addNewTask} />
      <TaskList deleteTaskLoading={deleteTaskLoading} doneTask={doneTask} deleteTask={deleteTask} tasks={tasks} />
      {isLoading && <Loading/> }
    </div>
  );
};

export default App;
