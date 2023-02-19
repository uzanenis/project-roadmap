import DashboardLayout from "./layout";
import TimerCircular from "../components/TimerCircular";

const Timer = () => {
  return <DashboardLayout children={<TimerCircular />} />;
};

export default Timer;
