beforeEach(() => {
  cy.resetDb();
  cy.fixture('users/user').as('fakeUser').then((fakeUser) => {
    cy.createUser(fakeUser);
    cy.signIn(fakeUser.email, fakeUser.password);
  });
  cy.window().its('store').invoke('getState').as('reducerState');
  cy.fixture('notepads/notepads').as('fakeNotepads').then((fakeNotepads) => {
    cy.createNotepad(fakeNotepads[0]).then((response) => response.body.id).as('notepadId');
  });
  cy.fixture('notes/notes').as('fakeNotes');
});

describe('get notepad', () => {
  it('shows all notes', function getNotes() {
    this.fakeNotes.forEach((fakeNote) => {
      cy.createNote({ ...fakeNote, ...{ notepadId: this.notepadId } });
    });

    cy.visit(`/notepad/${this.notepadId}`);

    this.fakeNotes.forEach((fakeNote) => {
      cy.get('ul').should('contain', fakeNote.title);
    });
  });
});
