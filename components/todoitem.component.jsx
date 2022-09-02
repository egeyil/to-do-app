import { useState } from 'react';
import handler from '../pages/api/create';

const ToDoItem = ({ content, completed, handleSubmit, handleDelete }) => {
  const [form, setForm] = useState({ completed: completed, content: content });

  return (
    <div className='first:rounded-t last:rounded-b border-2 border-darkGrayishBlue first:mt-14 w-full px-5 py-3 bg-veryLightGray flex items-center'>
      <form className='w-full'
        onSubmit={(e) => {
          e.preventDefault();
          // handleSubmit(form);
        }}>
          <input
            type='checkbox'
            className='appearance-none transition-all duration-150 rounded-full h-6 w-6 cursor-pointer border border-solid border-veryDarkGrey hover:border-veryDarkGrayishBlue focus:ring-transparent checked:focus:ring-transparent'
          />
          <input
            type='text'
            className='ml-5 py-1 w-9/12 border-none cursor-pointer text-veryDarkGrayishBlue caret-brightBlue bg-veryLightGray  hover:placeholder:text-veryDarkGrayishBlue focus:ring-transparent focus-visible:border-none focus-visible:outline-none'
            value={content}
            onChange={(e) => setForm({ ...form, content: e.target.value })}
          />
      </form>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default ToDoItem;
