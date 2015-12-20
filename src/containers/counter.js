import React from 'react';
import { connect } from 'react-redux';
import Counter from '../components/counter';
import { add, remove, boot, errored } from '../actions/counter';

class CounterContainer extends React.Component {
  componentDidMount() {
    this.props.boot(`{count}`);
  }

  render() {
    const props = this.props;
    return <Counter {...props}/>
  }
}

const CounterComponent2 = connect(
  ({count, error}) => ({count, error}),
  (dispatch) => ({
    boot: (query) => dispatch(boot(query)),
    add: () => dispatch(add()),
    remove: () => dispatch(remove())
  })
)(CounterContainer);

export default CounterComponent2;