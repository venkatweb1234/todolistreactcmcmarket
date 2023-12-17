import { createAction } from "@reduxjs/toolkit";
import { Todo } from "../../../types/TodoTypes";

// Action Types
export const ADD_TODO = "todos/addTodo";
export const COMPLETE_TODO = "todos/completeTodo";
export const DELETE_TODO = "todos/deleteTodo";

// Action Creators

// Action creator for adding a new todo
export const addTodo = createAction<Todo, typeof ADD_TODO>("todos/addTodo");

// Action creator for marking a todo as complete
export const completeTodo = createAction<number, typeof COMPLETE_TODO>(
  "todos/completeTodo"
);

// Action creator for deleting a todo
export const deleteTodo = createAction<number, typeof DELETE_TODO>(
  "todos/deleteTodo"
);
