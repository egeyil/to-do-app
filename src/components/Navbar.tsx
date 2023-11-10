"use client";
import { useAppStore, useCompletedTodos } from "@lib/store";
import { LeftItemsCounter } from "@components/ui/LeftItemsCounter";
import { ClearCompleted } from "@components/ui/ClearCompleted";
import { Tabs } from "@components/Tabs";
import * as React from "react";

export const Navbar = () => {
  const [todos, clearCompleted] = useAppStore((state) => [
    state.todos,
    state.clearCompleted,
  ]);

  const completedTodos = todos.filter((todo) => todo.checked);
  const incompleteTodos = todos.filter((todo) => !todo.checked);

  if (todos.length === 0) return null;
  else {
    return (
      <>
        {/*DESKTOP*/}
        <section
          className={
            "flex items-start justify-between gap-4 rounded-b-md bg-dmVeryDarkDesaturatedBlue px-5 py-0 pb-6 pt-3 text-xs text-dmDarkGrayishBlue sm:items-center sm:py-2 sm:text-sm"
          }
        >
          <LeftItemsCounter leftItems={incompleteTodos.length} />
          <nav className={"hidden w-2/6 justify-between gap-4 sm:flex"}>
            <Tabs />
          </nav>
          <ClearCompleted
            disabled={completedTodos.length === 0}
            clearCompleted={clearCompleted}
            showBtn={completedTodos.length !== 0}
          />
        </section>

        {/*MOBILE*/}
        <nav
          className={
            "mt-8 flex w-full justify-center gap-9 rounded-md bg-dmVeryDarkDesaturatedBlue px-5 py-3.5 text-sm sm:hidden"
          }
        >
          <Tabs />
        </nav>
      </>
    );
  }
};
