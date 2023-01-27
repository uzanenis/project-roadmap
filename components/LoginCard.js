import styles from "./LoginCard.module.scss";
import PrimaryButton from "./Primary-button";
import { useRouter } from "next/router";
import { login } from "../axios";
import { useState } from "react";
import { useForm } from "@mantine/form";
import { TextInput, Checkbox, Group, Box, PasswordInput } from "@mantine/core";

function LoginCard({ ...props }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
      remember: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });
  const router = useRouter();
  const onFinish = (values) => {
    setFormData({
      email: values.email,
      password: values.password,
    });
    console.log(formData);
    login(formData)
      .then((response) => {
        if (response.status === 200) {
          localStorage.setItem("user", JSON.stringify(response.data.user));
          //setUser(response.data.user);
          router.push("/dashboard");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className={styles.loginCard}>
      <Box mx="auto">
        <form onSubmit={form.onSubmit((values) => onFinish(values))}>
          <TextInput
            withAsterisk
            label="Email"
            placeholder="your@email.com"
            className={styles.input}
            {...form.getInputProps("email")}
            autocapitalize="off"
          />
          <PasswordInput
            placeholder="Password"
            label="Password"
            withAsterisk
            className={styles.input}
            {...form.getInputProps("password")}
          />

          <Checkbox
            mt="md"
            label="Remember me"
            color="yellow"
            {...form.getInputProps("remember", { type: "checkbox" })}
          />

          <Group position="right" mt="md">
            <PrimaryButton type="submit">Submit</PrimaryButton>
          </Group>
        </form>
      </Box>
    </div>
  );
}

export default LoginCard;
