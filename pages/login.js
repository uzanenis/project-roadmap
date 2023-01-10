import LoginCard from "../components/LoginCard";
import styles from "./login.module.scss";

function Login({ ...props }) {
  return (
    <div className={styles.login}>
      <span className={styles.title}>Sign In</span>
      <LoginCard />
    </div>
  );
}

export default Login;
