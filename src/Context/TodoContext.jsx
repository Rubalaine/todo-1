import React from "react";
const TodoContext = React.createContext({
  todos: [],
  addTodo: () => {},
  removeTodo: () => {},
});

export default TodoContext;
