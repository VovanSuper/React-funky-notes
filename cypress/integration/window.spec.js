/// <reference types="cypress" />

const URL = 'http://localhost:8084/';

context('Window', () => {
  beforeEach(() => {
    cy.visit(URL);
  });

  it('cy.window() - get the global window object', () => {
    // https://on.cypress.io/window
    cy.window({ log: true, timeout: 10000 }).should('have.property', 'top');
  });

  it('cy.document() - get the document object', () => {
    // https://on.cypress.io/document
    cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
  });

  it('cy.title() - get the title', () => {
    // https://on.cypress.io/title
    cy.document().title().should('include', 'Funky Notes');
  });
});
