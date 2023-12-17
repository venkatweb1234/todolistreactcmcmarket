import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/configureStore";
import TodoItem from "./TodoItem";
import { MoveTodoListDiv, TodoParaGraph } from "./Todo.style";

// TodoList component represents the list of todos in the Todo App
const TodoList: React.FC = () => {
  // Access the todos from the Redux store using useSelector
  const todos = useSelector((state: RootState) => state.todos);

  return (
    <MoveTodoListDiv>
      {/* Check if there are todos to display */}
      {todos.length > 0 ? (
        // Map through the todos and render TodoItem for each
        todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      ) : (
        // Display a message when there are no todos
        <TodoParaGraph>No Todo List, Please add the todo List...</TodoParaGraph>
      )}
    </MoveTodoListDiv>
  );
};

export default TodoList;
