import { notepadRefresher } from 'helpers/reducersHelpers';
import UPDATE_NOTEPADS_LIST from '../types/notepadTypes';

const initialState = notepadRefresher();

const notepadReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NOTEPADS_LIST:
      return {
        ...state,
        notepads_list: action.notepads_list,
      };
    default:
      return {
        ...state,
      };
  }
};

export default notepadReducer;
