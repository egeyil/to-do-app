// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Todo } from "@prisma/client";

// Typically, you should only have one API slice per base URL that your application needs
// to communicate with. For example, if your site fetches data from both /api/posts and
// /api/users, you would have a single API slice with /api/ as the base URL, and separate
// endpoint definitions for posts and users. This allows you to effectively take advantage
// of automated re-fetching by defining tag relationships across endpoints.

// Define a service using a base URL and expected endpoints
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:3000/api/` }),
  tagTypes: ["Todos"],
  endpoints: (builder) => ({
    getAllTodos: builder.query<Todo[], void>({
      query: () => "todos",
      providesTags: ["Todos"]
    }),
    createTodo: builder.mutation<Todo, Omit<Todo, "id" | "createdAt" | "updatedAt">>({
      query: (body) => ({
        url: `todos`,
        method: "POST",
        body
      }),
      invalidatesTags: ["Todos"]
    }),
    updateTodo: builder.mutation<Todo, Partial<Todo>>({
      query: (body) => ({
        url: `todos/${body.id}`,
        method: "PUT",
        body
      }),
      invalidatesTags: ["Todos"]
    }),
    deleteTodo: builder.mutation<Todo, Partial<Todo>>({
      query: (body) => ({
        url: `todos/${body.id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Todos"]
    })
  })
});


// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const {
  useGetAllTodosQuery,
  useCreateTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation
} = apiSlice;
