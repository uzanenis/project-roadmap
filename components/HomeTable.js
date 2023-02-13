import styles from "./HomeTable.module.scss";
import Welcome from "./Welcome";
import TasksSummary from "./TasksSummary";

const HomeTable = () => {
  return (
    <>
      <div className={styles.container}>
        <Welcome />
        <TasksSummary />
      </div>
    </>
  );
};

export default HomeTable;
