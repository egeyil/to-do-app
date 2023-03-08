import {createSlice} from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from "@/lib/store"

// // Define a type for the slice state
// interface TodoState {
//   content: string,
//   completed: boolean
// }
//
// // Define the initial state using that type
// const initialState: TodoState = {
//   content: "",
//   completed: false
// }

// export const todoSlice = createSlice({
//   name: 'todo',
//   initialState: {
//     content: "",
//     completed: false
//   },
//   reducers: {
//     changeContent: (state, action) => {
//       state.content = action.payload;
//     }
//   }
// })

// export const {changeContent} = todosSlice.actions

// Define a type for the slice state
interface Todo {
  id: string,
  content: string,
  completed: boolean
}

// Define the initial state using that type
const initialState: Todo[] = [
  {
    id: "1",
    content: "Buy milk",
    completed: false
  },
  {
    id: "2",
    content: "Kiss rüya",
    completed: true
  }
]


export const todosSlice = createSlice({
  name: 'todos',
  initialState: initialState,
  reducers: {

  }
})

export const selectAllTodos = (state: RootState) => state.todos

export default todosSlice.reducer