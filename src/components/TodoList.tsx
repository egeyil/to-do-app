"use client";
import { useAppStore } from "@lib/store";
import { TodoItem } from "@components/TodoItem";
import { Tab, Todo } from "@lib/types";
import { useEffect } from "react";
import * as React from "react";
import { Navbar } from "@components/Navbar";

// interface TodoListProps {
//   todos: Todo[];
// }

export const TodoList = () => {
  // hydrate persisted store after on mount
  useEffect(() => {
    useAppStore.persist.rehydrate();
  }, []);
  const [currentTab, todos] = useAppStore((state) => [state.tab, state.todos]);

  // useEffect(() => {
  //   setTodos(todos);
  // }, []);

  const filterTodos = (tab: Tab, todos: Todo[]) => {
    return todos.filter((todo) => {
      if (tab === "All") return true;
      else if (tab === "Active") return !todo.checked;
      else if (tab === "Completed") return todo.checked;
      else return false;
    });
  };

  // const filteredTodos =
  //   stateTodos?.length > 0
  //     ? filterTodos(currentTab, stateTodos)
  //     : filterTodos("All", todos);

  const filteredTodos = filterTodos(currentTab, todos);

  return (
    <>
      <section
        className={
          "flex flex-col overflow-y-hidden rounded-t-md bg-none drop-shadow-md dark:drop-shadow-none"
        }
      >
        <ul className={"h-full overflow-y-auto"}>
          {filteredTodos?.map((todo) => (
            <li key={todo.id}>
              <TodoItem todo={todo} />
              <hr className={"dark:border-dmSecondaryHover"} />
            </li>
          ))}
        </ul>
      </section>
      <Navbar />
    </>
  );
};
