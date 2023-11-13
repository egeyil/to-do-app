"use client";
import { useAppStore } from "@lib/store";
import { LeftItemsCounter } from "@components/ui/LeftItemsCounter";
import { ClearCompleted } from "@components/ui/ClearCompleted";
import { Tabs } from "@components/Tabs";
import * as React from "react";

export const Navbar = () => {
  const [todos, clearCompleted] = useAppStore((state) => [
    state.todos,
    state.clearCompleted,
  ]);

  const completedTodos = todos?.filter((todo) => todo.checked);
  const activeTodos = todos?.filter((todo) => !todo.checked);

  if (activeTodos.length === 0 && completedTodos.length === 0) return null;
  return (
    <>
      {/*DESKTOP*/}
      <section
        className={
          "flex items-start justify-between gap-4 rounded-b-md bg-white px-5 py-0 pb-6 pt-3 text-xs text-dmDarkGrayishBlue drop-shadow dark:bg-dmVeryDarkDesaturatedBlue dark:drop-shadow-none sm:items-center sm:py-3"
        }
      >
        <LeftItemsCounter leftItems={activeTodos?.length} />
        <nav className={"hidden w-2/6 justify-between gap-4 sm:flex"}>
          <Tabs />
        </nav>
        <ClearCompleted
          disabled={completedTodos?.length === 0}
          clearCompleted={clearCompleted}
          showBtn={completedTodos?.length !== 0}
        />
      </section>

      {/*MOBILE*/}
      <nav
        className={
          "mt-8 flex w-full justify-center gap-9 rounded-md bg-white px-5 py-3.5 text-sm drop-shadow dark:bg-dmVeryDarkDesaturatedBlue dark:shadow-none dark:drop-shadow-none sm:hidden sm:shadow-none"
        }
      >
        <Tabs />
      </nav>
    </>
  );
};
