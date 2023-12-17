// Interface representing an individual todo item
export interface Todo {
  id: number; // Unique identifier for the todo
  text: string; // Text content of the todo
  completed: boolean; // Indicates whether the todo is completed or not
}

// Interface representing the state structure for todos
export interface TodosState {
  todos: Todo[]; // Array of Todo objects representing the todo list
}
