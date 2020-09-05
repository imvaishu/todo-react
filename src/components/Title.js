import React, { useState } from 'react';
import InputBox from './InputBox';

const Title = function (props) {
  const [modifiable, setModifiable] = useState(false);

  const onChange = () => setModifiable(true);

  const handleSubmit = function (title) {
    setModifiable(false);
    props.updateTitle(title);
  };

  let title = (
    <div className="todo-box">
      <span className="display heading" onClick={onChange}>
        {props.title}
      </span>
    </div>
  );

  if (modifiable) {
    title = (
      <InputBox value={props.title} onSubmit={handleSubmit} className="title" />
    );
  }
  return title;
};

export default Title;
