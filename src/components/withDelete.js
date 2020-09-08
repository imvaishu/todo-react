import React from 'react';

const WithDelete = function (Component) {
  return function (props) {
    return (
      <div className="item">
        <Component {...props} />
        <div className="remove" onClick={() => props.handleRemove(props.task)}>
          X
        </div>
      </div>
    );
  };
};

WithDelete.defaultProps = {
  task: {},
};

export default WithDelete;
