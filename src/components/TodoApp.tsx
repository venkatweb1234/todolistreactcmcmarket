import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todos/actions/todoActions";
import TodoList from "./TodoList";
import { Todo } from "../types/TodoTypes";
import { TodoButton, TodoContainer, TodoH1, TodoInput } from "./Todo.style";

// TodoApp component represents the main Todo application
const TodoApp: React.FC = () => {
  // Access the Redux dispatch function
  const dispatch = useDispatch();

  // State to manage the input for adding new todos
  const [newTodo, setNewTodo] = useState("");

  // Function to handle adding a new todo
  const handleAddTodo = useCallback(() => {
    if (newTodo.trim() !== "") {
      // Create a new Todo object with a unique ID and default completion status
      const todo: Todo = {
        id: new Date().getTime(),
        text: newTodo.trim(),
        completed: false,
      };

      // Dispatch the addTodo action with the Todo object as the payload
      dispatch(addTodo(todo));

      // Clear the input field after adding the todo
      setNewTodo("");
    }
  }, [dispatch, newTodo]);

  return (
    <TodoContainer>
      {/* Heading for the Todo App */}
      <TodoH1>CMC Market Todo List</TodoH1>

      {/* Input field for adding new todos */}
      <TodoInput
        type="text"
        value={newTodo}
        placeholder="Add new todo list items..."
        onChange={(e) => setNewTodo(e.target.value)}
      />

      {/* Button to trigger the addition of a new todo */}
      <TodoButton onClick={handleAddTodo}>Add Todo</TodoButton>

      {/* Render the TodoList component to display the list of todos */}
      <TodoList />
    </TodoContainer>
  );
};

export default TodoApp;
