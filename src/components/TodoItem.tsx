import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import {
  completeTodo,
  deleteTodo,
} from "../features/todos/actions/todoActions";
import { Todo } from "../types/TodoTypes";
import { TodoButton, TodoItemList, TodoText } from "./Todo.style";

// Define the props type for the TodoItem component
interface TodoItemProps {
  todo: Todo;
}

// TodoItem component represents an individual to-do item
const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  // Access the Redux dispatch function
  const dispatch = useDispatch();

  // Function to handle marking a todo as complete
  const handleComplete = useCallback(() => {
    dispatch(completeTodo(todo.id));
  }, [dispatch, todo.id]);

  // Function to handle deleting a todo
  const handleDelete = useCallback(() => {
    dispatch(deleteTodo(todo.id));
  }, [dispatch, todo.id]);

  return (
    <div>
      {/* Styled components for the todo item */}
      <TodoItemList>
        {/* Display the todo text with styling based on completion status */}
        <TodoText completed={todo.completed.toString()}>{todo.text}</TodoText>
        {/* Button to complete or undo a todo */}
        <TodoButton onClick={handleComplete}>
          {" "}
          {todo.completed ? "Undo" : "Complete"}
        </TodoButton>
        {/* Button to delete a todo */}
        <TodoButton onClick={handleDelete}>Delete</TodoButton>
      </TodoItemList>
    </div>
  );
};

export default TodoItem;
