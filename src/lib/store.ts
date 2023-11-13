import { create } from "zustand";
import type { Todo, Tab } from "@lib/types";
import { createTodo, deleteTodoById, updateTodo } from "@lib/api";

interface AppState {
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
  addTodo: (todo: Todo) => Promise<void>;
  deleteTodo: (id: string) => Promise<void>;
  updateTodo: (todo: Todo) => Promise<void>;
  tab: Tab;
  setTab: (tab: Tab) => void;
  clearCompleted: () => void;
}

export const useAppStore = create<AppState>()((set) => ({
  todos: [],
  setTodos: (todos: Todo[]) => set(() => ({ todos })),
  addTodo: async (todo: Todo) => {
    const newTodo = await createTodo(todo);
    set((state) => ({ todos: [...state.todos, newTodo] }));
  },
  deleteTodo: async (id: string) => {
    await deleteTodoById(id);
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    }));
  },
  updateTodo: async (todo: Todo) => {
    await updateTodo(todo.id, todo);
    set((state) => ({
      todos: state.todos.map((current) =>
        current.id === todo.id ? todo : current,
      ),
    }));
  },
  tab: "All",
  setTab: (tab: Tab) => set(() => ({ tab })),
  clearCompleted: () =>
    set((state) => ({
      todos: state.todos.filter((todo) => !todo.checked),
    })),
}));

export const useTodos = () => useAppStore((state) => state.todos);
export const useCompletedTodos = () =>
  useAppStore((state) => state.todos.filter((todo) => todo.checked));
export const useIncompleteTodos = () =>
  useAppStore((state) => state.todos.filter((todo) => !todo.checked));
