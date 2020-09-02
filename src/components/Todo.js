import React from 'react';
import InputBox from './InputBox';
import idGenerator from '../idGenerator';
import Title from './Title';
import { getDefault, toggleStatus } from '../toggle';
import Task from './Task';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todoList: [], title: 'Todo' };
    this.generateId = idGenerator();
    this.createTodoItem = this.createTodoItem.bind(this);
    this.updateTodoStatus = this.updateTodoStatus.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
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

  updateTitle(title) {
    console.log(title);
    this.setState({ title });
  }

  handleRemove(id) {
    const newList = this.state.todoList.filter(task => task.id !== id);
    this.setState({ todoList: newList });
  }

  render() {
    const todo = this.state.todoList.map((task) => (
      <Task
        task={task}
        key={task.id}
        onClick={this.updateTodoStatus}
        handleRemove={this.handleRemove}
      />
    ));

    return (
      <div>
        <Title title={this.state.title} updateTitle={this.updateTitle} />
        {todo}
        <InputBox className="inputBox" onKeyDown={this.createTodoItem} />
      </div>
    );
  }
}

export default Todo;
