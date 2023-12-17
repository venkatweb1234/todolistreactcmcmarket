import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../../../types/TodoTypes";

// Create a slice of the Redux store for managing todos
const todosSlice = createSlice({
  name: "todos",
  initialState: [] as Todo[], // Initial state is an empty array of todos
  reducers: {
    // Reducer for adding a new todo to the state
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.push(action.payload);
    },
    // Reducer for marking a todo as complete or undoing the completion
    completeTodo: (state, action: PayloadAction<number>) => {
      // Use the 'state' parameter passed to the reducer
      const updatedState = state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );

      return updatedState;
    },
    // Reducer for deleting a todo from the state
    deleteTodo: (state, action: PayloadAction<number>) => {
      const indexToDelete = state.findIndex(
        (todo) => todo.id === action.payload
      );
      if (indexToDelete !== -1) {
        state.splice(indexToDelete, 1);
      }
    },
  },
});

// Extract action creators and reducer from the created slice
export const { addTodo, completeTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
