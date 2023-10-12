import Image from "next/image";
import { CreateTodo } from "@components/CreateTodo";
import { TodoList } from "@components/TodoList";

export default function Home() {
  return (
    <>
      <CreateTodo />
      <TodoList />
    </>
  );
}
