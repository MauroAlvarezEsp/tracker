import { login } from '../helpers/auth';

describe('Signout flow', () => {
  it('should log in and verify a new flow', () => {
    login('contact@company.io', '12345678');
    cy.contains('button', 'Sign Out').should('exist').click();
    cy.url().should('eq', 'http://localhost:3000/login');
  });
});