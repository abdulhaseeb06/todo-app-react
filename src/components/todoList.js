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
              <i className="check square outline icon icon-green"></i>
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
              <i className="check square outline icon"></i>
            </div>
            <div className="content">ToDo</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
