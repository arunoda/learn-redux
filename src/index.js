import ReactDOM from 'react-dom';
import React from 'react';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';

const initialState = {count: 0, error: null};

const baseReducer = (state = initialState, action) => {
  const newState = {count: state.count};
  switch(action.type) {
    case 'ADD':
      if(newState.count === 5) {
        newState.error = 'You can\'t increase more than five';
        break;
      }
      newState.count++;
      break;
    case 'REMOVE':
      if(newState.count === 0) {
        newState.error = 'You can\'t remove anymore';
        break;
      }
      newState.count--;
      break;
  }

  return newState;
};

const myStore = createStore(baseReducer);

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

const CounterComponent = connect(
  ({count, error}) => ({count, error}),
  (dispatch) => ({
    add: () => dispatch({type: 'ADD'}),
    remove: () => dispatch({type: 'REMOVE'})
  })
)(Counter);

const Layout = () => (
  <Provider store={myStore}>
    <CounterComponent />
  </Provider>
);

const render = () => {
  ReactDOM.render(<Layout />, document.getElementById('root'));
};

myStore.subscribe(render);
render();