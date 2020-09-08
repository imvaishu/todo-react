import React, { useState, useEffect } from 'react';
import InputBox from './InputBox';
import Title from './Title';
import Task from './Task';
import './todo.css';
import TodoApi from './todoApi';
import WithDelete from './withDelete';

const TaskWithDelete = WithDelete(Task);
const TitleWithDelete = WithDelete(Title);

const Todo = function () {
  const [todo, setTodo] = useState([]);
  const [title, setTitle] = useState('Todo');

  useEffect(() => {
    TodoApi.getTodoList().then(({ title, todo }) => {
      setTitle(title);
      setTodo(todo);
    });
  }, []);

  const setAll = () => {
    TodoApi.deleteTodoList().then(({ title, todo }) => {
      setTitle(title);
      setTodo(todo);
    });
  };

  const createTodoItem = (content) => {
    TodoApi.createTodoItem(content).then((todo) => setTodo(todo));
  };

  const updateTodoStatus = (id) => {
    TodoApi.updateTodoStatus(id).then((todo) => setTodo(todo));
  };

  const updateTitle = (title) => {
    TodoApi.updateTitle(title).then(setTitle);
  };

  const handleRemove = function (task) {
    TodoApi.deleteTodo(task.id).then(setTodo);
  };

  const todoList = todo.map((task) => (
    <TaskWithDelete task={task} key={task.id} onClick={updateTodoStatus} handleRemove={handleRemove} />
  ));

  return (
    <div>
      <TitleWithDelete title={title} updateTitle={updateTitle} handleRemove={setAll} />
      {todoList}
      <InputBox onSubmit={createTodoItem} />
    </div>
  );
};

export default Todo;
