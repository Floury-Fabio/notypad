describe('signIn command', () => {
  beforeEach(() => {
    cy.resetDb();
    cy.fixture('users/user').as('fakeUser').then((fakeUser) => {
      cy.createUser(fakeUser);
      cy.signIn(fakeUser.email, fakeUser.password);
    });
  });

  it('sign correctly', () => {
    cy.window().its('store').invoke('getState').should('to.nested.include', { 'authReducer.isAuth': true });
    cy.getCookie('token').then((cookie) => {
      expect(cookie.value).not.to.be.undefined; // eslint-disable-line no-unused-expressions
    });
  });
});

describe('signIn action', () => {
  beforeEach(() => {
    cy.resetDb();
    cy.fixture('users/user').as('fakeUser').then((fakeUser) => {
      cy.createUser(fakeUser);
    });
  });

  it('Validates successful signIn', function it() {
    cy.visit('/login');
    cy.get('[data-test=email]').type(this.fakeUser.email);
    cy.get('[data-test=password]').type(this.fakeUser.password);
    cy.get('[data-test=submit]').click();

    cy.url().should('include', 'home');
    cy.window().its('store').invoke('getState').should('to.nested.include', { 'authReducer.isAuth': true });
    cy.getCookie('token').then((cookie) => {
      expect(cookie.value).not.to.be.undefined; // eslint-disable-line no-unused-expressions
    });
  });
});

describe('SignUp action', () => {
  beforeEach(() => {
    cy.resetDb();
    cy.fixture('users/user').as('fakeUser');
  });

  it('Validates successful signUp', function it() {
    cy.visit('/register');
    cy.get('[data-test=email]').type(this.fakeUser.email);
    cy.get('[data-test=password]').type(this.fakeUser.password);
    cy.get('[data-test=submit]').click();

    cy.url().should('include', 'home');
    cy.window().its('store').invoke('getState').should('to.nested.include', { 'authReducer.isAuth': true });
    cy.getCookie('token').then((cookie) => {
      expect(cookie.value).not.to.be.undefined; // eslint-disable-line no-unused-expressions
    });
  });
});
