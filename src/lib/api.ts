import { constants } from "@lib/constants";
import { Todo } from "@lib/types";

export async function fetcher<T>(url: string) {
  return fetch(url).then((r) => r.json() as Promise<T>);
}

const apiUrl = constants.API_URL;

export async function getTodos() {
  const res = await fetch(`${apiUrl}/todos`);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export async function createTodo(todo: Todo) {
  const res = await fetch(`${apiUrl}/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  if (!res.ok) {
    throw new Error("Failed to create todo");
  }
  return res.json();
}

export async function updateTodo(id: string, data: Todo) {
  const res = await fetch(`${apiUrl}/todos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    throw new Error("Failed to update todo");
  }
  return res.json();
}

export async function deleteTodoById(id: string) {
  const res = await fetch(`${apiUrl}/todos/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) {
    throw new Error("Failed to delete todo");
  }
  return res.json();
}
