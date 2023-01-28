import DashboardTable from "../components/DashboardTable";
import DashboardLayout from "./layout";

export default function Dashboard() {
  return <DashboardLayout children={<DashboardTable />} />;
}
