/// <reference types="Cypress"/>

describe('Flujo para editar una propiedad', () => {
  it('Editar registro existoso', () => {
    cy.visit('http://localhost:3000');
    cy.wait(3000);
    cy.get('#btnEdit-1').click();
    cy.wait(3000);
    cy.get('#ubication').click();
    cy.wait(3000);
    cy.get('[data-value="0.1_2_2 - Santa Cruz"]').click();
    cy.wait(3000);
    cy.get('#office').clear().type(3);
    cy.wait(3000);
    cy.get('#btnSave').click();
  });
});
