import React from "react";
import TodoApp from "./components/TodoApp";

// App component serves as the entry point for the application
const App: React.FC = () => {
  return (
    <>
      {/* Render the TodoApp component */}
      <TodoApp />
    </>
  );
};

export default App;
