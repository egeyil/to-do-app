import { CreateTodo } from "@components/CreateTodo";
import { TodoList } from "@components/TodoList";
import { getTodos } from "@lib/api";

export default async function Home() {
  // const todos = await getTodos();

  return (
    <>
      <CreateTodo />
      <TodoList />
    </>
  );
}
