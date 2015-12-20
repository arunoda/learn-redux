import React from 'react';

const ErrorBanner = ({error}) => (
  <div style={{color: 'red'}}>
    Error: {error}
  </div>
);

const Counter = ({error, count, add, remove}) => (
  <div>
    <div>
      Count: {count}
    </div>
    <div>
      <button onClick={remove}>-</button>
      <button onClick={add}>+</button>
    </div>
    {error? <ErrorBanner error={error} /> : null}
  </div>
);

export default Counter;