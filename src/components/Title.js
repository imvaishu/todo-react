import React from 'react';
import InputBox from './InputBox';

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
    let title = <h1 onClick={this.handleClick}>{this.props.title}</h1>;

    if (this.state.modifiable) {
      title = (
        <InputBox
          value={this.props.title}
          onKeyDown={this.handleKeydown}
          className="title"
        />
      );
    }
    return title;
  }
}

export default Title;