import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore, { MockStoreEnhanced } from "redux-mock-store";
import { RootState } from "../../store/configureStore";
import TodoList from "../TodoList";
import {
  completeTodo,
  deleteTodo,
} from "../../features/todos/actions/todoActions";

const mockStore = configureStore([]);

describe("TodoList Component", () => {
  let store: MockStoreEnhanced<RootState, any>;

  let initialState: RootState;

  beforeEach(() => {
    initialState = {
      todos: [
        { id: 1, text: "Todo 1", completed: false },
        { id: 2, text: "Todo 2", completed: true },
      ],
    };

    store = mockStore(initialState as RootState) as MockStoreEnhanced<
      RootState,
      any
    >;
  });

  it("renders TodoList correctly with todos", () => {
    render(
      <Provider store={store}>
        <TodoList />
      </Provider>
    );

    // Assertions for the initial state
    expect(screen.getByText("Todo 1")).toBeInTheDocument();
    expect(screen.getByText("Todo 2")).toBeInTheDocument();
  });
  it("handles toggling a todo", () => {
    render(
      <Provider store={store}>
        <TodoList />
      </Provider>
    );

    const toggleButton = screen.getByText("Complete");
    fireEvent.click(toggleButton);

    // Assertions for the toggled state
    const actions = store.getActions();
    expect(actions).toContainEqual(completeTodo(1));
  });

  it("handles deleting a todo", () => {
    render(
      <Provider store={store}>
        <TodoList />
      </Provider>
    );

    const deleteButton = screen.getAllByText("Delete")[0];
    fireEvent.click(deleteButton);

    // Assertions for the deleted state
    const actions = store.getActions();
    expect(actions).toContainEqual(deleteTodo(1));
  });
  it("renders a message when there are no todos", () => {
    initialState.todos = [];

    render(
      <Provider store={store}>
        <TodoList />
      </Provider>
    );

    expect(
      screen.getByText("No Todo List, Please add the todo List...")
    ).toBeInTheDocument();
  });
});
