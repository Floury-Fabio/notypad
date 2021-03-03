import { UPDATE_NOTEPADS_LIST, UPDATE_CURRENT_NOTEPAD } from '../types/notepadTypes';

const updateNotepadsList = (notepadsList) => (
  {
    type: UPDATE_NOTEPADS_LIST,
    notepadsList,
  }
);

const updateCurrentNotepad = (currentNotepad) => (
  {
    type: UPDATE_CURRENT_NOTEPAD,
    currentNotepad,
  }
);
export { updateNotepadsList, updateCurrentNotepad };
