import styles from "./Navigation.module.scss";
import Navbutton from "./Navbutton";
import Link from "next/link";
import { useRouter } from "next/router";
import { TextInput } from "@mantine/core";
import {
  IconSearch,
  IconHome,
  IconCheckupList,
  IconListDetails,
  IconLayoutDashboard,
} from "@tabler/icons-react";
import { useTaskStore } from "../store/store";

function Navigation() {
  const router = useRouter();
  const tasks = useTaskStore((state) => state.tasks);

  return (
    <nav className={styles.navigation}>
      <TextInput
        placeholder="Search"
        size="xs"
        icon={<IconSearch size={12} stroke={1.5} />}
        mb="sm"
      />
      <Link href="/home">
        <Navbutton
          className={router.pathname === "/home" ? styles.activePage : ""}
        >
          <IconHome />
          <span>Home</span>
        </Navbutton>
      </Link>
      <Link href="/dashboard">
        <Navbutton
          className={router.pathname === "/dashboard" ? styles.activePage : ""}
          notifyCount={tasks.length}
        >
          <IconLayoutDashboard />
          <span>Dashboard</span>
        </Navbutton>
      </Link>
      <Link href="/goals">
        <Navbutton
          className={router.pathname === "/goals" ? styles.activePage : ""}
        >
          <IconCheckupList />
          <span>Goals</span>
        </Navbutton>
      </Link>
      <Link href="/schedule">
        <Navbutton
          className={router.pathname === "/schedule" ? styles.activePage : ""}
        >
          <IconListDetails />
          <span>Schedule</span>
        </Navbutton>
      </Link>
      <Navbutton>
        <IconSearch />
        <span>Search</span>
      </Navbutton>
    </nav>
  );
}

export default Navigation;
