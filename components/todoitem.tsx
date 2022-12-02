import { useEffect, useState, useRef} from 'react';
import { IToDoItemProps, IToDoData } from '../types';

const ToDoItem = ({ router, handleDelete, handleUpdate, data }: IToDoItemProps) => {
  const { id, content, completed } = data;
  const [form, setForm] = useState<IToDoData>({ completed: completed, content: content, id: id});
  const [todoContent, setTodoContent] = useState(content);
  const [completedState, setCompletedState] = useState(completed);

  useEffect(() => {
    setForm({ completed: completedState, content: todoContent, id: id });
  },[completedState, todoContent, id]);

  useEffect(() => {
    if (form.content !== content || form.completed !== completed) {
      handleUpdate(router, form);
    }
  }, [form])

  return (
    <div className='group w-full px-5 py-3 flex items-center border-b'>
      <form
        className='w-full'
        onSubmit={(e) => {
          e.preventDefault();
          handleUpdate(router, form);
        }}>
        <input
          type='checkbox'
          className='appearance-none transition-all duration-150 rounded-full h-6 w-6 cursor-pointer border border-solid border-veryDarkGrey hover:border-veryDarkGrayishBlue focus:ring-transparent checked:focus:ring-transparent'
          checked={completedState}
          onChange={() => {
            setCompletedState(!completedState);
          }}
        />
        <input
          type='text'
          className={
            (completedState ? 'line-through ' : '') +
            'ml-5 py-1 w-9/12 border-none text-veryDarkGrayishBlue cursor-pointer caret-brightBlue bg-veryLightGray hover:placeholder:text-veryDarkGrayishBlue focus:ring-transparent focus-visible:border-none focus-visible:outline-none'
          }
          value={todoContent}
          onChange={(e) => {
            setTodoContent(e.target.value);
          }}
          onBlur={() => {
            handleUpdate(router, form);
          }}
        />
      </form>
      <button className='hidden group-hover:block' onClick={() => {
        handleDelete(router, id);
      }}>
        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-6 h-6'>
          <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
        </svg>
      </button>
    </div>
  );
};

export default ToDoItem;
