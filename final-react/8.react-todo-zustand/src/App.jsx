import React from "react";
import Heading from "./components/Heading";
import CreateTask from "./components/CreateTask";
import TaskList from "./components/TaskList";
import TaskProvider from "./context/TaskProvider";
import Counter from "./components/Counter";

const App = () => {
  return (
    // <TaskProvider>
    //   <div className="flex flex-col items-center justify-center p-5 w-[430px] bg-gray-200 mx-auto mt-10 rounded-lg shadow-lg">
    //     <Heading />
    //     <CreateTask />
    //     <TaskList />
    //   </div>
    // </TaskProvider>
    // <Counter/>
    <div className="flex flex-col items-center justify-center p-5 w-[430px] bg-gray-200 mx-auto mt-10 rounded-lg shadow-lg">
      <Heading/>
      <CreateTask/>
      <TaskList/>
    </div>
  );
};

export default App;
