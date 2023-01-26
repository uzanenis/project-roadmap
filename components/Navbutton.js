import styles from "./Navbutton.module.scss";
import Button from "./Button";
import cn from "classnames";

function Navbutton({ notifyCount, children, className, href, ...props }) {
  return (
    <Button className={cn(styles.button, className)} {...props}>
      {children}
      {notifyCount && <span className={styles.notifyCount}>{notifyCount}</span>}
    </Button>
  );
}

export default Navbutton;
