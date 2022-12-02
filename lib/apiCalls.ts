import { NextRouter } from 'next/router';
import { Dispatch, SetStateAction } from 'react';
import { ITodos, IToDoData } from '../types';

const refreshData = (router: NextRouter) => {
  router.push(router.asPath, router.asPath, {
    scroll: false,
  });
};

export async function createToDo(router: NextRouter, data: IToDoData, setForm: Dispatch<SetStateAction<IToDoData>>) {
  try {
    if (data.content === '') return;
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/create`, {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }).then(() => {
      setForm({ completed: false, content: '', id: '' });
      refreshData(router);
    });
  } catch (error) {
    alert(error);
  }
}

export async function deleteToDo(router: NextRouter, id: string) {
  try {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/todo/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'DELETE',
    }).then(() => {
      refreshData(router);
    });
  } catch (error) {
    alert(error);
  }
}

export async function updateToDo(router: NextRouter, data: IToDoData) {
  try {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/todo/${data.id}`, {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'PUT',
    }).then(() => {
      refreshData(router);
    });
  } catch (error) {
    alert(error);
  }
}

export async function clearCompleted(router: NextRouter, idArr: string[]) {
  try {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/todo/clear-completed`, {
      body: JSON.stringify({
        idArr: idArr
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'DELETE',
    }).then(() => {
      refreshData(router);
    });
  } catch (error) {
    alert(error);
  }
}
