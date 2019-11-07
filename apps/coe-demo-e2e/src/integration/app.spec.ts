import { getGreeting } from '../support/app.po';

describe('coe-demo', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to coe-demo!');
  });
});
