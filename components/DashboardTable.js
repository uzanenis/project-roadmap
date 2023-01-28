import { useEffect, useState } from "react";
import { useTaskStore } from "../store/store";
import styles from "./DashboardTable.module.scss";
import TaskCard from "./TaskCard";
import AddTaskButton from "./AddTaskButton";
import { useForm } from "@mantine/form";
import { Modal, TextInput } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import PrimaryButton from "./Primary-button";

function DashboardTable() {
  const tasks = useTaskStore((state) => state.tasks);
  const addTask = useTaskStore((state) => state.addTask);

  const [opened, setOpened] = useState(false);
  const [date, setDate] = useState(new Date());

  const form = useForm({
    initialValues: {
      title: "",
      date: "",
    },

    validate: {},
  });

  useEffect(() => {
    form.setFieldValue("date", date.toLocaleDateString());
  }, [date]);

  return (
    <>
      <Modal
        centered
        size="md"
        opened={opened}
        onClose={() => setOpened(false)}
        title="Let's Add a Task!"
      >
        <TextInput
          required
          label="Add Task"
          placeholder="Let's give it a name"
          onChange={(event) =>
            form.setFieldValue("title", event.currentTarget.value)
          }
        />
        <DatePicker
          label="Due Date"
          placeholder="Pick the due date"
          onChange={setDate}
          style={{ marginTop: 24 }}
        />
        <PrimaryButton
          style={{ marginTop: 24 }}
          onClick={() => addTask(form.values)}
        >
          {" "}
          Add Task{" "}
        </PrimaryButton>
      </Modal>
      <div className={styles.dashboardContainer}>
        <div className={styles.tasks}>
          {tasks.map((task, key) => (
            <TaskCard title={task.title} date={task.date} key={key} />
          ))}
          <AddTaskButton setModal={setOpened}>Add Task</AddTaskButton>
        </div>
        <div className={styles.tasks}>
          {tasks.map((task, key) => (
            <TaskCard title={task.title} date={task.date} key={key} />
          ))}
        </div>
        <div className={styles.tasks}>
          {tasks.map((task, key) => (
            <TaskCard title={task.title} date={task.date} key={key} />
          ))}
        </div>
      </div>
    </>
  );
}

export default DashboardTable;
