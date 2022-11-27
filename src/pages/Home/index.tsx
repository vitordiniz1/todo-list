import { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import styles from "./styles.module.css";
import clipboardIcon from "../../assets/clipboard-icon.svg";
import TodoItem from "./components/TodoItem";

export interface TodoListProps {
  id: number;
  text: string;
  finished: boolean;
}

export default function Home() {
  const [todoList, setTodoList] = useState<TodoListProps[]>([]);
  const [finishedTodos, setFinishedTodos] = useState<number>(0);

  const storageKey = "ignite-todo-list-1.0.0";

  useEffect(() => {
    const storageTodos = localStorage.getItem(storageKey);

    if (storageTodos) {
      setTodoList(JSON.parse(storageTodos));
    }
  }, []);

  const handleSetTodo = (text: string) => {
    const newId = Number(new Date());

    if (text.length) {
      setTodoList((state) => [...state, { id: newId, text, finished: false }]);
      localStorage.setItem(storageKey, JSON.stringify(todoList));
    }
  };

  const markTodoHasFinished = (id: number) => {
    setTodoList(
      todoList.map((todo) => {
        if (!todo.finished && todo.id === id) {
          setFinishedTodos((state) => state + 1);
          return { ...todo, finished: true };
        } else if (todo.finished && todo.id === id) {
          setFinishedTodos((state) => state - 1);
          return { ...todo, finished: false };
        } else {
          return todo;
        }
      })
    );

    localStorage.setItem(storageKey, JSON.stringify(todoList));
  };

  const removeTodo = (id: number, finished: boolean) => {
    const filteredTodos = todoList.filter((todo) => todo.id !== id);

    if (finished) {
      setFinishedTodos((state) => state - 1);
    }

    setTodoList(filteredTodos);
    localStorage.setItem(storageKey, JSON.stringify(todoList));
  };

  return (
    <main className={styles.home}>
      <TodoForm setTodo={handleSetTodo} />
      <section className={styles.tasks}>
        <div className={styles.info}>
          <div className={styles.created}>
            Tarefas criadas{" "}
            <span className={styles.counter}>{todoList.length}</span>
          </div>
          <div className={styles.done}>
            Conclúidas
            <span className={styles.counter}>
              {finishedTodos} {todoList.length ? `de ${todoList.length}` : ""}
            </span>
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
