import React from 'react';
import { connect } from 'react-redux';
import Counter from '../components/counter';
import { add, remove } from '../actions/counter';

const CounterComponent = connect(
  ({count, error}) => ({count, error}),
  (dispatch) => ({
    add: () => dispatch(add()),
    remove: () => dispatch(remove())
  })
)(Counter);

export default CounterComponent;