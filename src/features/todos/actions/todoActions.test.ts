import {
  addTodo,
  completeTodo,
  deleteTodo,
  ADD_TODO,
  COMPLETE_TODO,
  DELETE_TODO,
} from "./todoActions";

describe("todoActions", () => {
  test("addTodo action creator", () => {
    const todo = { id: 1, text: "Test Todo", completed: false };
    const action = addTodo(todo);

    expect(action.type).toBe(ADD_TODO);
    expect(action.payload).toEqual(todo);
  });

  test("completeTodo action creator", () => {
    const todoId = 1;
    const action = completeTodo(todoId);

    expect(action.type).toBe(COMPLETE_TODO);
    expect(action.payload).toBe(todoId);
  });

  test("deleteTodo action creator", () => {
    const todoId = 1;
    const action = deleteTodo(todoId);

    expect(action.type).toBe(DELETE_TODO);
    expect(action.payload).toBe(todoId);
  });
});
