import DashboardLayout from "./layout";
import HomeTable from "../components/HomeTable";

const Home = () => {
  return <DashboardLayout children={<HomeTable />} />;
};

export default Home;
