"use client"
import {useState} from "react";

const Todo = ({todo}: {
  todo: {
    content: string,
    completed: boolean,
  }
}) => {
  const [content, setContent] = useState(todo.content);
  const [completed, setCompleted] = useState(todo.completed)

  return (
    <div className="">
      <input
        type="checkbox"
        className="h-5 w-5 text-blue-600"
        checked={completed}
        onChange={() => {
          setCompleted(!completed);
        }}
      />
      <input
        type="text"
        className="ml-2"
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />
    </div>
  )
}

export default Todo;