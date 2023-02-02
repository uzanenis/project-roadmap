import PrimaryButton from "./Primary-button";
import styles from "./GoalsTable.module.scss";
import { Progress } from "@mantine/core";
import { useGoalStore } from "../store/store";

const GoalsTable = () => {
  const primaryColor = "#C4AE78";
  const goals = useGoalStore((state) => state.goals);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>My Goals</h1>
        <PrimaryButton>+</PrimaryButton>
      </div>
      {goals.map((goal) => (
        <div className={styles.card}>
          <div className={styles.cardTitle}>
            <div>{goal.title}</div>
            <div style={{ display: "flex" }}>
              <div style={{ marginRight: 12 }}>{goal.status}</div>
              <span>%{goal.percentage}</span>
            </div>
          </div>

          <span>
            <Progress
              value={goal.percentage}
              label={"%" + goal.percentage}
              color={primaryColor}
              className={styles.progress}
            />
          </span>
          <div>Sub Goals</div>
        </div>
      ))}
    </div>
  );
};

export default GoalsTable;
