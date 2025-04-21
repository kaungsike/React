import { create } from "zustand";

const useTaskStore = create((set) => ({
  tasks: [
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
  ],
  addTask: (newTask) =>
    set((state) => ({
      tasks: [...state.tasks, newTask],
    })),

  removeTask: (id) =>
    set((state) => ({ tasks: state.tasks.filter((task) => task.id !== id) })),

  doneTask: (id) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      ),
    })),
}));

export default useTaskStore;
