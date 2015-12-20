import React from 'react';

const ErrorBanner = ({error}) => (
  <div style={{color: 'red'}}>
    Error: {error}
  </div>
);

const buttonStyle = {
  width: 30,
  height: 30,
  marginRight: 5,
  backgroundColor: '#fff',
  border: '1px solid #ccc',
  outline: 0
};

const Counter = ({error, count, add, remove}) => (
  <div style={{fontSize: 30}}>
    <div>
      Count: {count}
    </div>
    <div>
      <button onClick={remove} style={buttonStyle}>-</button>
      <button onClick={add} style={buttonStyle}>+</button>
    </div>
    {error? <ErrorBanner error={error} /> : null}
  </div>
);

export default Counter;