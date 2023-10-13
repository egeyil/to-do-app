"use client";
import { useState } from "react";
import { useAppStore } from "@lib/store";
import { TodoItem } from "@components/TodoItem";
import { Navbar } from "@components/Navbar";
import { state } from "sucrase/dist/types/parser/traverser/base";

export const TodoList = () => {
  const todos = useAppStore((state) => state.todos);
  const currentTab = useAppStore((state) => state.tab);

  const filteredTodos = todos.filter((todo) => {
    if (currentTab === "all") return true;
    if (currentTab === "active") return !todo.checked;
    if (currentTab === "completed") return todo.checked;
  });

  return (
    <section className={"rounded-md flex flex-col rounded overflow-y-hidden"}>
      <ul className={"h-full overflow-y-auto"}>
        {filteredTodos.map((todo) => (
          <li key={todo.id}>
            <TodoItem todo={todo} />
            <hr className={"border-t-[1px] border-dmVeryDarkGrayishBlue"} />
          </li>
        ))}
      </ul>
      {todos.length > 0 ? <Navbar /> : null}
    </section>
  );
};
