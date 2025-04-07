import { login } from '../helpers/auth';

describe('Go to dashboard screen flow', () => {
  it('should log in and go to dashboard and dowload', () => {
    login('contact@company.io', '12345678');
    cy.get('a[href="/dashboard"]').should('exist').click();
    cy.url().should('eq', 'http://localhost:3000/dashboard');

    // Stub the network request to capture the download URL
    cy.intercept('GET', `${process.env.NEXT_PUBLIC_API_URL}*`).as('download');

    cy.get('button').contains('Download CSV').click();
  });
});