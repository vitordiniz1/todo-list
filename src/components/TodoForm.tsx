import styles from "./TodoForm.module.css";
import { PlusCircle } from "phosphor-react";

export default function TodoForm() {
  return (
    <form className={styles.todoForm}>
      <input type="text" placeholder="Adicionar uma nova tarefa" />
      <button type="submit">
        Criar <PlusCircle size={16} />
      </button>
    </form>
  );
}
