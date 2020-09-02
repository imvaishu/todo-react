import React from 'react';
import RemoveItem from './RemoveItem';

const Task = ({ task, onClick, handleRemove }) => {
  const classes = `display ${task.status}`;
  return (
    <div className="item">
      <div className={classes}>
        <div></div>
        <span className="content" onClick={() => onClick(task.id)}>
          {task.content}
        </span>
        <RemoveItem handleRemove={()=>handleRemove(task.id)} />
      </div>
    </div>
  );
};

export default Task;
