"use client";
import { FormEvent, useState } from "react";
// import { useAppDispatch } from "@/lib/hooks";
// import { addTodo } from "@/features/todo/todosSlice";
import { BiCheck } from "react-icons/bi";
import { useCreateTodoMutation } from "@/features/api/apiSlice";

const CreateTodo = () => {
  const [content, setContent] = useState("");
  const [completed, setCompleted] = useState(false);
  // const dispatch = useAppDispatch();
  const [createTodo] = useCreateTodoMutation();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    console.log("submitting");
    // dispatch(addTodo(content, completed));
    createTodo({
      content: content,
      completed: completed
    });
    setContent("");
    setCompleted(false);
  };

  return (
    <form
      className="mb-6 flex w-full items-center rounded-md py-5 px-6 dark:bg-dmVeryDarkDesaturatedBlue dark:text-dmLightGrayishBlue"
      onSubmit={(e) => {
        e.preventDefault();
        console.log("triggered");
        if (content !== "") {
          handleSubmit(e);
        }
      }}
    >
      <div
        className="flex h-6 w-6 items-center justify-center rounded-full bg-lmVeryLightGrayishBlue from-checkFrom to-checkTo p-[1px] hover:bg-gradient-to-r dark:bg-dmVeryDarkGrayishBlue">
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
        className="ml-2 w-full grow border-none px-2 py-0 outline-none focus:caret-primaryBrightBlue focus:ring-0 dark:bg-dmVeryDarkDesaturatedBlue"
        value={content}
        placeholder="Create a new todo..."
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />
    </form>
  );
};

export default CreateTodo;