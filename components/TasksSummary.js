import styles from "./TasksSummary.module.scss";
import { Tabs } from "@mantine/core";
import { useTaskStore } from "../store/store";

const TasksSummary = () => {
  const tasks = useTaskStore((state) => state.tasks);

  return (
    <>
      <div>
        <Tabs variant="outline" radius="md" defaultValue="Upcoming">
          <Tabs.List>
            <Tabs.Tab value="Upcoming">Upcoming</Tabs.Tab>
            <Tabs.Tab value="Overdue">Overdue</Tabs.Tab>
            <Tabs.Tab value="Completed">Completed</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="Upcoming">
            <div className={styles.cardContainer}>
              {tasks.map((task, key) => (
                <div key={key} className={styles.cardItem}>
                  {task.title}
                </div>
              ))}
            </div>
          </Tabs.Panel>
          <Tabs.Panel value="Overdue">Overdue content</Tabs.Panel>
          <Tabs.Panel value="Completed">Completed content</Tabs.Panel>
        </Tabs>
      </div>
    </>
  );
};

export default TasksSummary;
