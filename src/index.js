import ReactDOM from 'react-dom';
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';
import Counter from './containers/counter';

const myStore = applyMiddleware(thunk)(createStore)(rootReducer);

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