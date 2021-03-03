import { UPDATE_NOTEPADS_LIST, UPDATE_CURRENT_NOTEPAD } from '../types/notepadTypes';

const notepadReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_NOTEPADS_LIST:
      return {
        ...state,
        notepadsList: action.notepadsList,
      };
    case UPDATE_CURRENT_NOTEPAD:
      return {
        ...state,
        currentNotepad: action.currentNotepad,
      };
    default:
      return {
        ...state,
      };
  }
};

export default notepadReducer;
