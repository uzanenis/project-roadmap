import styles from "./TaskCard.module.scss";
import cn from "classnames";

function TaskCard({ title, date }) {
  return (
    <div className={styles.taskCard}>
      <div className={styles.title}>
        <span>Icon</span>
        {title}
      </div>
      <div>{date}</div>
    </div>
  );
}

export default TaskCard;
