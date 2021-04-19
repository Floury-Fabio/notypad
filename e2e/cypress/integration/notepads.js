beforeEach(() => {
  cy.resetDb();
  cy.fixture('users/user').as('fakeUser').then((fakeUser) => {
    cy.createUser(fakeUser);
    cy.signIn(fakeUser.email, fakeUser.password);
  });
  cy.window().its('store').invoke('getState').as('reducerState');
});

describe('get all notepads action', () => {
  beforeEach(function prepare() {
    cy.fixture('notepads/notepads').as('fakeNotepads').then((fakeNotepads) => {
      cy.createNotepads(fakeNotepads, this.reducerState.authReducer.userId);
    });
  });

  it('shows all notepads', function it() {
    cy.visit('/notepads');
    cy.get('table').should('contain', this.fakeNotepads[0].title);
    cy.get('table').should('contain', this.fakeNotepads[1].title);
    cy.get('table').should('contain', this.fakeNotepads[2].title);
  });
});
