import type { GetServerSideProps } from 'next';
import { useState, useEffect } from 'react';
import { prisma } from '../lib/prisma';
import { useRouter } from 'next/router';
import ToDoItem from '../components/todoitem';
import { ITodos } from '../types';
import Header from '../components/header';
import Input from '../components/input';
import { createToDo, deleteToDo, updateToDo, clearCompleted } from '../lib/apiCalls';

const Home = ({ todos }: ITodos) => {
  const router = useRouter();
  const [toDoList, setToDoList] = useState(todos);
  const [activeItems, setActiveItems] = useState(todos.filter((todo) => !todo.completed));
  const [completedItems, setCompletedItems] = useState(todos.filter((todo) => todo.completed));

  useEffect(() => {
    setToDoList(todos);
    setActiveItems(todos.filter((todo) => !todo.completed));
    setCompletedItems(todos.filter((todo) => todo.completed));
    if (todos.length === 0) {
    }
  }, [todos]);

  const selectTab = (tab: number) => {
    switch (tab) {
      // All
      case 0:
        setToDoList(todos);
        break;
      // Active
      case 1:
        setToDoList(activeItems);
        break;
      // Completed
      case 2:
        setToDoList(completedItems);
        break;
      default:
        setToDoList(todos);
        break;
    }
  };

  return (
    <main className='bg-bgImgLight bg-veryLightGrayishBlue dark:bg-bgImgLight bg-no-repeat bg-contain bg-fixed h-screen'>
      <section className='mx-auto max-w-lg pt-16'>
        <Header />
        <Input handleCreate={createToDo} router={router} />
        <section className='rounded w-full mt-6 bg-veryLightGray overflow-hidden shadow-lg'>
          {todos?.length > 0 ? (
            <div className='max-h-96 overflow-y-auto'>
              {toDoList?.map((todo) => (
                <ToDoItem router={router} key={todo.id} data={todo} handleUpdate={updateToDo} handleDelete={deleteToDo} />
              ))}
            </div>
          ) : (
            <div>
              <div className='h-16 w-full px-5 py-3 flex items-center justify-center border-b'>
                <p className='text-veryDarkGrayishBlue'>You have no active todos left. Start adding new ones!</p>
              </div>
              {/* <div className='w-full px-5 py-3 flex items-center border-b'></div> */}
            </div>
          )}
          {/* Navbar */}
          <div className='flex flex-row justify-between px-5 py-4 text-darkGrayishBlue text-sm'>
            <span className='float-left'>{activeItems?.length} Active</span>
            <div className='w-max'>
              <button
                className={`${todos.length > 0 ? 'hover:text-veryDarkGrayishBlue' : ''} mr-5`}
                onClick={() => {
                  selectTab(0);
                }}
                disabled={todos.length === 0 ? true : false}>
                All
              </button>
              <button
                className={`${todos.length > 0 ? 'hover:text-veryDarkGrayishBlue' : ''} mr-5`}
                onClick={() => {
                  selectTab(1);
                }}
                disabled={todos.length === 0 ? true : false}>
                Active
              </button>
              <button
                className={`${todos.length > 0 ? 'hover:text-veryDarkGrayishBlue' : ''} mr-5`}
                onClick={() => {
                  selectTab(2);
                }}
                disabled={todos.length === 0 ? true : false}>
                Completed
              </button>
            </div>
            <span>
              <button className={`${todos.length > 0 ? 'hover:text-veryDarkGrayishBlue' : ''} float-right`} disabled={todos.length === 0 ? true : false} onClick={() => {
                const idArr = completedItems.map((item) => item.id);
                clearCompleted(router, idArr);
                }}>
                Clear Completed
              </button>
            </span>
          </div>
        </section>
      </section>
    </main>
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
    },
  });

  return {
    props: {
      todos,
    },
  };
};
