import ReactDOM from 'react-dom';
import React from 'react';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';

import baseReducer from './reducers';
import Counter from './containers/counter';

const myStore = createStore(baseReducer);

const Layout = () => (
  <Provider store={myStore}>
    <Counter />
  </Provider>
);

const render = () => {
  ReactDOM.render(<Layout />, document.getElementById('root'));
};

myStore.subscribe(render);
render();