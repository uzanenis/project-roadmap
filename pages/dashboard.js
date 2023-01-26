import Navigation from "../components/Navigation";
import DashboardTable from "../components/DashboardTable";
import styles from "./dashboard.module.scss";

export default function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <Navigation />
      <DashboardTable />
    </div>
  );
}
