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
    <p className="heading" onClick={onChange}> {props.title} </p>
  );

  if (modifiable) {
    title = ( <InputBox value={props.title} onSubmit={handleSubmit}/> );
  }
  return title;
};

export default Title;
