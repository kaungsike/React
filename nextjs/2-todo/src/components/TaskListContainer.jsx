import React from 'react';
import TaskList from './TaskList';

const fetchTasks = async () => {
  const res = await fetch("http://localhost:3001/tasks",{
    next : {
        tags: ["tasks"],
    }
  });

  if (!res.ok) {
    throw new Error("Failed to fetch tasks");
  }

  return await res.json();
};

const TaskListContainer = async () => {
  const tasks = await fetchTasks();

  return (
    <div className="grid w-[310px] gap-4 mt-6 max-w-2xl mx-auto">
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <TaskList key={task.id} task={task} />
        ))
      ) : (
        <p className="text-center text-gray-500">No tasks found.</p>
      )}
    </div>
  );
};

export default TaskListContainer;
