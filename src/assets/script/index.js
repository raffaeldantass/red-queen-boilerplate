import React from 'react';
import reactDOM from 'react-dom';

const Hello = () => {
  return (
    <div>
      <h1> Hello </h1>
    </div>
  );
};

export default Hello;

reactDOM.render(<Hello/>, document.getElementById('root'));