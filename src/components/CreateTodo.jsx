import React, { Component } from "react";
import styled from "styled-components";
const CreateTodoForm = styled.form`
  display: flex;
  margin-bottom: 2rem;
`;
const SearchButton = styled.button`
  cursor: pointer;
  padding: 1rem 2rem;
  font-size: 1.6rem;
  font-weight: 600;
  border-radius: 0.5rem;
  background-color: #e499ff;
  color: white;
  text-transform: lowercase;
  transition: all 0.2s;
  &:hover {
    background-color: #bb00ff;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.15);
  }
`;
const SearchInput = styled.input`
  border-radius: 0.5rem;
  font-size: 1.6rem;
  font-weight: 500;
  padding: 1rem 2rem;
  flex-grow: 1;
  margin-right: 2rem;
  text-transform: uppercase;
  box-shadow: 0 0 0.3rem rgba(0, 0, 0, 0.15);
  transition: all 0.4s;
  &:focus {
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.15);
  }
`;

class CreateTodo extends Component {
  state = {
    name: null,
  };
  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createTodo(this.state);
  };
  render() {
    return (
      <CreateTodoForm onSubmit={this.handleSubmit}>
        <SearchInput type="text" id="name" onChange={this.handleChange} />
        <SearchButton>Adicionar</SearchButton>
      </CreateTodoForm>
    );
  }
}
export default CreateTodo;
