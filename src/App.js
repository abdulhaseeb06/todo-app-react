import React from "react";
import { Provider } from "react-redux";
import TodoItemForm from "./components/todoItemForm";
import TodoList from "./components/todoList";
import store from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <div className="ui raised very padded container segment grid horizontally">
        <h2 className="ui header">
          <div className="content">
            <i className="tasks icon icon-green"></i>Todo Manager
          </div>
        </h2>
        <div className="row">
          <div className="column ten wide">
            <TodoList></TodoList>
          </div>
          <div className="column six wide">
            <TodoItemForm />
          </div>
        </div>
      </div>
    </Provider>
  );
}
