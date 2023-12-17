import store, { RootState, AppDispatch } from "./configureStore";

describe("configureStore", () => {
  test("store has the correct reducer", () => {
    const state = store.getState();
    expect(state.todos).toBeDefined();
  });

  test("RootState type is correct", () => {
    // Use the RootState type to ensure it matches the store's state
    const rootState: RootState = store.getState();
    expect(rootState).toEqual({
      todos: expect.anything(),
    });
  });

  test("AppDispatch type is correct", () => {
    // Use the AppDispatch type to ensure it matches the store's dispatch function
    const dispatch: AppDispatch = store.dispatch;
    expect(dispatch).toEqual(expect.any(Function));
  });
});
