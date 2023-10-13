import { create } from "zustand";
import type { Todo, Tab } from "@lib/types";

interface AppState {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  deleteTodo: (id: string) => void;
  updateTodo: (todo: Todo) => void;
  tab: Tab;
  setTab: (tab: Tab) => void;
  clearCompleted: () => void;
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
  tab: "all",
  setTab: (tab: Tab) => set(() => ({ tab })),
  clearCompleted: () =>
    set((state) => ({ todos: state.todos.filter((todo) => !todo.checked) })),
}));
