import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";

import TodoItem from "../TodoItem";
import {
  completeTodo,
  deleteTodo,
} from "../../features/todos/actions/todoActions";
import store from "../../store/configureStore";

describe("TodoItem Component", () => {
  it("renders TodoItem correctly", () => {
    const todo = {
      id: 1,
      text: "Test Todo",
      completed: false,
    };
    render(
      <Provider store={store}>
        <TodoItem todo={todo} />
      </Provider>
    );

    expect(screen.getByText("Test Todo")).toBeInTheDocument();
  });

  it("handles completing a todo", () => {
    const todo = {
      id: 1,
      text: "Test Todo",
      completed: false,
    };

    store.dispatch = jest.fn();

    render(
      <Provider store={store}>
        <TodoItem todo={todo} />
      </Provider>
    );

    const completeButton = screen.getByText("Complete");
    fireEvent.click(completeButton);

    expect(store.dispatch).toHaveBeenCalledWith(completeTodo(todo.id));
  });

  it("handles undoing completion of a todo", () => {
    const todo = {
      id: 1,
      text: "Test Todo",
      completed: true,
    };

    store.dispatch = jest.fn();

    render(
      <Provider store={store}>
        <TodoItem todo={todo} />
      </Provider>
    );

    const undoButton = screen.getByText("Undo");
    fireEvent.click(undoButton);

    expect(store.dispatch).toHaveBeenCalledWith(completeTodo(todo.id));
  });

  it("handles deleting a todo", () => {
    const todo = {
      id: 1,
      text: "Test Todo",
      completed: false,
    };

    store.dispatch = jest.fn();

    render(
      <Provider store={store}>
        <TodoItem todo={todo} />
      </Provider>
    );

    const deleteButton = screen.getByText("Delete");
    fireEvent.click(deleteButton);

    expect(store.dispatch).toHaveBeenCalledWith(deleteTodo(todo.id));
  });
});
