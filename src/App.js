import React from "react";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

// TodoInput, TodoList will be rendered in the App.js
function App() {
  return (
    <div className="App">
      <TodoInput></TodoInput>
      <TodoList></TodoList>
    </div>
  );
}

export default App;
