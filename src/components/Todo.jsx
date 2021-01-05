import React from "react";
import styled from "styled-components";

const TodoDiv = styled.div`
  display: flex;
  font-size: 1.6rem;
  color: white;
  align-items: center;
  justify-content: space-between;
  background-color: #1919aa;
  padding: 1rem;
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;
const TodoText = styled.p`
  text-decoration: ${(props) => (props.checked ? "line-through" : "none")};
`;
const CheckBox = styled.input.attrs({
  type: "checkbox",
})``;
const RemoveTodo = styled.button`
  padding: 1rem;
  border-radius: 0.8rem;
  background-color: #f34747;
  color: white;
  font-weight: bold;
`;
export default function Todo(props) {
  return (
    <TodoDiv>
      <CheckBox checked={props.checked} onChange={props.check}></CheckBox>
      <TodoText checked={props.checked}>{props.message}</TodoText>
      <RemoveTodo onClick={props.remove}>Concluir</RemoveTodo>
    </TodoDiv>
  );
}
