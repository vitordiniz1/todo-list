import styles from "./TodoForm.module.css";
import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, useState } from "react";

interface TodoFormProps {
  setTodo: (text: string) => void;
}

export default function TodoForm({ setTodo }: TodoFormProps) {
  const [textInput, setTextInput] = useState<string>("");

  const getTextTodo = (ev: ChangeEvent<HTMLInputElement>) => {
    setTextInput(ev.target.value);
  };

  const handleCreateTodo = (ev: FormEvent) => {
    ev.preventDefault();

    setTodo(textInput);
    setTextInput("");
  };

  return (
    <form className={styles.todoForm} onSubmit={handleCreateTodo}>
      <input
        type="text"
        placeholder="Adicionar uma nova tarefa"
        value={textInput}
        onChange={getTextTodo}
      />
      <button type="submit">
        Criar <PlusCircle size={18} />
      </button>
    </form>
  );
}
