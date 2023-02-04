import { create } from "zustand";

export const useTaskStore = create((set) => ({
  tasks: [
    { title: "Task 1", date: "2021-01-01" },
    { title: "Task 2", date: "2021-01-01" },
    { title: "Task 3", date: "2021-01-01" },
  ],
  tasksCount: 0,
  addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
  removeAllTask: () => set({ tasks: [] }),
}));

export const useGoalStore = create((set) => ({
  goals: [
    {
      title: "Goal 1",
      status: "On Track",
      percentage: 75,
      subGoals: [
        { title: "Sub Goal 1", status: "On Track", percentage: 75 },
        {
          title: "Sub Goal 2",
          status: "On Track",
          percentage: 75,
        },
      ],
    },
    {
      title: "Goal 2",
      status: "On Track",
      percentage: 60,
      subGoals: [
        { title: "Sub Goal 1", status: "On Track", percentage: 75 },
        {
          title: "Sub Goal 2",
          status: "On Track",
          percentage: 75,
        },
      ],
    },
  ],
  addGoal: (goal) =>
    set((state) => ({
      goals: [...state.goals, goal],
    })),
  removeAllGoals: () => set({ goals: [] }),
}));
