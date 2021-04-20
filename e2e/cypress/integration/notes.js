describe('Note actions', () => {
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

  describe('get notes', () => {
    it('shows all notes', function getNotesTest() {
      this.fakeNotes.forEach((fakeNote) => {
        cy.createNote({ ...fakeNote, ...{ notepadId: this.notepadId } });
      });

      cy.visit(`/notepad/${this.notepadId}`);

      this.fakeNotes.forEach((fakeNote) => {
        cy.get('ul').should('contain', fakeNote.title);
      });
    });
  });

  describe('create note', () => {
    it('create note correctly', function createNoteTest() {
      cy.visit(`/notepad/${this.notepadId}`);
      cy.get('#note-title-input').type('banana');
      cy.get('#note-content-input').type('banana is good');
      cy.get('#submit').click();

      cy.get('ul').should('contain', 'banana');
      cy.get('#note-title-display').should('contain', 'banana');
      cy.get('#note-content-display').should('contain', 'banana is good');
    });
  });

  describe('update note', () => {
    it('update note correctly', function updateNoteTest() {
      this.fakeNotes.forEach((fakeNote) => {
        cy.createNote({ ...fakeNote, ...{ notepadId: this.notepadId } });
      });

      cy.visit(`/notepad/${this.notepadId}`);

      cy.contains(this.fakeNotes[1].title).click();
      cy.get('#note-content-input').clear().type('banana is good');
      cy.get('#submit').click();

      cy.contains(this.fakeNotes[0].title).click();
      cy.contains(this.fakeNotes[1].title).click();
      cy.get('#note-title-display').should('contain', this.fakeNotes[1].title);
      cy.get('#note-content-display').should('contain', 'banana is good');
    });
  });

  describe('delete note', () => {
    it('delete note correctly', function deleteNotetest() {
      this.fakeNotes.forEach((fakeNote) => {
        cy.createNote({ ...fakeNote, ...{ notepadId: this.notepadId } });
      });

      cy.visit(`/notepad/${this.notepadId}`);
      cy.get('.list-group > li:nth-child(2) > div:last-child').click();

      cy.get('ul .list-group-item').should('have.length', this.fakeNotes.length - 1);
    });
  });
});
