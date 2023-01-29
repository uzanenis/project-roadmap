import { useEffect, useState } from "react";
import { useTaskStore } from "../store/store";
import styles from "./DashboardTable.module.scss";
import TaskCard from "./TaskCard";
import AddTaskButton from "./AddTaskButton";
import PrimaryButton from "./Primary-button";
import { useForm } from "@mantine/form";
import { Modal, TextInput } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { showNotification } from "@mantine/notifications";
import { IconCircleCheck } from "@tabler/icons-react";

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

  const handleSubmit = () => {
    setOpened(false);
    addTask(form.values);
    showNotification({
      autoClose: 5000,
      title: "Task Added",
      message: "Your task has been added to the list",
      color: "green",
      icon: <IconCircleCheck />,
    });
  };

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
          onClick={() => {
            handleSubmit();
          }}
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
