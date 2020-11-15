import React, { Component } from "react";

// import Footer from "./components/Footer";
// import Main from "./components/Main";
// import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import "./App.css";

const App = () => (
  <div className="todo-list">
    <TodoItem />
    <TodoItem />
    <TodoItem />
    <TodoItem />
  </div>
);

export default App;
