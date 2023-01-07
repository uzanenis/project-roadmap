import styles from "./Navigation.module.scss";
import cn from "classnames";
import NavButton from "./Nav-button";

function Navigation() {
  return (
    <nav>
      <NavButton>Home</NavButton>
      <NavButton>Calendar</NavButton>
      <NavButton>Todos</NavButton>
      <NavButton>Schedule</NavButton>
      <NavButton>Search</NavButton>
    </nav>
  );
}

export default Navigation;
