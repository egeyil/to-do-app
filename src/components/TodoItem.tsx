"use client";
import type { Todo as TodoType } from "@lib/types";
import { Checkbox } from "@components/ui/Checkbox";
import { DeleteButton } from "@components/ui/DeleteButton";
import { FormEvent, useEffect, useState } from "react";
import constants from "@lib/constants";
import { useAppStore } from "@lib/store";
import { TodoInput } from "@components/ui/TodoInput";

export const TodoItem = ({ todo }: { todo: TodoType }) => {
  // TODO Save input value to local storage
  // const [input, setInput] = useLocalStorage("CreateTodoInput", "");

  const updateTodo = useAppStore((state) => state.updateTodo);
  const deleteTodo = useAppStore((state) => state.deleteTodo);

  const [input, setInput] = useState(todo.content);
  const [checked, setChecked] = useState<boolean>(todo.checked);

  useEffect(() => {
    updateTodo({ id: todo.id, content: input, checked });
  }, [input, checked]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    updateTodo({ id: todo.id, content: input, checked });
  };

  return (
    <form
      method="post"
      className={
        "group flex items-center justify-between gap-5 px-6 py-4 dark:bg-dmVeryDarkDesaturatedBlue"
      }
      onSubmit={(e) => {
        e.preventDefault();
        if (input !== "") {
          handleSubmit(e);
        }
      }}
    >
      <Checkbox checked={checked} setChecked={setChecked} />
      <TodoInput input={input} setInput={setInput} />
      <DeleteButton id={todo.id} deleteTodo={deleteTodo} />
    </form>
  );
};
