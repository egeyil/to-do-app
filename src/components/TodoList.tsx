"use client";
import { useAppStore } from "@lib/store";
import { TodoItem } from "@components/TodoItem";
import { Todo } from "@lib/types";

interface TodoListProps {
  todos: Todo[];
}

export const TodoList = ({ todos }: TodoListProps) => {
  const setTodos = useAppStore((state) => state.setTodos);
  const currentTab = useAppStore((state) => state.tab);

  setTodos(todos);

  const filteredTodos = todos?.filter((todo) => {
    if (currentTab === "All") return true;
    else if (currentTab === "Active") return !todo.checked;
    else if (currentTab === "Completed") return todo.checked;
    else return false;
  });

  return (
    <section className={"flex flex-col overflow-y-hidden rounded-t-md"}>
      <ul className={"h-full overflow-y-auto"}>
        {filteredTodos?.map((todo) => (
          <li key={todo.id}>
            <TodoItem todo={todo} />
            <hr className={"border-dmSecondaryText"} />
          </li>
        ))}
      </ul>
    </section>
  );
};
