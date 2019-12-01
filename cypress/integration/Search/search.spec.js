/// <reference types="cypress" />

describe('Search Functionality', () => {

    beforeEach(() => {
        cy.visit('');
    })

    it('can return empty results in list view with invalid search term', () => {

        cy.get('.map-list-toggle')
          .click();

        cy.get('.search-input')
          .type('2///221/')
          .get('.app-search__no-results')
          .should('have.text', 'Oops! No results!');
    });

    it('can search by keyword in list view', () => {
        cy.get('.map-list-toggle')
          .click();

          cy.get('.search-input')
          .type('sushi')
          .get('.list-item__container > .list-item__details > h4')
          .first()
          .should('have.text', "O' My Sushi");  
    });
    
});