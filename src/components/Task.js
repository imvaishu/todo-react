import React from 'react';

const Task = ({ task, onClick, id }) => {
  const colors = ['notDone', 'doing', 'done'];
  const content = task.taskId === 2 ? 'lineThrough content' : 'content';

  return (
    <div className="display">
      <span className={colors[task.taskId]}></span>
      <span className={content} onClick={() => onClick(id)}>
        {task.content}
      </span>
    </div>
  );
};

export default Task;
