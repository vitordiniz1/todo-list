import styles from "./styles.module.css";
import { TodoListProps } from "../..";
import { Circle, CheckCircle, Trash } from "phosphor-react";

interface TodoItemProps extends TodoListProps {
  markTodoHasFinished: (id: number) => void;
  removeTodo: (id: number) => void;
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
    <li
      className={`${styles.item} ${finished ? styles.finished : ""}`}
      data-finished={finished}
      key={id}
    >
      <div className={styles.finish}>
        <label htmlFor={`${id}`}>
          {finished ? <CheckCircle size={18} /> : <Circle size={18} />}
        </label>
        <input
          type="checkbox"
          id={`${id}`}
          onClick={handleMarkTodoHasFinished}
          hidden
        />
      </div>
      <div className={styles.text}>{text}</div>
      <div className={styles.trash} onClick={handleRemoveTodo}>
        <Trash size={18} />
      </div>
    </li>
  );
}
