/// <reference types="cypress" />

const URL = 'http://localhost:8084/';
const NavAboutBtnSelector = '.link-about';
const NavHomeBtnSelector = '.link-home';

context('Actions', () => {
  beforeEach(() => {
    cy.visit(URL);
  });

  // https://on.cypress.io/interacting-with-elements

  it('should navigate to `About` and back to `Home` ', () => {
    cy.get(NavAboutBtnSelector).click({ log: true });
    cy.title().should('contain', 'About');

    cy.get(NavHomeBtnSelector).click({ log: true });
    cy.title().should('contain', 'Home');

    // .type() with special character sequences
  });
});
