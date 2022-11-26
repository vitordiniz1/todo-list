import { useState } from "react";
import TodoForm from "../components/TodoForm";
import styles from "./Home.module.css";
import clipboardIcon from "../assets/clipboard-icon.svg";

export default function Home() {
  const [todoList, setTodoList] = useState([]);

  return (
    <main className={styles.home}>
      <TodoForm />
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
          <ul className={styles.list}></ul>
        )}
      </section>
    </main>
  );
}
