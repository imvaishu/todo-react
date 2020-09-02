import React from 'react';

export default ({ handleRemove }) => {
  return (
    <div className="remove" onClick={() => handleRemove()}>
      X
    </div>
  );
};
