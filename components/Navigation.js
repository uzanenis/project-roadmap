import styles from "./Navigation.module.scss";
import Navbutton from "./Navbutton";
import Link from "next/link";
import { useRouter } from "next/router";

import {
  CalendarOutlined,
  HomeOutlined,
  CheckSquareOutlined,
  ScheduleOutlined,
  SearchOutlined,
} from "@ant-design/icons";

function Navigation() {
  const router = useRouter();
  return (
    <nav className={styles.navigation}>
      <Link href="/">
        <Navbutton className={router.pathname === "/" ? styles.activePage : ""}>
          <HomeOutlined />
          <span>Home</span>
        </Navbutton>
      </Link>
      <Link href="/calendar">
        <Navbutton
          className={router.pathname === "/dashboard" ? styles.activePage : ""}
        >
          <CalendarOutlined />
          <span>Calendar</span>
        </Navbutton>
      </Link>
      <Link href="/todos">
        <Navbutton
          className={router.pathname === "/todos" ? styles.activePage : ""}
          notifyCount={5}
        >
          <CheckSquareOutlined />
          <span>Todos</span>
        </Navbutton>
      </Link>
      <Link href="/schedule">
        <Navbutton
          className={router.pathname === "/schedule" ? styles.activePage : ""}
        >
          <ScheduleOutlined />
          <span>Schedule</span>
        </Navbutton>
      </Link>
      <Navbutton>
        <SearchOutlined />
        <span>Search</span>
      </Navbutton>
    </nav>
  );
}

export default Navigation;
