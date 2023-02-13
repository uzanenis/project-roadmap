import Navigation from "../components/Navigation";
import styles from "../styles/layout.module.scss";

export default function DashboardLayout({ children }) {
  return (
    <section className={styles.layout}>
      <Navigation />
      {children}
    </section>
  );
}
