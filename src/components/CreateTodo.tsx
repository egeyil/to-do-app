"use client";

import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Checkbox } from "@components/Checkbox";
import { FormEvent, useState } from "react";

export function CreateTodo() {
  // TODO Save input value to local storage
  // const [input, setInput] = useLocalStorage("CreateTodoInput", "");

  const [input, setInput] = useState("");
  const [checked, setChecked] = useState<boolean>(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
  }

  return (
    <form
      method="post"
      onSubmit={handleSubmit}
      className={
        "flex items-center justify-between px-6 py-4 rounded dark:bg-dmVeryDarkDesaturatedBlue"
      }
    >
      <Checkbox />
      <input
        className={"w-full"}
        name={"Create a todo"}
        defaultValue={"Create a todo"}
        type="text"
        value={input}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
          }
        }}
        onChange={(e) => setInput(e.target.value)}
      />
    </form>
  );
}
