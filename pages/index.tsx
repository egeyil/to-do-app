import type { GetServerSideProps } from 'next';
import { prisma } from '../lib/prisma';
import { useRouter } from 'next/router';
import ToDoItem from '../components/todoitem.component';
import { ITodos} from '../types';
import Header from '../components/header.component';
import CreateToDo from '../components/createToDo.component';
import { createToDo, deleteToDo, updateToDo } from '../lib/apiCalls';

const Home = ({ todos }: ITodos) => {
  const router = useRouter();

  return (
    <main className='bg-bgImgLight bg-veryLightGrayishBlue dark:bg-bgImgLight bg-no-repeat bg-contain bg-fixed h-screen'>
      <section className='mx-auto max-w-lg pt-16'>
        <Header />
        <CreateToDo handleCreate={createToDo} router={router} />
        {todos.length > 0 ? (
          <section className='rounded w-full mt-6 bg-veryLightGray overflow-hidden shadow-lg'>
            {todos?.map((todo) => (
              <ToDoItem router={router} key={todo.id} data={todo} handleUpdate={updateToDo} handleDelete={deleteToDo} />
            ))}
            <div className='flex flex-row justify-between px-5 py-4 text-darkGrayishBlue text-sm'>
              <span className='float-left'>5 Active</span>
              <div className='w-max'>
                <button className='hover:text-veryDarkGrayishBlue mr-5'>All</button>
                <button className='hover:text-veryDarkGrayishBlue mr-5'>Active</button>
                <button className='hover:text-veryDarkGrayishBlue'>Completed</button>
              </div>
              <span>
                <button className='float-right hover:text-veryDarkGrayishBlue'>Clear Completed</button>
              </span>
            </div>
          </section>
        ) : (
          ''
        )}
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
