import styles from "./Navbutton.module.scss";
import Button from "./Button";

function NavButton({ children, ...props }) {
  return (
    <Button className={styles.button} {...props}>
      {children}
    </Button>
  );
}

export default NavButton;
