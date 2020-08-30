import React from 'react';
import './todo.css';

class InputBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const content = this.state.value;
    if (content) {
      this.props.createTodoItem(content);
      this.setState({ value: '' });
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          className="inputBox"
          value={this.state.value}
          onChange={this.onChange}
        />
      </form>
    );
  }
}

export default InputBox;
