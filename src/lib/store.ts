import { create } from "zustand";
import type { Todo, Tab } from "@lib/types";
import { persist, createJSONStorage } from "zustand/middleware";
import useStore from "@/hooks/useStore";

interface AppState {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  deleteTodo: (id: string) => void;
  updateTodo: (todo: Todo) => void;
  tab: Tab;
  setTab: (tab: Tab) => void;
  clearCompleted: () => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      todos: [],
      addTodo: (todo: Todo) =>
        set((state) => ({ todos: [...state.todos, todo] })),
      deleteTodo: (id: string) =>
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        })),
      updateTodo: (todo: Todo) =>
        set((state) => ({
          todos: state.todos.map((current) =>
            current.id === todo.id ? todo : current,
          ),
        })),
      tab: "All",
      setTab: (tab: Tab) => set(() => ({ tab })),
      clearCompleted: () =>
        set((state) => ({
          todos: state.todos.filter((todo) => !todo.checked),
        })),
    }),
    {
      name: "todo-storage", // name of item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default the 'localStorage' is used
    },
  ),
);

export const useTodos = () => useAppStore((state) => state.todos);
export const useCompletedTodos = () =>
  useAppStore((state) => state.todos.filter((todo) => todo.checked));
export const useIncompleteTodos = () =>
  useAppStore((state) => state.todos.filter((todo) => !todo.checked));
