import { Dispatch, SetStateAction } from 'react';
import { NextRouter } from 'next/router';

export interface IToDoData {
  content: string;
  completed: boolean;
  id: string;
}

export interface IToDoItemProps {
  router: NextRouter;
  data: IToDoData;
  handleUpdate: (router: NextRouter, todo: IToDoData) => Promise<void>;
  handleDelete: (router: NextRouter, id: string) => Promise<void>;
};

export interface ITodos {
  todos: IToDoData[];
}

export interface ICreateTodoFunction {
  (router: NextRouter, data: IToDoData, setForm: Dispatch<SetStateAction<IToDoData>>): Promise<void>;
}

export interface ICreateTodoProps {
  handleCreate: ICreateTodoFunction;
  router: NextRouter;
}

