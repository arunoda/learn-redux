import {ADD, REMOVE} from '../constants/action_types';

const initialState = {count: 0, error: null};
const baseReducer = (state = initialState, action) => {
  const newState = {count: state.count};
  switch(action.type) {
    case ADD:
      if(newState.count === 5) {
        newState.error = 'You can\'t increase more than five';
        break;
      }
      newState.count++;
      break;
    case REMOVE:
      if(newState.count === 0) {
        newState.error = 'You can\'t remove anymore';
        break;
      }
      newState.count--;
      break;
  }

  return newState;
};

export default baseReducer;