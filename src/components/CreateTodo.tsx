"use client";

import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Checkbox } from "@components/ui/Checkbox";
import { FormEvent, useState, useRef, useEffect } from "react";
import { useAppStore } from "@lib/store";
import { TodoInput } from "@components/ui/TodoInput";
import { CreateButton } from "@components/ui/CreateButton";

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
        "mb-9 flex items-center justify-between gap-3 rounded-md px-4 py-3 dark:bg-dmVeryDarkDesaturatedBlue sm:gap-5 sm:px-6 sm:py-4"
      }
      onSubmit={handleSubmit}
    >
      <div className={"p-0.5"}>
        <Checkbox checked={checked} setChecked={setChecked} />
      </div>
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
