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

function Navigation() {
  const router = useRouter();
  return (
    <nav className={styles.navigation}>
      <TextInput
        placeholder="Search"
        size="xs"
        icon={<IconSearch size={12} stroke={1.5} />}
        mb="sm"
      />
      <Link href="/">
        <Navbutton className={router.pathname === "/" ? styles.activePage : ""}>
          <IconHome />
          <span>Home</span>
        </Navbutton>
      </Link>
      <Link href="/dashboard">
        <Navbutton
          className={router.pathname === "/dashboard" ? styles.activePage : ""}
        >
          <IconLayoutDashboard />
          <span>Dashboard</span>
        </Navbutton>
      </Link>
      <Link href="/todos">
        <Navbutton
          className={router.pathname === "/todos" ? styles.activePage : ""}
          notifyCount={5}
        >
          <IconCheckupList />
          <span>Todos</span>
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
