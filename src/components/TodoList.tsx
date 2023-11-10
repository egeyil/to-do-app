"use client";
import { useAppStore } from "@lib/store";
import { TodoItem } from "@components/TodoItem";

export const TodoList = () => {
  const todos = useAppStore((state) => state.todos);
  const currentTab = useAppStore((state) => state.tab);

  const filteredTodos = todos.filter((todo) => {
    if (currentTab === "All") return true;
    else if (currentTab === "Active") return !todo.checked;
    else if (currentTab === "Completed") return todo.checked;
    else return false;
  });

  return (
    <section className={"flex flex-col overflow-y-hidden rounded-t-md"}>
      <ul className={"h-full overflow-y-auto"}>
        {filteredTodos.map((todo) => (
          <li key={todo.id}>
            <TodoItem todo={todo} />
            <hr className={"border-dmSecondaryText"} />
          </li>
        ))}
      </ul>
    </section>
  );
};
