/// <reference types="cypress" />

const URL = '/';
const NavAboutBtnSelector = '.link-about';
const NavHomeBtnSelector = '.link-home';
const PageTitle = () => '.page-title';

context('Actions', () => {
  beforeEach(() => {
    cy.visit(URL);
  });

  // https://on.cypress.io/interacting-with-elements

  it('should navigate to `About` and back to `Home` ', () => {
    cy.get(NavAboutBtnSelector).click({ log: true });
    cy.get(PageTitle()).should('contain.text', 'About');

    cy.get(NavHomeBtnSelector).click({ log: true });
    cy.get(PageTitle()).should('contain.text', 'All Notes');

    // .type() with special character sequences
  });
});
