import {ADD, REMOVE, BOOT, ERROR} from '../constants/action_types.js';

export const boot = (query) => {
  return (dispatch) => {
    window.client.query(query).
      then(({count}) => {
        dispatch({type: BOOT, count: count});
      })
      .catch((error) => {
        dispatch({type: ERROR, error: error.message});
      });
  };
};

export const add = () => {
  return (dispatch, getState) => {
    if(getState().count === 5) {
      dispatch({type: ERROR, error: 'Cannot add after 5'});
      return;
    }
    
    window.client.mutate(`{add}`)
      .catch((error) => {
        dispatch({type: REMOVE});
        dispatch({type: ERROR, error: error.message});
      });

    dispatch({type: ADD});
  };
};

export const remove = () => {
  return (dispatch, getState) => {
    if(getState().count === 0) {
      dispatch({type: ERROR, error: 'Cannot remove more than this'});
      return;
    }
    
    window.client.mutate(`{remove}`)
      .catch((error) => {
        dispatch({type: ADD});
        dispatch({type: ERROR, error: error.message});
      });
    dispatch({type: REMOVE});
  };
};