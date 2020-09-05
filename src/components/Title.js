import React from 'react';
import InputBox from './InputBox';
import RemoveItem from './RemoveItem';

class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modifiable: false };
    this.handleClick = this.handleClick.bind(this);
    this.handleKeydown = this.handleKeydown.bind(this);
  }

  handleClick() {
    this.setState({ modifiable: true });
  }

  handleKeydown(title) {
    this.setState({ modifiable: false });
    this.props.updateTitle(title);
  }

  render() {
    let title = (
      <div className='todo-box'>
        <span className="display heading" onClick={this.handleClick}>{this.props.title}</span>
        <RemoveItem handleRemove={this.props.removeTodo} />
      </div>
    );

    if (this.state.modifiable) {
      title = (
        <InputBox
          value={this.props.title}
          onSubmit={this.handleKeydown}
          className="title"
        />
      );
    }
    return title;
  }
}

export default Title;
