import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function TodoItem(props) {
  renderActions = () => {
    if (props.type === "Pending") {
      return `<div className="right floated content">
      <button className="ui button positive">
        <i className="check icon"></i> Mark Complete
      </button>
    </div>
    <div className="content">ToDo</div>`;
    }
  };
  return (
    <div className="ui segment">
      <div className="ui divided list">
        <div className="item">renderActions()</div>
      </div>
    </div>
  );
}
