import styles from "./styles.module.css";
import { TodoListProps } from "../..";
import { Circle, Trash } from "phosphor-react";

interface TodoItemProps extends TodoListProps {
  markTodoHasFinished: (id: string) => void;
  removeTodo: (id: string) => void;
}

export default function TodoItem({
  id,
  text,
  finished,
  markTodoHasFinished,
  removeTodo,
}: TodoItemProps) {
  const handleMarkTodoHasFinished = () => {
    markTodoHasFinished(id);
  };

  const handleRemoveTodo = () => {
    removeTodo(id);
  };

  return (
    <li className={styles.item} data-finished={finished} key={id}>
      <div className={styles.finish} onClick={handleMarkTodoHasFinished}>
        <Circle size={18} />
      </div>
      <div className={styles.text}>{text}</div>
      <div className={styles.trash} onClick={handleRemoveTodo}>
        <Trash size={18} />
      </div>
    </li>
  );
}
