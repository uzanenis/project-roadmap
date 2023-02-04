import React, { useState } from "react";
import PrimaryButton from "./Primary-button";
import styles from "./GoalsTable.module.scss";
import { Progress, TextInput, Modal, Select } from "@mantine/core";
import { useGoalStore } from "../store/store";
import { useForm } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
import { IconCircleCheck } from "@tabler/icons-react";

const GoalsTable = () => {
  const primaryColor = "#C4AE78";
  const goals = useGoalStore((state) => state.goals);
  const addGoal = useGoalStore((state) => state.addGoal);

  const [opened, setOpened] = useState(false);
  const [value, setValue] = useState("");

  const form = useForm({
    initialValues: {
      title: "",
      status: "",
      percentage: 0,
    },

    validate: {},
  });

  const handleClick = () => {
    setOpened(true);
  };

  const handleSubmit = () => {
    setOpened(false);
    form.values.status = value;
    addGoal(form.values);
    console.log(form.values);
    showNotification({
      autoClose: 4000,
      title: "Goal Added",
      message: "Your goal has been added to the list",
      color: "green",
      icon: <IconCircleCheck />,
    });
  };

  return (
    <>
      <Modal
        centered
        size="xl"
        opened={opened}
        onClose={() => setOpened(false)}
        title="Add Goal"
      >
        <TextInput
          required
          label="Add Goal"
          placeholder="Let's give it a name"
          onChange={(event) =>
            form.setFieldValue("title", event.currentTarget.value)
          }
        />
        <Select
          label="Goal Status"
          placeholder="Select Status"
          data={[
            { value: "On Track", label: "On Track" },
            { value: "Off Track", label: "Off Track" },
          ]}
          onChange={setValue}
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
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>My Goals</h1>
          <PrimaryButton onClick={handleClick}>+</PrimaryButton>
        </div>
        {goals.map((goal, key) => (
          <div key={key} className={styles.card}>
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
    </>
  );
};

export default GoalsTable;
