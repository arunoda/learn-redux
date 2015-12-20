import {ADD, REMOVE} from '../constants/action_types.js';

export const add = (dispatch) => {
  dispatch({type: ADD});
};

export const remove = (dispatch) => {
  dispatch({type: REMOVE});
};