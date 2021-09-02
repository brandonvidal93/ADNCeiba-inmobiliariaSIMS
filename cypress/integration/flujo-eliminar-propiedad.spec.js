/// <reference types="Cypress"/>

describe('Flujo para eliminar una propiedad', () => {
  it('Eliminar registro existoso', () => {
    cy.visit('http://localhost:3000');
    cy.wait(3000);
    cy.get('#btnDelete-3').click();
    cy.wait(3000);
  });
});