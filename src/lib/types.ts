export interface Todo {
  id: string;
  content: string;
  checked: boolean;
}

export type Tab = "All" | "Active" | "Completed";
