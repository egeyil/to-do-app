import type { GetServerSideProps, NextPage } from 'next';
import { useEffect, useState } from 'react';
import { prisma } from '../lib/prisma';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import ToDoItem from '../components/todoitem.component';
import { create } from 'domain';

interface Todos {
  todos: {
    id: string;
    content: string;
    completed: boolean;
  }[];
}
interface FormData {
  content: string;
  id: string;
  completed: boolean;
}

const Home = ({ todos }: Todos) => {
  const [form, setForm] = useState<FormData>({ completed: false, content: '', id: '' });
  const router = useRouter();

  const refreshData = () => {
    router.replace(router.asPath);
  };

  async function createToDo(data: FormData) {
    try {
      fetch('http://localhost:3000/api/create', {
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      }).then(() => {
        setForm({ completed: false, content: '', id: '' });
        refreshData();
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteToDo(id: string) {
    try {
      fetch(`http://localhost:3000/api/todo/${id}`, {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'DELETE',
      }).then(() => {
        refreshData();
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function updateToDo(data: { id: string; completed: boolean, content: string }) {
    try {
      fetch(`http://localhost:3000/api/todo/${data.id}`, {
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'PUT',
      }).then(() => {
        refreshData();
      });
    } catch (error) {
      console.log(error);
    }
  }

  // useEffect(() => {
  //   createToDo(form);
  // },[form.completed])

  return (
    <div className='bg-bgImgLight bg-veryLightGrayishBlue dark:bg-bgImgLight bg-no-repeat bg-contain bg-fixed h-screen'>
      <div className='mx-auto max-w-lg pt-16'>
        <div className='flex justify-between'>
          <h1 className='text-veryLightGrayishBlue text-4xl font-semibold tracking-widest'>TODO</h1>
          <button>
            <svg xmlns='http://www.w3.org/2000/svg' width='26' height='26'>
              <path
                fill='#FFF'
                fillRule='evenodd'
                d='M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z'
              />
            </svg>
          </button>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            createToDo(form);
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
        <div className='rounded w-full mt-6 bg-veryLightGray overflow-hidden shadow-lg'>
          {todos?.map(({ id, content, completed }) => (
            <ToDoItem key={id} content={content} completed={completed} id={id} handleUpdate={updateToDo} handleDelete={() => deleteToDo(id)} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const todos = await prisma.todo.findMany({
    select: {
      content: true,
      id: true,
      completed: true,
    },
    orderBy: {
      id: 'asc',
    }
  });

  return {
    props: {
      todos,
    },
  };
};
