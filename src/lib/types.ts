export interface Todo {
  id: string;
  content: string;
  checked: boolean;
}

export type Tab = "all" | "active" | "completed";
