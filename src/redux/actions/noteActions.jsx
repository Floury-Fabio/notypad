import { UPDATE_CURRENT_NOTE, CLEAN_CURRENT_NOTE } from '../types/noteTypes';

const updateCurrentNote = (currentNote) => (
  {
    type: UPDATE_CURRENT_NOTE,
    currentNote,
  }
);

const cleanCurrentNote = () => (
  {
    type: CLEAN_CURRENT_NOTE,
  }
);
export { updateCurrentNote, cleanCurrentNote };
