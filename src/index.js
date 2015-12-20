import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import React from 'react';

const initialState = {count: 0, error: null};

const baseReducer = (state = initialState, action) => {
  const newState = {count: state.count};
  switch(action.type) {
    case 'ADD':
      if(newState.count === 5) {
        newState.error = "You can't increase more than five";
        break;
      }
      newState.count++;
      break;
    case 'REMOVE':
      if(newState.count === 0) {
        newState.error = "You can't remove anymore";
        break;
      }
      newState.count--;
      break;
  }

  return newState;
};

const myStore = createStore(baseReducer);
const add = () => myStore.dispatch({type: 'ADD'});
const remove = () => myStore.dispatch({type: 'REMOVE'});

const Counter = ({count, add, remove}) => (
  <div>
    <div>
      Count: {count}
    </div>
    <div>
      <button onClick={remove}>-</button>
      <button onClick={add}>+</button>
    </div>
  </div>
);

class Layout extends React.Component {
  render() {
    const {count, error} = myStore.getState();
    return (
      <div>
        <Counter count={count} add={add} remove={remove} />
        {(error)? this.renderError(error): ""}
      </div>
    );
  }

  renderError(error) {
    return (
      <div style={{color: 'red'}}>
        Error: {error}
      </div>
    );
  }
}

const render = () => {
  ReactDOM.render(<Layout />, document.getElementById('root'));
};

myStore.subscribe(render);
render();