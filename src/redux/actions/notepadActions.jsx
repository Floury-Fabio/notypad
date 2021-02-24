import UPDATE_NOTEPADS_LIST from '../types/notepadTypes';

const updateNotepadsList = (notepadsList) => (
  {
    type: UPDATE_NOTEPADS_LIST,
    notepadsList,
  }
);

export default updateNotepadsList;
