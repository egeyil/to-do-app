"use client";
import type { Todo } from "@lib/types";
import { Checkbox } from "@components/ui/Checkbox";
import { DeleteButton } from "@components/ui/DeleteButton";
import React, { FormEvent, useEffect, useState } from "react";
import { useAppStore } from "@lib/store";
import { TodoInput } from "@components/ui/TodoInput";

interface TodoItemProps {
  todo: Todo;
}

export const TodoItem = ({ todo }: TodoItemProps) => {
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
        "group flex items-center justify-between gap-3 px-4 py-3 text-sm dark:bg-dmVeryDarkDesaturatedBlue sm:gap-5 sm:px-6 sm:py-4 sm:text-base"
      }
      onSubmit={(e) => {
        e.preventDefault();
        if (input !== "") {
          handleSubmit(e);
        }
      }}
    >
      <div className={"p-0.5"}>
        <Checkbox checked={checked} setChecked={setChecked} />
      </div>
      <TodoInput input={input} setInput={setInput} />
      <DeleteButton id={todo.id} deleteTodo={deleteTodo} />
    </form>
  );
};
