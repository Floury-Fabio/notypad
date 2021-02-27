import UPDATE_CURRENT_NOTE from '../types/noteTypes';

const noteReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_CURRENT_NOTE:
      return {
        ...state,
        currentNote: action.currentNote,
      };
    default:
      return {
        ...state,
      };
  }
};

export default noteReducer;
