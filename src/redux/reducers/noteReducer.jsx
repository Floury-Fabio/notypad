import { UPDATE_CURRENT_NOTE, CLEAN_CURRENT_NOTE } from 'redux/types/noteTypes';

const noteReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_CURRENT_NOTE:
      return {
        ...state,
        currentNote: action.currentNote,
      };
    case CLEAN_CURRENT_NOTE:
      return {
        ...state,
        currentNote: {},
      };
    default:
      return {
        ...state,
      };
  }
};

export default noteReducer;
