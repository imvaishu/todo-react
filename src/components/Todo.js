import React from 'react';
import InputBox from './InputBox';
import idGenerator from '../idGenerator';
import { getDefault, toggleStatus } from '../toggle';
import Task from './Task';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todoList: [] };
    this.generateId = idGenerator();
    this.createTodoItem = this.createTodoItem.bind(this);
    this.updateTodoStatus = this.updateTodoStatus.bind(this);
  }

  createTodoItem(content) {
    const newList = [...this.state.todoList];
    newList.push({ content, status: getDefault(), id: this.generateId() });
    this.setState({ todoList: newList });
  }

  updateTodoStatus(id) {
    const newList = [...this.state.todoList];
    newList.forEach(task => {
      if (task.id === id) {
        task.status = toggleStatus(task.status);
      }
    });
    this.setState({ todoList: newList });
  }

  render() {
    const todo = this.state.todoList.map((task, index) => (
      <Task
        task={task}
        key={index}
        onClick={this.updateTodoStatus}
        id={index}
      />
    ));

    return (
      <div>
        <h1>Todo</h1>
        {todo}
        <InputBox createTodoItem={this.createTodoItem} />
      </div>
    );
  }
}

export default Todo;
