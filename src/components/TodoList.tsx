"use client";
import { useState } from "react";
import { useAppStore } from "@lib/store";
import { TodoItem } from "@components/TodoItem";

export const TodoList = () => {
  const todos = useAppStore((state) => state.todos);
  return (
    <section className={"rounded flex flex-col rounded overflow-y-hidden"}>
      <ul className={"h-full overflow-y-auto"}>
        {todos.map((todo) => (
          <li key={todo.id}>
            <TodoItem todo={todo} />
          </li>
        ))}
      </ul>
    </section>
  );
};
