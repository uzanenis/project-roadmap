import LoginCard from "../components/LoginCard";
import styles from "../styles/login.module.scss";
import Head from "next/head";

function Login({ ...props }) {
  return (
    <>
      <Head>
        <title>Sign In</title>
      </Head>
      <div className={styles.login}>
        <span className={styles.title}>Sign In</span>
        <LoginCard />
      </div>
    </>
  );
}

export default Login;
