import styles from "./Welcome.module.scss";
import { Divider } from "@mantine/core";

const Welcome = () => {
  const date = new Date();
  const dateString = ` ${date.toLocaleString("en-us", {
    weekday: "long",
  })}, ${date.toLocaleString("en-us", { month: "long" })} ${date.getDate()}`;
  return (
    <div className={styles.homeContainer}>
      <div className={styles.homeTitle}>
        <span>{dateString}</span>
        <h1>Good Afternoon, Enis</h1>
      </div>
      <div className={styles.homeSummary}>
        <span style={{ margin: "0 16px" }}>5 Task Completed</span>
        <Divider orientation="vertical" />
        <span style={{ margin: "0 16px" }}>3 Task In Progress</span>
      </div>
    </div>
  );
};

export default Welcome;
