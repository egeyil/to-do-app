import { useEffect, useState } from 'react';

interface ToDoData {
  content: string;
  completed: boolean;
  id: string;
}

type ToDoItemProps = {
  content: string;
  completed: boolean;
  id: string;
  handleUpdate: (todo: ToDoData) => void;
  handleDelete: () => void;
};

const ToDoItem = ({ content, completed, handleDelete, handleUpdate, id }: ToDoItemProps) => {
  const [todo, setTodo] = useState({ completed: completed, content: content, id: id });

  useEffect(() => {
    handleUpdate(todo);
  }, [todo.completed])

  return (
    <div className='group w-full px-5 py-3 flex items-center'>
      <input
        type='checkbox'
        className='appearance-none transition-all duration-150 rounded-full h-6 w-6 cursor-pointer border border-solid border-veryDarkGrey hover:border-veryDarkGrayishBlue focus:ring-transparent checked:focus:ring-transparent'
        checked={todo.completed}
        onChange={() => {
          setTodo({ ...todo, completed: !todo.completed });
        }}
      />
      <form
        className='w-full'
        onSubmit={(e) => {
          e.preventDefault();
          handleUpdate(todo);
        }}>
        <input
          type='text'
          className={
            (completed ? 'line-through ' : '') +
            'ml-5 py-1 w-9/12 border-none text-veryDarkGrayishBlue cursor-pointer caret-brightBlue bg-veryLightGray hover:placeholder:text-veryDarkGrayishBlue focus:ring-transparent focus-visible:border-none focus-visible:outline-none' 
          }
          value={todo.content}
          onChange={(e) => {
            setTodo({ ...todo, content: e.target.value });
          }}
        />
      </form>
      <button className='hidden group-hover:block' onClick={handleDelete}>
        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-6 h-6'>
          <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
        </svg>
      </button>
    </div>
  );
};

export default ToDoItem;
