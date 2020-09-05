import React from 'react';

const Task = ({ task, onClick }) => {
  return (
    <div className={`display ${task.status}`}>
      <div></div>
      <span className="content" onClick={() => onClick(task.id)}>
        {task.content}
      </span>
    </div>
  );
};

export default Task;
