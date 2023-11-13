"use client";
import type { Todo } from "@lib/types";
import { Checkbox } from "@components/ui/Checkbox";
import { DeleteButton } from "@components/ui/DeleteButton";
import React, { FormEvent, useState } from "react";
import { useAppStore } from "@lib/store";
import { TodoInput } from "@components/TodoInput";

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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input === "") return;
    await updateTodo({ id: todo.id, content: input, checked });
  };

  return (
    <form
      method="post"
      className={
        "group flex items-center justify-between gap-3 px-4 py-3 text-sm dark:bg-dmVeryDarkDesaturatedBlue sm:gap-5 sm:px-6 sm:py-4 sm:text-base"
      }
      onSubmit={handleSubmit}
    >
      <div className={"p-0.5"}>
        <Checkbox
          checked={checked}
          setChecked={setChecked}
          handleUpdate={async () =>
            await updateTodo({
              id: todo.id,
              content: input,
              checked: !checked,
            })
          }
        />
      </div>
      <TodoInput input={input} setInput={setInput} checked={checked} />
      <DeleteButton handleDelete={async () => await deleteTodo(todo.id)} />
    </form>
  );
};
