import React, { Component } from "react";
import styled from "styled-components";
import TodoCreator from "./components/TodoCreator";
import Todos from "./components/Todos";
import TodoContext from "./Context/TodoContext";

const Container = styled.div`
  max-width: 50rem;
  margin: 5rem auto;
  /* background-color: #c6c6cc; */
  /* border-radius: 1rem; */
`;
class App extends Component {
  state = {
    todos: [{ checked: false, message: "hello from the other side", key: 23 }],
  };
  addTodo = (todo) => {
    console.log(todo);
    todo.checked = false;
    todo.key = Math.random();
    const todos = [...this.state.todos];
    todos.push(todo);
    this.setState({ todos: todos });
  };
  removeTodo = (index) => {
    const todos = [...this.state.todos];
    todos.splice(index, 1);
    this.setState({ todos: todos });
  };
  check = (index) => {
    const todos = [...this.state.todos];
    todos[index].checked = !todos[index].checked;
    this.setState({ todos: todos });
  };
  render() {
    return (
      <TodoContext.Provider
        value={{
          todos: this.state.todos,
          addTodo: this.addTodo,
          removeTodo: this.removeTodo,
          check: this.check,
        }}
      >
        <Container>
          <TodoCreator></TodoCreator>
          <Todos></Todos>
        </Container>
      </TodoContext.Provider>
    );
  }
}

export default App;
