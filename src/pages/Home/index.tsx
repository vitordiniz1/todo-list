import { useState } from "react";
import TodoForm from "./components/TodoForm";
import styles from "./styles.module.css";
import clipboardIcon from "../../assets/clipboard-icon.svg";
import TodoItem from "./components/TodoItem";

export interface TodoListProps {
  id: string;
  text: string;
  finished: boolean;
}

export default function Home() {
  const [todoList, setTodoList] = useState<TodoListProps[]>([]);

  const handleSetTodo = (text: string) => {
    const newId = new Date().toISOString();

    if (text.length) {
      setTodoList((state) => [...state, { id: newId, text, finished: false }]);
    }
  };

  const markTodoHasFinished = (id: string) => {
    console.log(id);
  };

  const removeTodo = (id: string) => {
    console.log(id);
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
              <TodoItem
                id={todo.id}
                text={todo.text}
                finished={todo.finished}
                markTodoHasFinished={markTodoHasFinished}
                removeTodo={removeTodo}
                key={todo.id}
              />
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
