"use client";

import { Checkbox } from "@components/ui/Checkbox";
import { FormEvent, useState, useRef, useEffect } from "react";
import { useAppStore } from "@lib/store";
import { TodoInput } from "@components/TodoInput";
import { CreateButton } from "@components/ui/CreateButton";

export function CreateTodo() {
  const addTodo = useAppStore((state) => state.addTodo);

  const [input, setInput] = useState("");
  const [checked, setChecked] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, [checked]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (input !== "") {
      let id = (Math.random() + 1).toString(36).substring(7); // TODO - Will change this when creating todos in the db.
      await addTodo({ id, content: input, checked });
      setInput("");
      setChecked(false);
      if (inputRef.current) inputRef.current.focus();
    }
  };

  return (
    <form
      method="post"
      className={
        "mb-6 sm:mb-9 flex items-center justify-between gap-3 rounded-md bg-white px-4 py-3 shadow-md dark:bg-dmVeryDarkDesaturatedBlue sm:gap-5 sm:px-6 sm:py-4"
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
      <CreateButton disabled={input.length === 0} />
    </form>
  );
}
