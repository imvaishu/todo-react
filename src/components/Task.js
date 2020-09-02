import React from 'react';

const Task = ({ task, onClick, handleRemove }) => {
  const classes = `display ${task.status}`;
  return (
    <div className="item">
      <div className={classes}>
        <div></div>
        <span className="content" onClick={() => onClick(task.id)}>
          {task.content}
        </span>
        <div className="remove" onClick={() => handleRemove(task.id)}>
          X
        </div>
      </div>
    </div>
  );
};

export default Task;
