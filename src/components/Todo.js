import React, { useState } from 'react';
import InputBox from './InputBox';
import Title from './Title';
import { getDefault, toggleStatus } from '../toggle';
import Task from './Task';
import './todo.css';
import WithDelete from './withDelete';

const TaskWithDelete = WithDelete(Task);
const TitleWithDelete = WithDelete(Title);

const Todo = function (props) {
  const [todoList, setTodoList] = useState([]);
  const [title, setTitle] = useState('Todo');
  let [lastIndex, setLastIndex] = useState(0);

  const setAll = () => {
    setTodoList([]);
    setTitle('Todo');
    setLastIndex(0);
  };

  const createTodoItem = function (content) {
    setTodoList([ ...todoList, { content, id: lastIndex, status: getDefault() }, ]);
    setLastIndex(lastIndex => lastIndex + 1);
  };

  const updateTodoStatus = function (id) {
    const newList = [...todoList];
    const index = newList.findIndex(task => task.id === id);
    newList[index].status = toggleStatus(newList[index].status);
    setTodoList(newList);
  };

  const handleRemove = function (task) {
    const newList = todoList.filter(t => t.id !== task.id);
    setTodoList(newList);
  };

  const todo = todoList.map(task => (
    <TaskWithDelete task={task} key={task.id} onClick={updateTodoStatus} handleRemove={handleRemove} />
  ));

  return (
    <div>
      <TitleWithDelete title={title} updateTitle={setTitle} handleRemove={setAll} />
      {todo}
      <InputBox className="inputBox" onSubmit={createTodoItem} />
    </div>
  );
};

export default Todo;
