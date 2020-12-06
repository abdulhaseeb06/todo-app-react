import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getTodos,
  markTodoComplete,
  markTodoPending,
} from "../actions/todoAction";
export default function TodoList() {
  const state = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const markTodoCompleteAction = (id) => {
    const array = state.pending;
    const obj = array.filter((item) => item.id === id);
    dispatch(markTodoComplete({ id: obj[0].id, title: obj[0].title }));
  };
  const markTodoInCompleteAction = (id) => {
    const array = state.completed;
    const obj = array.filter((item) => item.id === id);
    dispatch(markTodoPending({ id: obj[0].id, title: obj[0].title }));
  };

  useEffect(
    function () {
      dispatch(getTodos());
    },
    [dispatch]
  );

  const completedTodoListHandler = () => {
    if (state.completed.length === 0) {
      return (
        <div className="item">
          <div className="content">No Completed Todo's</div>
        </div>
      );
    } else {
      return state.completed.map((item) => {
        return (
          <div className="item" key={item.id}>
            <div className="right floated content">
              <button
                className="ui button red"
                onClick={() => markTodoInCompleteAction(item.id)}
              >
                <i className="arrow up icon"></i> Mark Incomplete
              </button>
            </div>
            <div className="content">{item.title}</div>
          </div>
        );
      });
    }
  };

  const pendingTodoListHandler = () => {
    if (state.pending.length === 0) {
      return (
        <div className="item">
          <div className="content">No Pending Todo's</div>
        </div>
      );
    } else {
      return state.pending.map((item) => {
        return (
          <div className="item" key={item.id}>
            <div className="right floated content">
              <button
                className="ui button positive"
                onClick={() => markTodoCompleteAction(item.id)}
              >
                <i className="check icon"></i> Mark Complete
              </button>
            </div>
            <div className="content">{item.title}</div>
          </div>
        );
      });
    }
  };

  return (
    <React.Fragment>
      <h4 className="ui horizontal divider header">
        <i className="check square outline icon icon-green"></i>
        Pending Todo's
      </h4>
      <div className="ui segment">
        <div className="ui divided list">{pendingTodoListHandler()}</div>
      </div>
      <h4 className="ui horizontal divider header">
        <i className="check square outline icon icon-green"></i>
        Completed Todo's
      </h4>
      <div className="ui segment">
        <div className="ui divided list">{completedTodoListHandler()}</div>
      </div>
    </React.Fragment>
  );
}
