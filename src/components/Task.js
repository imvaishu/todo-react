import React from 'react';

const Task = ({ task, onClick, id }) => {
  const colors = ['notDone', 'doing', 'done'];
  const color = colors[task.taskId];
  const content = task.taskId === 2 ? 'lineThrough content' : 'content';

  return (
    <div className="display">
      <span className={color}></span>
      <span className={content} onClick={() => onClick(id)}>
        {task.content}
      </span>
    </div>
  );
};

export default Task;
