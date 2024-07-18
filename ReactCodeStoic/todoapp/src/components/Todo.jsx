import React, { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";

const Todo = () => {
  const [todo, setTodo] = useState("");

  const [todos, setTodos] = useState([
    {
      id: 1,
      job: "Testing",
      isDone : false
    },
  ]);

  const handleDeleteList = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const checkboxChange = (id) => {
    setTodos(todos.map((todo) => {
      if(todo.id===id){
        todo.isDone= !todo.isDone
      }
      return todo;
    }))
  }

  return (
    <div className="flex items-center flex-col gap-10">
      <div className="border flex justify-center items-center mt-6 rounded-2xl   w-[380px] mx-auto min-h-[80px]">
        <Form todo={todo} setTodo={setTodo} todos={todos} setTodos={setTodos} />
      </div>
      <TodoList checkboxChange={checkboxChange} setTodos={setTodos} handleDeleteList={handleDeleteList} todos={todos} />
    </div>
  );
};

export default Todo;
