import styles from "./LoginCard.module.scss";
import { Checkbox, Form, Input } from "antd";
import PrimaryButton from "./Primary-button";
import { useRouter } from "next/router";
import { login } from "../axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authSlice } from "../redux/userSlice";

function LoginCard({ ...props }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();
  const { loading, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const onFinish = () => {
    console.log(formData);
    login(formData)
      .then((response) => {
        if (response.status === 200) {
          localStorage.setItem("user", JSON.stringify(response.data.user));
          //setUser(response.data.user);
          dispatch(authSlice());
          router.push("/");
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
      <Form
        name="normal_login"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input
            placeholder="Username"
            onChange={(e) => {
              setFormData({
                ...formData,
                email: e.target.value,
              });
            }}
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password
            placeholder="Password"
            onChange={(e) => {
              setFormData({
                ...formData,
                password: e.target.value,
              });
            }}
          />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked">
          <Checkbox className={styles.checkbox}>Remember me</Checkbox>
        </Form.Item>

        <Form.Item>
          <PrimaryButton type="submit">Sign In</PrimaryButton>
        </Form.Item>
      </Form>
    </div>
  );
}

export default LoginCard;
