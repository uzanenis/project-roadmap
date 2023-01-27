import styles from "./AddTaskButton.module.scss";
import cn from "classnames";
import { IconPlus } from "@tabler/icons-react";

function AddTaskButton({ children, className, ...props }) {
  return (
    <button type="button" className={cn(styles.button, className)} {...props}>
      <IconPlus size={20} style={{ marginRight: 8 }} />
      {children}
    </button>
  );
}

export default AddTaskButton;
