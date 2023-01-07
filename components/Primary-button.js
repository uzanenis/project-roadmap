import styles from "./Primary-button.module.scss";
import Button from "./Button";

function PrimaryButton({ children, ...props }) {
  return (
    <Button className={styles.button} {...props}>
      {children}
    </Button>
  );
}

export default PrimaryButton;
