import React from "react";

export default function TodoItemForm() {
  return (
    <form className="ui form">
      <div className="field">
        <label htmlFor="todo">To Do</label>
        <input type="text" placeholder="Enter todo" name="todo" />
      </div>
      <button className="ui button positive" type="button">
        Save
      </button>
    </form>
  );
}
