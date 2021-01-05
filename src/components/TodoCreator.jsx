import React, { useState } from "react";

import styled from "styled-components";
import TodoContext from "../Context/TodoContext";
const Form = styled.form`
  display: flex;
  background-color: #111185;
  padding: 1rem;
  font-size: 1.6rem;
  border-radius: 0.8rem;
  margin-bottom: 2rem;
`;
const Input = styled.input`
  padding: 1rem;
  margin-right: auto;
  width: 80%;
  border-radius: 0.8rem;
`;
const Button = styled.button`
  width: 16%;
  background-color: #17c297;
  color: white;
  font-weight: bold;
  border-radius: 0.8rem;
  padding: 1rem;
`;
const TodoCreator = (props) => {
  const [message, setMessage] = useState({ message: "" });

  return (
    <TodoContext.Consumer>
      {(context) => {
        const handleChange = (event) => {
          setMessage({ [event.target.id]: event.target.value });
        };
        const handleSubmit = (event) => {
          event.preventDefault();
          context.addTodo(message);
        };
        return (
          <Form onSubmit={handleSubmit}>
            <Input type="text" name="" id="message" onChange={handleChange} />
            <Button>Add</Button>
          </Form>
        );
      }}
    </TodoContext.Consumer>
  );
};

export default TodoCreator;
