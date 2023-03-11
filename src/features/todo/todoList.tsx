"use client";

import { useCreateTodoMutation, useGetAllTodosQuery } from "@/features/api/apiSlice";
import Todo from "@/features/todo/todo";
import { TailSpin } from "react-loader-spinner";

const TodoList = () => {
  const {
    data: todos,
    isLoading,
    isSuccess,
    isError
  } = useGetAllTodosQuery();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center mt-4 p-5">
        <TailSpin
          height="60"
          width="60"
          color="#00BFFF"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }
  if (isError) {
    return (
      <div className="flex items-center justify-center mt-4 p-5">
        <h1 className="text-3xl">Error!</h1>
      </div>
    );
  }
  return (
    <article className="overflow-hidden rounded-md">
      {todos?.map((todo) => {
        return (
          <Todo key={todo.id} todo={todo} />
        );
      })}
    </article>
  );
};

export default TodoList;