import {ADD, REMOVE} from '../constants/action_types.js';

export const add = () => {
  return (dispatch) => {
    dispatch({type: ADD});
  };
};

export const remove = () => {
  return (dispatch) => {
    dispatch({type: REMOVE});
  };
};