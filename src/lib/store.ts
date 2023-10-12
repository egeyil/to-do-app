import { create } from "zustand";
import { Todo } from "@lib/types";

interface AppState {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  deleteTodo: (id: string) => void;
  updateTodo: (todo: Todo) => void;
}

export const useAppStore = create<AppState>()((set) => ({
  todos: [],
  addTodo: (todo: Todo) => set((state) => ({ todos: [...state.todos, todo] })),
  deleteTodo: (id: string) =>
    set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) })),
  updateTodo: (todo: Todo) =>
    set((state) => ({
      todos: state.todos.map((current) =>
        current.id === todo.id ? todo : current,
      ),
    })),
}));
