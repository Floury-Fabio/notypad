import UPDATE_CURRENT_NOTE from '../types/noteTypes';

const updateCurrentNote = (currentNote) => (
  {
    type: UPDATE_CURRENT_NOTE,
    currentNote,
  }
);
export default updateCurrentNote;
