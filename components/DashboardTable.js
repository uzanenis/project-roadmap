import TaskCard from "./TaskCard";
import { useTaskStore } from "../store/store";
import styles from "./DashboardTable.module.scss";

function DashboardTable() {
  const tasks = useTaskStore((state) => state.tasks);
  console.log(tasks);
  return (
    <div className={styles.dashboardContainer}>
      {tasks.map((task) => (
        <TaskCard title={task.title} date={task.date} />
      ))}
    </div>
  );
}

export default DashboardTable;
