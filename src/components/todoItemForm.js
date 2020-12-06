import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../actions/todoAction";

export default function TodoItemForm() {
  const [title, setTitle] = useState("");
  const pendingTodoList = useSelector((state) => state.todos.pending);
  const dispatch = useDispatch();

  const addTodoToPendingList = () => {
    dispatch(addTodo({ id: pendingTodoList.length + 1, title }));
    setTitle("");
  };

  return (
    <form className="ui form">
      <div className="field">
        <label htmlFor="todo">To Do</label>
        <input
          type="text"
          placeholder="Enter todo"
          name="todo"
          onInput={(e) => setTitle(e.target.value)}
          value={title}
        />
      </div>
      <button
        className="ui button positive"
        type="button"
        onClick={() => addTodoToPendingList()}
      >
        Save
      </button>
    </form>
  );
}
