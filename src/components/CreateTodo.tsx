"use client";

import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Checkbox } from "@components/Checkbox";
import { FormEvent, useState, useRef, useEffect } from "react";
import { useAppStore } from "@lib/store";
import { TodoInput } from "@components/TodoInput";
import { CreateButton } from "@components/CreateButton";

export function CreateTodo() {
  // TODO Save input value to local storage to recover data when page is refreshed.
  // const [input, setInput] = useLocalStorage("CreateTodoInput", "");

  const addTodo = useAppStore((state) => state.addTodo);

  const [input, setInput] = useState("");
  const [checked, setChecked] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, [checked]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (input !== "") {
      let id = (Math.random() + 1).toString(36).substring(7); // TODO - Will change this when creating todos in the db.
      addTodo({ id, content: input, checked });
      setInput("");
      setChecked(false);
      if (inputRef.current) inputRef.current.focus();
    }
  };

  return (
    <form
      method="post"
      className={
        "flex gap-5 items-center justify-between px-6 py-4 rounded dark:bg-dmVeryDarkDesaturatedBlue mb-9"
      }
      onSubmit={handleSubmit}
    >
      <Checkbox checked={checked} setChecked={setChecked} />
      <TodoInput
        ref={inputRef}
        input={input}
        setInput={setInput}
        placeholder={"Create a new todo..."}
        name={"Input for creating a new todo"}
      />
      <CreateButton />
    </form>
  );
}
