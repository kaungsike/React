import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, handleDeleteList, setTodos, checkboxChange }) => {
  return (
    <div className="w-[378px] p-[20px] border rounded-2xl flex flex-col gap-1 ">
      {todos.map((todo) => {
        return (
          <TodoItem
            setTodos={setTodos}
            handleDeleteList={handleDeleteList}
            todo={todo}
            todos={todos}
            key={todo.id}
            keys={todo.id}
            checkboxChange={checkboxChange}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
