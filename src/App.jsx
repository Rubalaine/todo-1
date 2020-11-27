import React, { Component } from "react";
import styled from "styled-components";
import ToDo from "./components/ToDo";
import CreateTodo from "./components/CreateTodo";

const ContainerDiv = styled.div`
  background-image: linear-gradient(to right bottom, #2222ac, #101055);
  height: 100vh;
  width: 100%;
`;
const ToDoContainerDiv = styled.div`
  max-width: 50rem;
  min-height: 10rem;
  margin: 0 auto;
  transform: translateY(10rem);
  background-color: white;
  border-radius: 0.5rem;
  padding: 2rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
`;

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        name: "here is where i describe something about this todo",
        viewed: false,
      },
      {
        id: 2,
        name: "here is where i describe something about this todo",
        viewed: false,
      },
    ],
  };
  deleteTodo = (index) => {
    const todos = [...this.state.todos];
    todos.splice(index, 1);

    this.setState({ todos: todos });
  };
  createTodo = (todo) => {
    todo.id = Math.random();
    todo.viewed = false;
    const newTodos = [...this.state.todos];
    newTodos.push(todo);
    this.setState({
      todos: newTodos,
    });
  };
  render() {
    const todos = this.state.todos.map((todo, index) => (
      <ToDo
        name={todo.name}
        description={todo.description}
        key={todo.id}
        viewed={todo.viewed}
        delete={() => this.deleteTodo(index)}
      />
    ));
    return (
      <ContainerDiv>
        <ToDoContainerDiv>
          <CreateTodo createTodo={this.createTodo} />
          {todos}
        </ToDoContainerDiv>
      </ContainerDiv>
    );
  }
}

export default App;
