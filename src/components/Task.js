import React from 'react';

const Task = ({ task, onClick, id }) => {
  const color = task.isDone ? 'done' : 'notDone';
  // const content = task.isDone ? 'lineThrough content' : 'content';

  return (
    <div className="display">
      <span className={color}></span>
      <span className="content" onClick={() => onClick(id)}>
        {task.content}
      </span>
    </div>
  );
};

export default Task;
