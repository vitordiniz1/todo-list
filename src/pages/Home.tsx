import { useState } from "react";
import TodoForm from "../components/TodoForm";
import styles from "./Home.module.css";
import clipboardIcon from "../assets/clipboard-icon.svg";
import { Circle, Trash } from "phosphor-react";

interface TodoList {
  id: string;
  text: string;
  finished: boolean;
}

export default function Home() {
  const [todoList, setTodoList] = useState<TodoList[]>([]);

  const handleSetTodo = (text: string) => {
    const newId = new Date().toISOString();

    if (text.length) {
      setTodoList((state) => [...state, { id: newId, text, finished: false }]);
    }
  };

  const handleMarkTodoIsFinished = () => {
    console.log("todo finalizado");
  };

  const handleRemoveTodo = () => {
    console.log("todo removido");
  };

  return (
    <main className={styles.home}>
      <TodoForm setTodo={handleSetTodo} />
      <section className={styles.tasks}>
        <div className={styles.info}>
          <div className={styles.created}>
            Tarefas criadas <span className={styles.counter}>0</span>
          </div>
          <div className={styles.done}>
            Conclúidas
            <span className={styles.counter}>0</span>
          </div>
        </div>
        {!todoList.length ? (
          <div className={styles.empty}>
            <img src={clipboardIcon} alt="" />
            <p className={styles.emptyMessage}>
              Você ainda não tem tarefas cadastradas
            </p>
            <span className={styles.emptyMessage}>
              Crie tarefas e organize seus itens a fazer
            </span>
          </div>
        ) : (
          <ul className={styles.list}>
            {todoList.map((todo) => (
              <li key={todo.id}>
                <div
                  className={styles.finish}
                  onClick={handleMarkTodoIsFinished}
                >
                  <Circle size={18} />
                </div>
                <div className={styles.text}>{todo.text}</div>
                <div className={styles.trash} onClick={handleRemoveTodo}>
                  <Trash size={18} />
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
