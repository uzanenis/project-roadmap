import styles from "./TaskCard.module.scss";

function TaskCard({ title, date }) {
  return (
    <div className={styles.taskCard}>
      <div className={styles.title}>
        <span>Icon</span>
        1️⃣ First: Get started using My Tasks
      </div>
      <div>Feb 1</div>
    </div>
  );
}

export default TaskCard;
