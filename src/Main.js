import React from "react";
// import styled from "styled-components";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/page2" component={Page2} />
      <Route exact path="/page3" component={Page3} />
    </Switch>
  </main>
);
export default Main;
