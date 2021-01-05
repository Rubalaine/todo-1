import React from "react";
import styled from "styled-components";
const Container = styled.div`
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
const TodoCreator = (props) => (
  <Container>
    <Input type="text" name="" id="" />
    <Button>Add</Button>
  </Container>
);

export default TodoCreator;
