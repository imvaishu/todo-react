import React, { useState } from 'react';

const InputBox = function (props) {
  const [value, setValue] = useState(props.value);

  const onChange = (event) => setValue(event.target.value);

  const handleSubmit = function (event) {
    event.preventDefault();
    if (value) {
      props.onSubmit(value);
      setValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input className={props.className} value={value} onChange={onChange} />
    </form>
  );
};

InputBox.defaultProps = { value: '' };

export default InputBox;
