import TaskCard from "./TaskCard";
import { useTaskStore } from "../store/store";
import styles from "./DashboardTable.module.scss";
import AddTaskButton from "./AddTaskButton";

function DashboardTable() {
  const tasks = useTaskStore((state) => state.tasks);
  console.log(tasks);
  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.tasks}>
        {tasks.map((task) => (
          <TaskCard title={task.title} date={task.date} />
        ))}
        <AddTaskButton>Add Task</AddTaskButton>
      </div>
      <div className={styles.tasks}>
        {tasks.map((task) => (
          <TaskCard title={task.title} date={task.date} />
        ))}
      </div>
      <div className={styles.tasks}>
        {tasks.map((task) => (
          <TaskCard title={task.title} date={task.date} />
        ))}
      </div>
    </div>
  );
}

export default DashboardTable;
