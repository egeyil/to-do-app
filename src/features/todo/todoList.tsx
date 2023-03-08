"use client"

import {useAppDispatch, useAppSelector} from "@/lib/hooks"
import Todo from "@/features/todo/todo";
import {selectAllTodos} from "@/features/todo/todosSlice";

const TodoList = () => {
  const todos = useAppSelector(selectAllTodos)
  const dispatch = useAppDispatch();

  return (
    <div className="">
      {todos.map((todo) => {
        return (
          <Todo key={todo.id} todo={todo}/>
        )
      })}
    </div>
  )
}

export default TodoList