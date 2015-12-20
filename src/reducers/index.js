import {ADD, REMOVE, BOOT, ERROR} from '../constants/action_types';

const initialState = {count: 0, error: null};
const baseReducer = (state = initialState, action) => {
  const newState = {count: state.count};
  switch(action.type) {
    case BOOT:
      newState.count = action.count;
      break;
    case ADD:
      newState.count++;
      break;
    case REMOVE:
      newState.count--;
      break;
    case ERROR:
      newState.error = action.error;
      break;
  }

  return newState;
};

export default baseReducer;