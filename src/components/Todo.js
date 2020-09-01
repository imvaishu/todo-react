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
        <Title title={this.state.title} updateTitle={this.updateTitle} />
        {todo}
        <InputBox className='inputBox' onKeyDown={this.createTodoItem} />
      </div>
    );
  }
}

export default Todo;
