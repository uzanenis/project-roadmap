import styles from "./Outline-button.module.scss";
import Button from "./Button";

function OutlineButton({ children, ...props }) {
  return (
    <Button className={styles.button} {...props}>
      {children}
    </Button>
  );
}

export default OutlineButton;
