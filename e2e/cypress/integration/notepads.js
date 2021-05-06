describe('Notepad actions', () => {
  beforeEach(() => {
    cy.resetDb();
    cy.fixture('users/user').as('fakeUser').then((fakeUser) => {
      cy.createUser(fakeUser);
      cy.signIn(fakeUser.email, fakeUser.password);
    });
    cy.window().its('store').invoke('getState').as('reducerState');
  });

  describe('get all notepads', () => {
    beforeEach(function pepareGetAllNotepadsTest() {
      cy.fixture('notepads/notepads').as('fakeNotepads').then((fakeNotepads) => {
        cy.createNotepads(fakeNotepads, this.reducerState.authReducer.userId);
      });
    });

    it('shows all notepads', function getAllNotepadTest() {
      cy.visit('/notepads');
      cy.get('.card-deck').should('contain', this.fakeNotepads[0].title);
      cy.get('.card-deck').should('contain', this.fakeNotepads[1].title);
      cy.get('.card-deck').should('contain', this.fakeNotepads[2].title);
    });
  });

  describe('create notepad action', () => {
    beforeEach(() => {
      cy.fixture('notepads/notepads').as('fakeNotepads');
    });

    it('create a notepad correctly', function createTest() {
      cy.visit('/notepads');
      cy.contains('New Notepad').click();
      cy.get('#notepad-title-input').type(this.fakeNotepads[0].title);
      cy.get('#validate-btn').click();

      cy.get('.card-deck').should('contain', this.fakeNotepads[0].title);
    });
  });

  describe('update notepad action', () => {
    beforeEach(function updateTest() {
      cy.fixture('notepads/notepads').as('fakeNotepads').then((fakeNotepads) => {
        cy.createNotepads(fakeNotepads, this.reducerState.authReducer.userId);
      });
    });

    it('update a notepad correctly', () => {
      cy.visit('/notepads');
      cy.get('[id^=update-btn]').first().click();
      cy.get('#notepad-title-input').type('banana');
      cy.get('#validate-btn').click();

      cy.get('.card-deck').should('contain', 'banana');
    });
  });

  describe('delete notepad action', () => {
    beforeEach(function prepareDeleteTest() {
      cy.fixture('notepads/notepads').as('fakeNotepads').then((fakeNotepads) => {
        cy.createNotepads(fakeNotepads, this.reducerState.authReducer.userId);
      });
    });

    it('delete a notepad correctly', function deleteTest() {
      cy.visit('/notepads');
      cy.get('[id^=delete-btn]').first().click();

      cy.get('.card').should('have.length', this.fakeNotepads.length - 1);
    });
  });
});
