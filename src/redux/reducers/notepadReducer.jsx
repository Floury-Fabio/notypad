import { notepadRefresher } from 'helpers/reducersHelpers';
import UPDATE_NOTEPADS_LIST from '../types/notepadTypes';

const initialState = notepadRefresher();

const notepadReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NOTEPADS_LIST:
      return {
        ...state,
        notepadsList: action.notepadsList,
      };
    default:
      return {
        ...state,
      };
  }
};

export default notepadReducer;
