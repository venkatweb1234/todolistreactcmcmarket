import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../features/todos/reducers/todoReducers";

// Configure the Redux store with the todosReducer
const store = configureStore({
  reducer: {
    todos: todosReducer, // Add the todosReducer under the 'todos' key in the store
  },
});

// Define types for RootState and AppDispatch based on the store
export type RootState = ReturnType<typeof store.getState>; // Type for the RootState
export type AppDispatch = typeof store.dispatch; // Type for the AppDispatch

export default store; // Export the configured Redux store
