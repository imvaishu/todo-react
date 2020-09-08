import React from 'react';

const Task = ({ task, onClick }) => {
  return (
    <p className={`todo-box ${task.status}`} onClick={() => onClick(task.id)}>
      {task.content}
    </p>
  );
};

export default Task;
