import React from 'react';
import InputBox from './InputBox';
import Task from './Task';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todoList: [] };

    this.createTodoItem = this.createTodoItem.bind(this);
    this.updateTodoStatus = this.updateTodoStatus.bind(this);
  }

  createTodoItem(content) {
    this.setState(({ todoList }) => ({
      todoList: todoList.concat({ content, taskId: 0 }),
    }));
  }

  updateTodoStatus(id) {
    this.setState(({ todoList }) => {
      const newList = todoList.map(item => ({ ...item }));
      let taskId = newList[id].taskId;
      newList[id].taskId = ++taskId % 3;
      return { todoList: newList };
    });
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
