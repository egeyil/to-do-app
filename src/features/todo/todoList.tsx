"use client"

import {useAppDispatch, useAppSelector} from "@/lib/hooks"
import Todo from "@/features/todo/todo";
import {selectAllTodos} from "@/features/todo/todosSlice";

const TodoList = () => {
  const todos = useAppSelector(selectAllTodos)
  const dispatch = useAppDispatch();

  return (
    <article className="overflow-hidden rounded-md">
      {todos.map((todo) => {
        return (
          <Todo key={todo.id} todo={todo}/>
        )
      })}
    </article>
  )
}

export default TodoList