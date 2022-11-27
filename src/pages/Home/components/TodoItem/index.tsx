import styles from "./styles.module.css";
import { TodoListProps } from "../..";
import { Circle, CheckCircle, Trash } from "phosphor-react";

interface TodoItemProps extends TodoListProps {
  markTodoHasFinished: (id: number) => void;
  removeTodo: (id: number, finished: boolean) => void;
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
    removeTodo(id, finished);
  };

  return (
    <li
      className={`${styles.item} ${finished ? styles.finished : ""}`}
      data-finished={finished}
      key={id}
    >
      <label className={styles.finish} htmlFor={`${id}`}>
        {finished ? <CheckCircle size={18} /> : <Circle size={18} />}
      </label>
      <input
        type="checkbox"
        id={`${id}`}
        data-checked={finished}
        hidden
        onClick={handleMarkTodoHasFinished}
      />
      <span className={styles.text}>{text}</span>
      <button className={styles.trash} onClick={handleRemoveTodo}>
        <Trash size={18} />
      </button>
    </li>
  );
}
