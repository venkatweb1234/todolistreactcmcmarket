import todosReducer, {
  addTodo,
  completeTodo,
  deleteTodo,
} from "./todoReducers";
import { Todo } from "../../../types/TodoTypes";

describe("todoReducer", () => {
  const initialState: Todo[] = [
    { id: 1, text: "Todo 1", completed: false },
    { id: 2, text: "Todo 2", completed: true },
  ];

  test("addTodo reducer", () => {
    const newTodo: Todo = { id: 3, text: "New Todo", completed: false };
    const action = addTodo(newTodo);
    const newState = todosReducer(initialState, action);

    expect(newState).toHaveLength(initialState.length + 1);
    expect(newState).toContainEqual(newTodo);
  });

  test("completeTodo reducer", () => {
    const todoIdToComplete = 1;
    const action = completeTodo(todoIdToComplete);
    const newState = todosReducer(initialState, action);

    const toggledTodo = newState.find((todo) => todo.id === todoIdToComplete);
    expect(toggledTodo?.completed).toBe(true);
  });

  test("deleteTodo reducer", () => {
    const todoIdToDelete = 2;
    const action = deleteTodo(todoIdToDelete);
    const newState = todosReducer(initialState, action);

    expect(newState).toHaveLength(initialState.length - 1);
    expect(newState.some((todo) => todo.id === todoIdToDelete)).toBe(false);
  });

  test("unknown action type", () => {
    // Test for an unknown action type, the reducer should return the current state
    const action = { type: "UNKNOWN_ACTION_TYPE" };
    const newState = todosReducer(initialState, action);

    expect(newState).toEqual(initialState);
  });
});
