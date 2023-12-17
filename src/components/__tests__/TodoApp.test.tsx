import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";

import TodoApp from "../TodoApp";
import { addTodo } from "../../features/todos/actions/todoActions";
import store from "../../store/configureStore";

describe("TodoApp Component", () => {
  it("renders TodoApp correctly", () => {
    render(
      <Provider store={store}>
        <TodoApp />
      </Provider>
    );

    expect(screen.getByText("CMC Market Todo List")).toBeInTheDocument();
  });

  it("handles adding a new todo", () => {
    store.dispatch = jest.fn();

    render(
      <Provider store={store}>
        <TodoApp />
      </Provider>
    );

    const inputElement = screen.getByPlaceholderText(
      "Add new todo list items..."
    );
    fireEvent.change(inputElement, { target: { value: "New Todo" } });

    const addButton = screen.getByText("Add Todo");
    fireEvent.click(addButton);

    expect(store.dispatch).toHaveBeenCalledWith(
      addTodo({ id: expect.any(Number), text: "New Todo", completed: false })
    );
  });
});
