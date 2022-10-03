import { NextRouter } from 'next/router';
import { Dispatch, SetStateAction } from 'react';
import { ITodos, IToDoData } from '../types';

const refreshData = (router: NextRouter) => {
  router.replace(router.asPath);
};

export async function createToDo(router: NextRouter, data: IToDoData, setForm: Dispatch<SetStateAction<IToDoData>>) {
  try {
    if (data.content === '') return;
    fetch('http://localhost:3000/api/create', {
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
    fetch(`http://localhost:3000/api/todo/${id}`, {
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
    fetch(`http://localhost:3000/api/todo/${data.id}`, {
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