const jwt = require('jsonwebtoken');

describe('SignIn', () => {
  beforeEach(() => {
    cy.fixture('users/user').as('fakeUser');
  });

  it('Validates successful login', function it() {
    const token = jwt.sign({ sub: this.fakeUser.id, scp: 'user' }, 'test');
    const fakeResponse = {
      statusCode: 201,
      headers: {
        Authorization: token,
      },
      body: {
        Authorization: token,
        id: this.fakeUser.id,
        email: this.fakeUser.email,
      },
    };

    cy.intercept('users/sign_in', fakeResponse).as('signInResponse');

    cy.visit('/login');
    cy.get('[data-cy=email]').type(this.fakeUser.email);
    cy.get('[data-cy=password]').type('password');
    cy.get('[data-cy=submit]').click();

    cy.wait('@signInResponse');

    cy.url().should('include', 'home');
    cy.window().its('store').invoke('getState').should('to.nested.include', { 'authReducer.userId': this.fakeUser.id });
    cy.getCookie('token').should('have.property', 'value', token);
  });
});
