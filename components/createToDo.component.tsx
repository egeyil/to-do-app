import { useState } from "react";
import { ICreateTodoProps, IToDoData } from "../types";

const CreateToDo = ({ handleCreate, router }: ICreateTodoProps) => {
  const [form, setForm] = useState<IToDoData>({ completed: false, content: '', id: '' });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleCreate(router, form, setForm)
      }}>
      <div className='rounded mt-12 w-full px-5 py-3 bg-veryLightGray flex items-center'>
        <input
          type='checkbox'
          checked={form.completed}
          className='appearance-none transition-all duration-150 rounded-full h-6 w-6 cursor-pointer border border-solid border-veryDarkGrey hover:border-veryDarkGrayishBlue focus:ring-transparent checked:focus:ring-transparent'
          onChange={() => {
            setForm({ ...form, completed: !form.completed });
          }}
        />
        <input
          type='text'
          className='ml-5 py-1 w-9/12 border-none cursor-pointer text-veryDarkGrayishBlue caret-brightBlue bg-veryLightGray  hover:placeholder:text-veryDarkGrayishBlue focus:ring-transparent focus-visible:border-none focus-visible:outline-none'
          placeholder='Create a new todo...'
          onChange={(e) => setForm({ ...form, content: e.target.value })}
          value={form.content}
        />
      </div>
    </form>
  );
};

export default CreateToDo;
