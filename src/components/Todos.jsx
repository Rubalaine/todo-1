import React from "react";
import styled from "styled-components";
import TodoContext from "../Context/TodoContext";
import Todo from "./Todo";

const TodoList = styled.div`
  background-color: #111185;
  padding: 1rem;
  border-radius: 0.8rem;
`;
const Todos = (props) => (
  <TodoContext.Consumer>
    {(context) => (
      <TodoList>
        {context.todos.map((todo, index) => (
          <Todo
            checked={todo.checked}
            message={todo.message}
            key={index}
            remove={() => context.removeTodo(index)}
            check={() => context.check(index)}
          ></Todo>
        ))}
      </TodoList>
    )}
  </TodoContext.Consumer>
);

export default Todos;
