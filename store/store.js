import { create } from "zustand";

export const useTaskStore = create((set) => ({
  tasks: [
    { title: "Task 1", date: "2021-01-01" },
    { title: "Task 2", date: "2021-01-01" },
    { title: "Task 3", date: "2021-01-01" },
  ],
  tasksCount: 0,
  addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
  removeAllBears: () => set({ tasks: [] }),
}));
