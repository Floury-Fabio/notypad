import * as notepadAPI from 'services/notepadAPI';

const searchNoteWithTitle = async (title, notepadId) => {
  const response = await notepadAPI.showNotepad({ notepadId });
  if (!response.ok) { return false; }
  const notepad = await response.json();
  const foundedNote = notepad.notes.find((note) => note.title === title);
  if (foundedNote === undefined) {
    return false;
  }
  return foundedNote.id;
};

export default searchNoteWithTitle;
