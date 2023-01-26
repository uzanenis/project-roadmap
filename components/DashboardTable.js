import TaskCard from "./TaskCard";
import { useTaskStore } from "../store/store";

function DashboardTable() {
  const tasks = useTaskStore((state) => state.tasks);
  console.log(tasks);
  return (
    <div>
      {tasks.map((task) => (
        <TaskCard title={task.title} date={task.date} />
      ))}
    </div>
  );
}

export default DashboardTable;
