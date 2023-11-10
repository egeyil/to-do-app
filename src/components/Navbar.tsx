"use client"
import { useAppStore, useCompletedTodos } from "@lib/store";
import { LeftItemsCounter } from "@components/ui/LeftItemsCounter";
import { ClearCompleted } from "@components/ui/ClearCompleted";
import { Tabs } from "@components/Tabs";
import * as React from "react";

export const Navbar = () => {
  const [todos, clearCompleted] = useAppStore((state) => [state.todos, state.clearCompleted]);

  const completedTodos = todos.filter((todo) => todo.checked)
  const incompleteTodos = todos.filter((todo) => !todo.checked);

  if (todos.length === 0) return null;
  else {
    return (
      <>
        {/*DESKTOP*/}
        <section
          className={"flex justify-between items-center gap-4 px-5 py-2 bg-dmVeryDarkDesaturatedBlue text-sm text-dmDarkGrayishBlue"}
        >
          <LeftItemsCounter leftItems={incompleteTodos.length}/>
          <nav className={"hidden sm:flex w-2/6 justify-between gap-4"}>
            <Tabs/>
          </nav>
          <ClearCompleted disabled={completedTodos.length === 0} clearCompleted={clearCompleted}
                          showBtn={completedTodos.length !== 0}/>
        </section>

        {/*MOBILE*/}
        <nav
          className={"text-sm bg-dmVeryDarkDesaturatedBlue mt-8 py-3.5 px-5 rounded flex sm:hidden w-full justify-center gap-9"}>
          <Tabs/>
        </nav>
      </>
    );
  }
};
