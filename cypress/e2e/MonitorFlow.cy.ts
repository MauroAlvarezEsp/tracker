import { login } from '../helpers/auth';

describe('Go to monitor screen flow', () => {
  it('should log in and verify monitor flow', () => {
    login('contact@company.io', '12345678');
    cy.url().should('eq', 'http://localhost:3000/monitor');
    cy.contains('Location Map').should('be.visible');
  });
});