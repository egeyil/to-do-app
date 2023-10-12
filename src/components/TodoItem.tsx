"use client";
import type { Todo as TodoType } from "@lib/types";
import { Checkbox } from "@components/Checkbox";
import { DeleteButton } from "@components/DeleteButton";
import { FormEvent, useEffect, useState } from "react";
import constants from "@lib/constants";
import { useAppStore } from "@lib/store";
import { TodoInput } from "@components/TodoInput";

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
        "flex gap-5 items-center justify-between px-6 py-4 dark:bg-dmVeryDarkDesaturatedBlue group"
      }
      onSubmit={(e) => {
        e.preventDefault();
        console.log("triggered");
        if (input !== "") {
          handleSubmit(e);
        }
      }}
    >
      <Checkbox checked={checked} setChecked={setChecked} />
      <TodoInput input={input} setInput={setInput} />
      <DeleteButton id={todo.id} />
    </form>
  );
};