describe('SignIn e2e', () => {
  beforeEach(() => {
    const apiUrl = Cypress.env('apiUrl');
    cy.request('post', `${apiUrl}/api/v1/test/reset_database`);
    cy.fixture('users/user').as('fakeUser').then((fakeUser) => {
      const fakeData = {
        user: fakeUser,
      };
      cy.request('post', `${apiUrl}/api/v1/test/create_fake_user`, fakeData);
    });
  });

  it('Validates successful login', function it() {
    cy.visit('/login');
    cy.get('[data-cy=email]').type(this.fakeUser.email);
    cy.get('[data-cy=password]').type('password');
    cy.get('[data-cy=submit]').click();

    cy.url().should('include', 'home');
    cy.window().its('store').invoke('getState').should('to.nested.include', { 'authReducer.isAuth': true });
    cy.getCookie('token').then((cookie) => {
      expect(cookie.value).not.to.be.undefined; // eslint-disable-line no-unused-expressions
    });
    // should('have.property', 'value');
  });
});
