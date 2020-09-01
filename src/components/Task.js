import React from 'react';

const Task = ({ task, onClick, id }) => {
  const classes = `display ${task.status}`;
  return (
    <div className={classes}>
      <div></div>
      <span className='content' onClick={() => onClick(id)}>
        {task.content}
      </span>
    </div>
  );
};

export default Task;
