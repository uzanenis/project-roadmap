import styles from "./LoginCard.module.scss";
import { Checkbox, Form, Input } from "antd";
import PrimaryButton from "./Primary-button";

function LoginCard({ children, className, ...props }) {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className={styles.loginCard}>
      <Form
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input placeholder="Username" />
        </Form.Item>

        <Form.Item
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked">
          <Checkbox className={styles.checkbox}>Remember me</Checkbox>
        </Form.Item>

        <Form.Item>
          <PrimaryButton htmlType="submit">Sign In</PrimaryButton>
        </Form.Item>
      </Form>
    </div>
  );
}

export default LoginCard;
