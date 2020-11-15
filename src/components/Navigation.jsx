import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
const NavigationDiv = styled.div`
  display: flex;
  padding: 2rem;
  background-color: aliceblue;
`;
const NavigationRight = styled.div`
  margin-right: auto;
`;
const NavigationLink = styled.a`
  text-decoration: none;
  &:not(:last-child) {
    margin-right: 2rem;
  }
`;

const Navigation = () => (
  <NavigationDiv>
    <NavigationRight>
      <NavigationLink>
        <NavLink to="/">Home</NavLink>
      </NavigationLink>
    </NavigationRight>
    <div>
      <NavigationLink>
        <NavLink to="/page2">Page 2</NavLink>
      </NavigationLink>
      <NavigationLink>
        <NavLink to="/page3">Page 3</NavLink>
      </NavigationLink>
      <NavigationLink>
        <NavLink to="/page4">Page 4</NavLink>
      </NavigationLink>
    </div>
  </NavigationDiv>
);

export default Navigation;
