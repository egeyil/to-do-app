import type {PayloadAction} from '@reduxjs/toolkit'
import {createSlice, nanoid} from '@reduxjs/toolkit'
import type {RootState} from "@/lib/store"

// Define a type for the slice state
interface Todo {
  id?: string,
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
    addTodo: {
      // The reducer function - this is where the state is mutated
      reducer(state, action: PayloadAction<Todo>) {
        state.push(action.payload)
      },
      // Prepare a payload for the reducer - this is optional and prepares the payload for the reducer,
      // so that we don't have to do it in the component when calling the action
      prepare(content: string, completed: boolean) {
        return {
          payload: {
            id: nanoid(),
            content,
            completed
          }
        }
      }
    }
  }
})

export const selectAllTodos = (state: RootState) => state.todos

export const {addTodo} = todosSlice.actions

export default todosSlice.reducer