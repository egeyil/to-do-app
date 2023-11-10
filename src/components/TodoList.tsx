"use client";
import { useAppStore } from "@lib/store";
import { TodoItem } from "@components/TodoItem";

export const TodoList = () => {
  const todos = useAppStore((state) => state.todos);
  const currentTab = useAppStore((state) => state.tab);

  const filteredTodos = todos.filter((todo) => {
    if (currentTab === "All") return true;
    if (currentTab === "Active") return !todo.checked;
    if (currentTab === "Completed") return todo.checked;
  });

  return (
    <section className={"rounded-md flex flex-col rounded overflow-y-hidden"}>
      <ul className={"h-full overflow-y-auto"}>
        {filteredTodos.map((todo) => (
          <li key={todo.id}>
            <TodoItem todo={todo}/>
            <hr className={"border-dmVeryDarkGrayishBlue"}/>
          </li>
        ))}
      </ul>
    </section>
  );
};
