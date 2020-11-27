import React from "react";
import styled from "styled-components";
const TodoDiv = styled.div`
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;
const TodoText = styled.p`
  font-size: 1.6rem;
`;
const TodoInfo = styled.div`
  flex-grow: 1;
  margin: 0 2rem;
`;
const TodoControls = styled.div`
  flex-shrink: 1;
`;
const StyledButton = styled.button`
  cursor: pointer;
  font-weight: 600;
  font-size: 1.6rem;
  padding: 1rem 2rem;
  text-transform: lowercase;
  color: white;
  background-color: #2222ab;
  border-radius: 0.5rem;
  transition: all 0.2s;
  &:hover {
    background-color: #171777;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.15);
  }
`;
const CheckBox = (props) => <input type="checkbox" {...props} />;
const ToDo = (props) => {
  console.log(props);
  return props.name ? (
    <TodoDiv>
      <TodoControls>
        <CheckBox />
      </TodoControls>
      <TodoInfo>
        <TodoText>{props.name}</TodoText>
      </TodoInfo>
      <TodoControls>
        <StyledButton onClick={props.delete}>Apagar</StyledButton>
      </TodoControls>
    </TodoDiv>
  ) : null;
};
export default ToDo;
