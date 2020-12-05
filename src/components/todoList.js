import React from "react";

export default function TodoList() {
  return (
    <React.Fragment>
      <h4 className="ui horizontal divider header">
        <i className="check square outline icon icon-green"></i>
        Pending Todo's
      </h4>
      <div className="ui segment">
        <div className="ui divided list">
          <div className="item">
            <div className="right floated content">
              <button className="ui button positive">
                <i className="check icon"></i> Mark Complete
              </button>
            </div>
            <div className="content">ToDo</div>
          </div>
        </div>
      </div>
      <h4 className="ui horizontal divider header">
        <i className="check square outline icon icon-green"></i>
        Completed Todo's
      </h4>
      <div className="ui segment">
        <div className="ui divided list">
          <div className="item">
            <div className="right floated content">
              <button className="ui button red">
                <i className="arrow up icon"></i>
                Mark Pending
              </button>
            </div>
            <div className="content">ToDo</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
