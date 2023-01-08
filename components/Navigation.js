import styles from "./Navigation.module.scss";
import cn from "classnames";
import Navbutton from "./Navbutton";
import {
  CalendarOutlined,
  HomeOutlined,
  CheckSquareOutlined,
  ScheduleOutlined,
  SearchOutlined,
} from "@ant-design/icons";

function Navigation() {
  return (
    <nav className={styles.navigation}>
      <Navbutton>
        <HomeOutlined />
        <span>Home</span>
      </Navbutton>
      <Navbutton className={styles.activePage}>
        <CalendarOutlined />
        <span>Calendar</span>
      </Navbutton>
      <Navbutton notifyCount={5}>
        <CheckSquareOutlined />
        <span>Todos</span>
      </Navbutton>
      <Navbutton>
        <ScheduleOutlined />
        <span>Schedule</span>
      </Navbutton>
      <Navbutton>
        <SearchOutlined />
        <span>Search</span>
      </Navbutton>
    </nav>
  );
}

export default Navigation;
