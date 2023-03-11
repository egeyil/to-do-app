"use client";
import { FormEvent, useState } from "react";
import { BiCheck, BiX } from "react-icons/bi";
import { useAppDispatch } from "@/lib/hooks";
import { addTodo, deleteTodo } from "@/features/todo/todosSlice";

const Todo = ({
  todo,
}: {
  todo: {
    content: string;
    completed: boolean;
    id: string
  };
}) => {
  const [content, setContent] = useState(todo.content);
  const [completed, setCompleted] = useState(todo.completed);

  const dispatch = useAppDispatch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    console.log("submitting");
    dispatch(addTodo(content, completed));
    setContent("");
    setCompleted(false);
  };

  const handleDelete = (id: string) => {
    console.log("deleting");
    dispatch(deleteTodo(id));
  };

  return (
    <form
      className="flex w-full items-center border-b border-lmVeryLightGrayishBlue py-5 px-6 last:border-b-0 dark:border-dmVeryDarkGrayishBlueHover dark:bg-dmVeryDarkDesaturatedBlue dark:text-dmLightGrayishBlue"
      onSubmit={(e) => {
        e.preventDefault();
        console.log("triggered");
        if (content !== "") {
          handleSubmit(e);
        }
      }}
    >
      <div
        className={
          "flex h-6 w-6 items-center justify-center rounded-full from-checkFrom to-checkTo p-[1px]" +
          (completed
            ? ""
            : " bg-lmVeryLightGrayishBlue hover:bg-gradient-to-r dark:bg-dmVeryDarkGrayishBlue")
        }
      >
        <button
          type={"button"}
          className={
            "h-full w-full cursor-pointer appearance-none rounded-full rounded-full border-none p-0.5 text-white transition-all duration-150 focus:outline-none focus:ring-transparent focus:ring-transparent focus:ring-transparent focus:ring-offset-0 focus:ring-offset-transparent checked:focus:ring-transparent dark:bg-dmVeryDarkDesaturatedBlue dark:text-white" +
            (completed
              ? " from-checkFrom to-checkTo hover:bg-transparent dark:bg-gradient-to-r"
              : "")
          }
          onClick={() => {
            setCompleted(!completed);
          }}
        >
          <BiCheck
            className={"h-full w-full" + (completed ? " block" : " hidden")}
          />
        </button>
      </div>
      <input
        type="text"
        className="ml-2 grow border-none px-2 py-0 outline-none hover:cursor-pointer focus:caret-primaryBrightBlue focus:ring-0 dark:bg-dmVeryDarkDesaturatedBlue hover:dark:text-dmLightGrayishBlueHover"
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />
      <button type={"button"} className="flex-none " onClick={() => {
        handleDelete(todo.id);
      }}>
        <BiX className={"h-6 w-6 text-dmDarkGrayishBlue hover:dark:text-dmLightGrayishBlueHover"} />
      </button>
    </form>
  );
};

export default Todo;