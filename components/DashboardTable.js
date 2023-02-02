import { useEffect, useState } from "react";
import { useTaskStore } from "../store/store";
import styles from "./DashboardTable.module.scss";
import TaskCard from "./TaskCard";
import AddTaskButton from "./AddTaskButton";
import PrimaryButton from "./Primary-button";
import { useForm } from "@mantine/form";
import { Modal, TextInput, Drawer } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { showNotification } from "@mantine/notifications";
import { IconCircleCheck } from "@tabler/icons-react";
import React from "react";

function DashboardTable() {
  const tasks = useTaskStore((state) => state.tasks);
  const addTask = useTaskStore((state) => state.addTask);

  const [modalOpened, setModalOpened] = useState(false);
  const [drawerOpened, setDrawerOpened] = useState(false);

  const [date, setDate] = useState(new Date());
  const [selectedTask, setSelectedTask] = useState({});

  const form = useForm({
    initialValues: {
      title: "",
      date: "",
    },

    validate: {},
  });

  const handleSubmit = () => {
    setModalOpened(false);
    addTask(form.values);
    showNotification({
      autoClose: 4000,
      title: "Task Added",
      message: "Your task has been added to the list",
      color: "green",
      icon: <IconCircleCheck />,
    });
  };
  const handleTaskClick = (task) => {
    setDrawerOpened(true);
    setSelectedTask(task);
  };

  useEffect(() => {
    form.setFieldValue("date", date.toLocaleDateString());
  }, [date]);

  return (
    <>
      <Modal
        centered
        size="md"
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
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
          Add Task
        </PrimaryButton>
      </Modal>

      <div className={styles.dashboardContainer}>
        <div className={styles.tasks}>
          {tasks.map((task, key) => (
            <React.Fragment key={key}>
              <TaskCard
                title={task.title}
                date={task.date}
                onClick={() => handleTaskClick(task)}
              />
              <Drawer
                opened={drawerOpened}
                onClose={() => setDrawerOpened(false)}
                title={selectedTask.title}
                padding="xl"
                size="xl"
                position="right"
                overlayOpacity={0.2}
                overlayBlur={0}
              >
                {selectedTask.title}
                {selectedTask.date}
              </Drawer>
            </React.Fragment>
          ))}
          <AddTaskButton setModal={setModalOpened}>Add Task</AddTaskButton>
        </div>
        <div className={styles.tasks}>
          {/*tasks.map((task, key) => (
            <>
              <TaskCard
                title={task.title}
                date={task.date}
                key={task.title}
                onClick={() => setDrawerOpened(true)}
              />

              <Drawer
                key={key}
                opened={drawerOpened}
                onClose={() => setDrawerOpened(false)}
                title={task.title}
                padding="xl"
                size="xl"
              ></Drawer>
            </>
          ))*/}
        </div>
        <div className={styles.tasks}>
          {/*tasks.map((task, key) => (
            <>
              <TaskCard
                title={task.title}
                date={task.date}
                key={task.title}
                onClick={() => setDrawerOpened(true)}
              />

              <Drawer
                key={key}
                opened={drawerOpened}
                onClose={() => setDrawerOpened(false)}
                title={task.title}
                padding="xl"
                size="xl"
              ></Drawer>
            </>
          ))*/}
        </div>
      </div>
    </>
  );
}

export default DashboardTable;
