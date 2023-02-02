import DashboardLayout from "./layout";
import GoalsTable from "../components/GoalsTable";

const Goals = () => {
  return <DashboardLayout children={<GoalsTable />} />;
};

export default Goals;
