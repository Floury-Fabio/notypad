// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
//

import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import fakeUserFixture from '../fixtures/users/user.json';

const apiUrl = Cypress.env('apiUrl');

Cypress.Commands.add('resetDb', () => {
  cy.request('post', `${apiUrl}/api/v1/test/reset_database`);
});

Cypress.Commands.add('createUser', (fakeUser = fakeUserFixture) => {
  const fakeData = {
    user: fakeUser,
  };
  cy.request('post', `${apiUrl}/api/v1/test/create_fake_user`, fakeData);
});

Cypress.Commands.add('signIn', (email, password) => {
  const fakeData = {
    user: {
      email,
      password,
    },
  };
  cy.request('post', `${apiUrl}/users/sign_in`, fakeData).then((response) => {
    cy.visit('/home');
    const token = response.headers.authorization;
    Cookies.set('token', token, { sameSite: 'Lax' });
    const decodedToken = jwtDecode(token);
    cy.window().its('store').invoke('dispatch', { type: 'LOGIN_SUCCESS', userId: decodedToken.sub, exp: decodedToken.exp });
  });
});

Cypress.Commands.add('createNotepads', (fakeNotepads, userId) => {
  fakeNotepads.forEach((fakeNotepad) => {
    cy.request({
      method: 'post',
      url: `${apiUrl}/api/v1/notepads`,
      headers: {
        authorization: Cookies.get('token'),
      },
      body: {
        notepad: {
          title: fakeNotepad.title,
          user_id: userId,
        },
      },
    });
  });
});
